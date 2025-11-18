import PaymentPolicy from "@/src/components/legal/PaymentPolicy";
import Footer from "@/src/components/footer/footer";
import Navbar from "@/src/components/navbar/navbar";

interface LocalePaymentPolicyPageProps {
  params: {
    locale: string;
  };
}

export default function LocalePaymentPolicyPage({ params }: LocalePaymentPolicyPageProps) {
  return (
    <>
      <Navbar />
      <PaymentPolicy />
      <Footer />
    </>
  );
}

