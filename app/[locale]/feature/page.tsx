import SectionPage from "@/src/components/pages/shared/SectionPage";

interface LocaleFeaturePageProps {
  params: {
    locale: string;
  };
}

export default function LocaleFeaturePage({ params }: LocaleFeaturePageProps) {
  return <SectionPage sectionId="feature" />;
}

