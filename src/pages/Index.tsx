
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Events from "@/components/Events";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "John Doe | Cybersecurity Engineer Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Certifications />
      <Events />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Index;
