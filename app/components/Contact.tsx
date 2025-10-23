import React from 'react';
import Image from 'next/image';
import Reveal from './Reveal';

// Removed the import of social media icons from '../assets'
// import { linkdin, tiktok, facebook } from '../assets';

const Contact = () => {

  return (
    <div className="w-full flex flex-col lg:flex-row text-white text-sm py-30 px-16 pl-1t6 sm:pl-10 md:pl-30 gap-26 lg:gap-16">
      {/* Socials Section */}
      <div className="flex-1 ">
        <Reveal animation="fadeInDown">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-zen-dots text-white text-center md:text-left leading-tight sm:leading-snug md:leading-normal mb-10 sm:mb-20">
            Explore On Socials
          </h1>
        </Reveal>
        <Reveal animation="slideLeft" delay={0.1}>
          <div className="flex flex-col justify-between items-center md:items-start ">
            <div className="w-full flex justify-around md:justify-start items-center gap-6 md:gap-20 mb-20">
              <a
                href="https://www.linkedin.com/in/sire-prince-037a7a31b/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
                aria-label="LinkedIn"
              >
                <Image
                  src="/linkdin.png"
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
                  src="/tiktok.png"
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
                  src="/facebook.png"
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
          <h1 className="text-xl sm:text-2xl md:text-3xl font-zen-dots text-white text-center md:text-left leading-tight sm:leading-snug md:leading-normal mb-10 sm:mb-20">
            Send A Personal <br /> E-Mail
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
              className="bg-red-500 text-white py-2 w-24 rounded cursor-pointer hover:bg-white hover:text-red-500 transition-transform hover:-translate-y-1"
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
