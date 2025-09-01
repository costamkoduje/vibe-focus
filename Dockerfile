# syntax=docker.io/docker/dockerfile:1

FROM node:20-alpine AS base

# Instalacja zależności tylko gdy są potrzebne
FROM base AS deps

# Instalacja libc6-compat dla Alpine Linux
RUN apk add --no-cache libc6-compat python3 make g++ pkgconfig pixman-dev cairo-dev pango-dev jpeg-dev giflib-dev librsvg-dev

WORKDIR /app

# Instalacja zależności na podstawie preferowanego menedżera pakietów
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild kodu źródłowego tylko gdy jest potrzebny
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js zbiera anonimowe dane telemetryczne o ogólnym użyciu.
# Odkomentuj następującą linię jeśli chcesz wyłączyć telemetrię podczas budowania.
ENV NEXT_TELEMETRY_DISABLED=1

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Obraz produkcyjny, kopiowanie wszystkich plików i uruchomienie next
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

# Odkomentuj następującą linię jeśli chcesz wyłączyć telemetrię podczas runtime.
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 -g 1001 nextjs
RUN addgroup nextjs nodejs

COPY --from=builder /app/public ./public

# Automatyczne wykorzystanie output traces do zmniejszenia rozmiaru obrazu
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs:nodejs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

ENV NEXT_PRIVATE_STANDALONE=true

# server.js jest tworzony przez next build z standalone output
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
CMD ["node", "server.js"] 