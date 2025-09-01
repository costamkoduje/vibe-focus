import { Navigation, GridDebugger } from "@/components";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full relative">
      <Navigation />
      <main className="flex flex-col w-full items-center">
        {children}
      </main>

      <GridDebugger />
    </div>
  );
}