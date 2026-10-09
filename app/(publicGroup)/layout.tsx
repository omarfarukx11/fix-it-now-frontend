import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Navbar></Navbar>
      <div className="flex-1">
        {children}
      </div>
      <Footer></Footer>
    </>
  );
}
