import TermsOfService from "@/src/components/legal/TermsOfService";
import Footer from "@/src/components/footer/footer";
import Navbar from "@/src/components/navbar/navbar";

interface LocaleTermsOfServicePageProps {
  params: {
    locale: string;
  };
}

export default function LocaleTermsOfServicePage({ params }: LocaleTermsOfServicePageProps) {
  return (
    <>
      <Navbar />
      <TermsOfService />
      <Footer />
    </>
  );
}

