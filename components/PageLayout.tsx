import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">{children}</div>
      <Footer />
    </main>
  );
}
