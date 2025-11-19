import Image from "next/image";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import WhatsAppbtn from "./components/WhatsAppbtn";


export default function Home() {
  return (
    <main>
<WhatsAppbtn />
<Hero />
<Banner />
<Projects />
<Testimonials />

    </main>
  );
}
