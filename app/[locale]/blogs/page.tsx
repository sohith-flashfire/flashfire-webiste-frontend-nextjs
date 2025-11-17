import BlogsClient from "@/src/components/blogs/blogsClient";
import Footer from "@/src/components/footer/footer";
import Navbar from "@/src/components/navbar/navbar";

interface LocaleBlogsPageProps {
  params: {
    locale: string;
  };
}

export default function LocaleBlogsPage({ params }: LocaleBlogsPageProps) {
  return (
    <>
      <Navbar />
      <BlogsClient />
      <Footer />
    </>
  );
}

