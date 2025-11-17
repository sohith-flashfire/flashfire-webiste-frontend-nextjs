import EmployerForm from "@/src/components/employers/employerForm";
import Footer from "@/src/components/footer/footer";
import Navbar from "@/src/components/navbar/navbar";

interface LocaleEmployeesPageProps {
  params: {
    locale: string;
  };
}

export default function LocaleEmployeesPage({ params }: LocaleEmployeesPageProps) {
  return (
    <>
      <Navbar />
      <EmployerForm />
      <Footer />
    </>
  );
}

