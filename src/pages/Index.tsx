import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
  <Sidebar />
  <Hero />
  <Footer />
    </div>
  );
};

export default Index;
