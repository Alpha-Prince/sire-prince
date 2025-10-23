
import Hero from "./components/Hero";
import About from "./components/About";  // Changed from "./about/page"
import Portfolio from "./components/Portfolio";  // Changed from "./portfolio/page"
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Page() {
  return (
    <div className="bg-[#06065D] min-h-screen overflow-x-hidden w-full">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}