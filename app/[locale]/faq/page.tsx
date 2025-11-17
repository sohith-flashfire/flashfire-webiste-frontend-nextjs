import SectionPage from "@/src/components/pages/shared/SectionPage";

interface LocaleFAQPageProps {
  params: {
    locale: string;
  };
}

export default function LocaleFAQPage({ params }: LocaleFAQPageProps) {
  return <SectionPage sectionId="faq" />;
}

