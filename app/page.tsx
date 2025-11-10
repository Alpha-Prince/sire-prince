import Image from "next/image";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";


export default function Home() {
  return (
    <main>
<NavBar />    
<Hero />
<Banner />
    </main>
  );
}
