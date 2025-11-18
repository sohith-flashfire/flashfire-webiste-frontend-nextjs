import SectionPage from "@/src/components/pages/shared/SectionPage";

interface LocalePricingPageProps {
  params: {
    locale: string;
  };
}

export default function LocalePricingPage({ params }: LocalePricingPageProps) {
  return <SectionPage sectionId="pricing" />;
}

