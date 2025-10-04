import React from 'react';
import Image from 'next/image';
import Reveal from '../components/Reveal';



import { reactImg, nextImg, htmlImg, figmaImg, tailwindImg, vercelImg, javascriptImg, typescriptImg, deepseek, vsCodeImg, cssImg } from '../assets';

const Hero = () => {
  return (
    <div className=" h-dvh ">
      <div className="px-20 h-[70%] flex flex-col justify-center items-center">
        <Reveal animation="fadeInUp" delay={0.5}>
          <h1 className="text-xl sm:text-3xl md:text-5xl font-zen-dots fade-in-up leading-tight sm:leading-snug md:leading-normal">
            Welcome ! to <span className="text-gray-500">Sire Prince</span>
          </h1>
          <div className="fade-in-up text-sm text-center sm:text-base md:text-xl font-voltaire text-gray-200 justify-center items-center mt-6 sm:mt-8 md:mt-12 max-w-xl sm:max-w-3xl mx-auto leading-relaxed sm:leading-loose">
            A Web Developer who builds clean, user-friendly websites for your business 
            to service target clients and individuals wanting to make a difference online.
          </div>
        </Reveal>
      </div>

      <Reveal animation="fadeInDown" delay={0.5}>
        <div className="flex justify-center items-center fade-in-down w-full">
          <div className="h-12 sm:h-12 md:h-16 w-[50%] sm:-w-[70%] md:-w-[60%] relative mt-20 sm:mt-10 md:mt-20">
            <div className="relative flex overflow-x-hidden py-4 box-shadow-lg border-t-2 border-orange-500">
              {/* Left cloud/fade overlay */}
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 z-10"
                style={{ background: 'linear-gradient(to right, #06065D 80%, transparent)' }}
              />
              {/* Right cloud/fade overlay */}
              <div
                className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 z-10"
                style={{ background: 'linear-gradient(to left, #06065D 80%, transparent)' }}
              />
              <div className="flex whitespace-nowrap animate-custom-marquee">
                {[...Array(3)].map((_, i) => (
                  <React.Fragment key={i}>
                    <Image src={reactImg} alt="React" width={48} height={48} />
                    <Image src={nextImg} alt="Next.js" width={48} height={48} className="mx-2 sm:mx-4" />
                    <Image src={vercelImg} alt="Vercel" width={48} height={48} className="mx-2 sm:mx-4" />
                    <Image src={vsCodeImg} alt="VS Code" width={48} height={48} className="mx-2 sm:mx-4" />
                    <Image src={htmlImg} alt="html" width={48} height={48} className="mx-2 sm:mx-4" />
                    <Image src={cssImg} alt="css" width={48} height={48} className="mx-2 sm:mx-4" />
                    <Image src="/js.png" alt="javascriptImg" width={48} height={48} className="mx-2 sm:mx-4" />
                    <Image src={tailwindImg} alt="tailwindImg" width={48} height={48} className="mx-2 sm:mx-4" />
                    <Image src="/figma.jpg" alt="figmaImg" width={48} height={48} className="mx-2 sm:mx-4" />
                    <Image src={typescriptImg} alt="typescriptImg" width={48} height={48} className="mx-2 sm:mx-4" />
                    <Image src={deepseek} alt="deepseekImg" width={48} height={48} className="mx-2 sm:mx-4" />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Hero;
