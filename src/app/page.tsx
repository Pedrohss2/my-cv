import Image from "next/image";
import Home from "../components/Home/Home";
import About from "../components/Home/About";
import Projects from "@/components/Home/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Index() {
  return (
    <div className="">
      <Home />
      <div className="max-w-6xl mx-auto">
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
