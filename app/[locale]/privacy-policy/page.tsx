import PrivacyPolicy from "@/src/components/legal/PrivacyPolicy";
import Footer from "@/src/components/footer/footer";
import Navbar from "@/src/components/navbar/navbar";

interface LocalePrivacyPolicyPageProps {
  params: {
    locale: string;
  };
}

export default function LocalePrivacyPolicyPage({ params }: LocalePrivacyPolicyPageProps) {
  return (
    <>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}

