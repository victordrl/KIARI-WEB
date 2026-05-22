import MiNavbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/sections/form";

export const dynamic = "force-dynamic";

export default function CompraPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <MiNavbar />
      <ContactForm />
      <Footer />
    </div>
  );
}
