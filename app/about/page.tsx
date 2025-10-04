// import React from 'react'
// import Reveal from '../components/Reveal';

// const About = () => {
//   return (
//     <div className='relative w-full flex justify-center align-center mt-20 py-20 px-30 z-0'>

//       <Reveal animation='fadeInUp'>
//  <div className='relative w-[80%] px-30 py-16 bg-blue-300/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden shadow-lg flex justify-between gap-10 items-center z-0'>
//       <div className='text-left w-[60%] '>
  
//         <Reveal animation='fadeInDown' delay={0.5}>
//                   <h1 className='font-zen-dots text-white text-3xl '>About Me</h1>
//         </Reveal>
// <Reveal animation='fadeInUp' delay={0.75}>
//    <p className='font-voltaire py-13 text-lg '>Sire Prince a passionate web developer and graphic designer dedicated to building visually stunning, user-friendly websites.

// I'm a website developer based in Accra-Ghana with a passion for solving complex problems through clean, efficient code and intuitive design. With a background in Elective IT, Visual arts and Graphic Design, ensuring the final product meets user expectations.

// Currently focused on building accessible web applications for Businesses and freelancing front-end development..
// </p>
// </Reveal>
       
//   <div className='w-full flex align-center justify-around px-20 '>
//  <Reveal animation='slideRight' delay={1}>
//  <a href='https://sire-services.vercel.app/#main-nav' target='_blank'  className="px-4 py-2 bg-red-500 text-white rounded transition transform hover:-translate-y-2 hover:bg-white hover:text-red-500 "
// >Services</a>
// </Reveal>

// <Reveal animation='slideLeft' delay={1}>
//  <a
//   href="/resume.pdf"
//   download
//   className="px-4 py-2 slide-left bg-red-500 text-white transition transform hover:-translate-y-2 rounded hover:bg-white hover:text-red-500 "
// >
//   Download Resume
// </a>
// </Reveal>
// </div>
//       </div>


//     <Reveal animation='slideLeft' delay={1}>
//        <div className="relative w-60 h-90 bg-white/10 border border-white/20 rounded-lg overflow-hidden group shadow-lg slide-left">
//        <video
//   autoPlay
//   loop
//   muted
//   playsInline
//   className="absolute inset-0 w-full h-full object-cover z-0"
// >
//   <source src="/aboutbg.mp4" type="video/mp4" />
// </video>
      
//       <div
//         className="absolute bottom-0 left-0 w-full h-0 group-hover:h-1/2 transition-all duration-500 bg-gradient-to-t from-red-400/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100"
//       >
//         <div>
//           <h3 className="text-2lg font-bold fade-in-up">Work Flow</h3>
//           <p className="text-md fade-in-up">Contact to get your custom website </p>
//         </div>
//       </div>
//     </div>
//     </Reveal>

    
//       </div>
//       </Reveal>
     
//     </div>
//   )
// }

// export default About
import React from 'react';
import Reveal from '../components/Reveal';

const About = () => {
  return (
    <div id='about' className="relative w-full flex justify-center items-center py-20 px-6 sm:px-10 md:px-30 z-0">
      <Reveal animation="fadeInUp">
        <div className="relative w-full max-w-7xl px-6 sm:px-12 py-12 bg-blue-300/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row justify-between gap-10 items-center z-0">
          
          <div className="text-left w-full md:w-3/5">
            <Reveal animation="fadeInDown" delay={0.5}>
              <h1 className="font-zen-dots text-white text-3xl mb-6">About Me</h1>
            </Reveal>
            <Reveal animation="fadeInUp" delay={0.75}>
              <p className="font-voltaire text-lg sm:text-3xl md:text-lg leading-relaxed whitespace-pre-line">
                {`Sire Prince is a passionate web developer and graphic designer dedicated to building visually stunning, user-friendly websites.

I'm a website developer based in Accra-Ghana with a passion for solving complex problems through clean, efficient code and intuitive design. With a background in Elective IT, Visual Arts, and Graphic Design, I ensure the final product meets user expectations.

Currently focused on building accessible web applications for businesses and freelancing front-end development.`}
              </p>
            </Reveal>

            <div className="w-full flex  gap-6 mt-10 px-0 sm:px-20">
              <Reveal animation="slideRight" delay={1}>
                <a
                  href="https://sire-services.vercel.app/#main-nav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" px-6 sm:px-4 md:px-6 py-4   bg-red-500 text-white rounded  hover:bg-white hover:text-red-500 transition-transform hover:-translate-y-1 "
                >
                  Services
                </a>
              </Reveal>

              <Reveal animation="slideLeft" delay={1}>
                <a
                  href="/resume.pdf"
                  download
                  className=" px-6 sm:px-4 md:px-6 py-4   bg-red-500 text-white rounded  hover:bg-white hover:text-red-500 transition-transform hover:-translate-y-1 "
                >
                  Download Resume
                </a>
              </Reveal>
            </div>
          </div>

          {/* Video Section */}

<Reveal animation="slideLeft" delay={1}>
  <div className="relative w-70 sm:w-22 md:w-50 h-40 sm:h-22 md:h-90 mr-5 bg-white/10 border border-white/20 rounded-lg overflow-hidden group my-10 shadow-lg">
    <video
      autoPlay
      loop 
      muted 
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0 rounded-lg"
    >
      <source src="/aboutbg.mp4" type="video/mp4" />
    </video>

    <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-1/2 transition-all duration-500 bg-gradient-to-t from-red-400/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 rounded-b-lg">
      <div>
        <h3 className="text-2xl font-bold text-white fade-in-up">Work Flow</h3>
        <p className="text-md text-white fade-in-up">Contact to get your custom website</p>
      </div>
    </div>
  </div>
</Reveal>

        </div>
      </Reveal>
    </div>
  );
};

export default About;
