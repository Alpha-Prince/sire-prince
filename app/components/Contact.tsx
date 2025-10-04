// import React from 'react'
// import Image from 'next/image'
// import Reveal from './Reveal'
// import { linkdin, tiktok, facebook } from '../assets'

// const Contact = () => {
//   return (

// <div className='w-full flex justify-between gap-10 text-white text-sm font-sora  px-20 py-20'>
//      <div >
// <Reveal animation='fadeInDown'>
//       <h1 className='font-zen-dots text-white text-center text-2xl mb-20'>Explore On Socials</h1>
//  </Reveal>
//  <Reveal animation='slideLeft' delay={0.1}>
//           <div className=' flex flex-col justify-between align-center'>
//     <div className='w-full cursor-pointer flex justify-around items-center gap-10 mb-15'>
//           <a href="https://www.linkedin.com/in/sire-prince-037a7a31b/" target='_blank'></a>  <Image src={linkdin} alt="Linkdin" width={48} height={48} 
//           className="h-12 mx-4 cursor-pointer" />
//           <a href="https://www.tiktok.com/@sire_prince" target='_blank'></a> <Image src={tiktok} alt="Tiktok" width={48} height={48}
//            className="h-12 mx-4 cursor-pointer" />
//        <a href="https://www.facebook.com/share/17UH3buTEp/" target='_blank'></a> <Image src={facebook} alt="Facebook" width={48} height={48}
//          className="h-12 mx-4 cursor-pointer" />
        
//     </div>
//            <h3 className='text-gray-400 font-volotaire  text-2xl mb-10'>+233 53 6386 223 / +233 24 5546 733</h3>   
//       </div>
// </Reveal>
//     </div>


//     <div>
//     <Reveal animation='fadeInDown'>
//       <h1 className='font-zen-dots text-white text-2xl'>Send A Personal E-Mail</h1>
//  </Reveal>
// <Reveal animation='slideRight' delay={0.1}>
//   <form 
//  action="https://formspree.io/f/xanpqvrl"
//   method="POST"
// className="max-w-md mx-auto p-6 bg-transparent rounded shadow space-y-4">
//   <input
//   name='name'
//     type="text"
//     placeholder="Name or Business Name"
//     className="w-full focus px-3 py-2 focus:border rounded focus:outline-none  focus:ring"
//     required
//   />
//   <input
//     type="tel"
//     name='number'
//     placeholder="Phone Number"
//     className="w-full px-3 py-2  focus:border rounded focus:outline-none focus:ring"
//     required
//   />
//   <textarea
//   name='message'
//     placeholder="Message"
//     className="w-full px-3 py-2  focus:border rounded focus:outline-none focus:ring"
//     rows={4}
//     required
//   />
//   <button
//     type="submit"
//     className=" bg-red-500 text-white py-2 cursor-pointer hover:text-red-500  hover:bg-white rounded w-24 transition hover:-translate-y-1"
//   >
//     Send
//   </button>
// </form>
// </Reveal>

//   </div>
// </div>
//   )
// }

// export default Contact


import React from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import { linkdin, tiktok, facebook } from '../assets';

const Contact = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row  text-white text-sm py-30 px-20 pl-20 sm:pl-0 lg:pl-30">
      {/* Socials Section */}
      <div className="flex-1 ">
        <Reveal animation="fadeInDown">
          <h1 className="font-zen-dots text-white text-center md:text-left text-2xl mb-10 sm:mb-20">
            Explore On Socials
          </h1>
        </Reveal>
        <Reveal animation="slideLeft" delay={0.1}>
          <div className="flex flex-col justify-between items-center md:items-start">
            <div className="w-full flex justify-around md:justify-start items-center gap-6 md:gap-20 mb-20">
              <a
                href="https://www.linkedin.com/in/sire-prince-037a7a31b/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
                aria-label="LinkedIn"
              >
                <Image
                  src={linkdin}
                  alt="LinkedIn"
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
              </a>
              <a
                href="https://www.tiktok.com/@sire_prince"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
                aria-label="TikTok"
              >
                <Image
                  src={tiktok}
                  alt="TikTok"
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
              </a>
              <a
                href="https://www.facebook.com/share/17UH3buTEp/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
                aria-label="Facebook"
              >
                <Image
                  src={facebook}
                  alt="Facebook"
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
              </a>
            </div>
            <h3 className="text-gray-400 font-voltaire text-xl md:text-2xl text-center md:text-left">
              +233 53 6386 223 / +233 24 5546 733
            </h3>
          </div>
        </Reveal>
      </div>

      {/* Contact Form Section */}
      <div className="flex-1">
        <Reveal animation="fadeInDown">
          <h1 className="font-zen-dots text-white text-2xl text-center md:text-left mb-8">
            Send A Personal E-Mail
          </h1>
        </Reveal>
        <Reveal animation="slideRight" delay={0.1}>
          <form
            action="https://formspree.io/f/xanpqvrl"
            method="POST"
            className="max-w-md mx-auto md:mx-0 p-6 bg-transparent rounded shadow space-y-4"
          >
            <input
              name="name"
              type="text"
              placeholder="Name or Business Name"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-50"
              required
            />
            <input
              type="tel"
              name="number"
              placeholder="Phone Number"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-50"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-50"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-red-500 text-white py-2 w-24 rounded cursor-pointer  hover:bg-white hover:text-red-500 transition-transform hover:-translate-y-1"
            >
              Send
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
