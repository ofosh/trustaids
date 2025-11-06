import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import GetInvolved from "@/components/GetInvolved";
import Impact from "@/components/Impact";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Test from "@/components/Test";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        {/* <Test /> */}
        <Programs />
        <GetInvolved />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
