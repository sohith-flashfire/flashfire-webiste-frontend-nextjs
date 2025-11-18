import { notFound } from "next/navigation";
import HomePage from "@/src/components/pages/home/Home";
import CanadaHome from "@/src/components/countries/ca/Home";

interface LocalePageProps {
  params: {
    locale: string;
  };
}

const validLocales = ["en-ca"];

export default function LocalePage({ params }: LocalePageProps) {
  const { locale } = params;

  // Handle default locale (no locale in URL)
  if (!locale || locale === "default") {
    return <HomePage />;
  }

  // Handle Canada locale
  if (locale === "en-ca") {
    return <CanadaHome />;
  }

  // Invalid locale - 404
  notFound();
}

