import SectionPage from "@/src/components/pages/shared/SectionPage";

interface LocaleTestimonialsPageProps {
  params: {
    locale: string;
  };
}

export default function LocaleTestimonialsPage({ params }: LocaleTestimonialsPageProps) {
  return <SectionPage sectionId="testimonials" />;
}

