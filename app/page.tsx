
import Hero from "./components/Hero";
import About from "./components/About"; 
import Portfolio from "./components/Portfolio"; 
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




// import Hero from "./components/Hero";
// import About from "./components/About"; 
// import Portfolio from "./components/Portfolio"; 
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// async function slowDown() {
//   await new Promise(resolve => setTimeout(resolve, 3000)); // 2 second delay
// }

// export default async function Page() {
//   await slowDown(); // This will trigger the loading state
  
//   return (
//     <div className="bg-[#06065D] min-h-screen overflow-x-hidden w-full">


//        <Hero />
//        <About />
//        <Portfolio />
//        <Contact />
//       <Footer />

//     </div>
//   );
// }