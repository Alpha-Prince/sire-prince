
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./about/page";
import Portfolio from "./portfolio/page";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {

  return (
   <>
   <div className="bg-[#06065D] min-h-screen"> 
    {/* <Navbar /> */}
   <Hero />
   <About />
   <Portfolio />
   <Contact />
   <Footer />
   </div>
   
   </>
  );
}
