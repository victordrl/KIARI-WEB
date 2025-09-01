import { MiNavbar } from "@/components/navbar";

interface Props {
  children?: React.ReactNode;
  backgroundUrl?: string;
}

export default function DefaultLayout({ children, backgroundUrl }: Props) {
  return (
    <div className="relative flex flex-col h-screen">
      <MiNavbar />
      <main
        className="container mx-auto max-w-7xl px-6 flex-grow pt-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : "",
        }}
      >
        {children}
      </main>
    </div>
  );
}
