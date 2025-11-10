'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      src: "/mockup1.png",
      alt: "Project Preview 1"
    },
    {
      src: "/mockup2.png",
      alt: "Project Preview 2"
    },
    {
      src: "/mockup4.png",
      alt: "Project Preview 3"
    }
  ];

  // Auto change image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center bg-black/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Text Content */}
        <div className="space-y-5 sm:space-y-12 px-9 py-4 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your Vision Into
            Digital Reality
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Full-stack developer specializing in crafting innovative web solutions. 
            Transforming ideas into seamless, responsive, and user-centric applications.
          </p>
          <div className="pt-4">

            <button className="bg-[#272727] btn hover:text-blue-400">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right side - Image Carousel */}
        <div className="relative">
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  priority={index === 0}
                  width={800}
                  height={600}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${
                  index === currentImage ? 'bg-blue-400' : 'bg-gray-300'
                }`}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

