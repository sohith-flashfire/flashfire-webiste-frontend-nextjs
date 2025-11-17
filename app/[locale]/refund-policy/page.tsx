import RefundPolicy from "@/src/components/legal/RefundPolicy";
import Footer from "@/src/components/footer/footer";
import Navbar from "@/src/components/navbar/navbar";

interface LocaleRefundPolicyPageProps {
  params: {
    locale: string;
  };
}

export default function LocaleRefundPolicyPage({ params }: LocaleRefundPolicyPageProps) {
  return (
    <>
      <Navbar />
      <RefundPolicy />
      <Footer />
    </>
  );
}

