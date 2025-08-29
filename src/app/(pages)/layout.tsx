import { Navigation, GridDebugger } from "@/components/ui";

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
      <div className="w-full bg-[#879aa4] h-10"></div>
      <GridDebugger />
    </div>
  );
}