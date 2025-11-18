import EmployerForm from "@/src/components/employers/employerForm";
import Footer from "@/src/components/footer/footer";
import Navbar from "@/src/components/navbar/navbar";

interface LocaleEmployersPageProps {
  params: {
    locale: string;
  };
}

export default function LocaleEmployersPage({ params }: LocaleEmployersPageProps) {
  return (
    <>
      <Navbar />
      <EmployerForm />
      <Footer />
    </>
  );
}

