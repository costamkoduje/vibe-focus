import type { Metadata } from "next";
import { Inter, Figtree } from "next/font/google";
import "./globals.css";
import "@/assets/styles/design-system.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

const figtree = Figtree({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-figtree'
});

export const metadata: Metadata = {
  title: "Focus Electro - Instalacje elektryczne i automatyka dla przemysłu morskiego",
  description: "Kompleksowe instalacje elektryczne i automatyka dla stoczni oraz przemysłu morskiego. Jakość, terminowość, innowacje - to nasza codzienność.",
  keywords: ["instalacje elektryczne", "automatyka", "przemysł morski", "stocznie", "elektryka"],
  authors: [{ name: "Focus Electro" }],
  creator: "Focus Electro",
  publisher: "Focus Electro",
  metadataBase: new URL('https://focus-electro.pl'),
  openGraph: {
    title: "Focus Electro - Instalacje elektryczne i automatyka dla przemysłu morskiego",
    description: "Kompleksowe instalacje elektryczne i automatyka dla stoczni oraz przemysłu morskiego. Jakość, terminowość, innowacje - to nasza codzienność.",
    type: "website",
    locale: "pl_PL",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${figtree.variable}`}>
      <body className={`${inter.className} antialiased bg-gray-mid`}>
        {children}
      </body>
    </html>
  );
}
