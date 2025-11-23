

import React from 'react'
import Link from 'next/link'

const about = () => {
  return (
    <div className="bg-black/90 w-full py-10 sm:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12'>About</h2>
      
      <div className='bg-black/50 flex flex-col lg:flex-row items-start justify-between w-full gap-6 sm:gap-8 lg:gap-12'> 
        
        {/* Left Column - Main Statement */}
        <div className='text-xl sm:text-2xl lg:text-3xl leading-relaxed sm:leading-loose lg:leading-16 font-bold w-full lg:w-1/2'>
          A developer specialized in crafting innovative solutions. 
          Transforming ideas into seamless, responsive, and user-centric applications.
        </div>
        
        {/* Right Column - Details */}
        <div className='flex flex-col items-start justify-start gap-4 sm:gap-6 w-full lg:w-1/2'>
          <div className='text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose'>
            <p>My journey into web development began 
              by wondering why and how things worked. That curiosity 
              to know how things worked turned into a passion for building over the years.
            </p>
            <br />
            <p>I bridge the gap between design and development, ensuring that the final work is up to expectation.</p>
            <br />
            <p>My process in creating is collaborative and research-driven, starting with user point of view
              and moving through wireframing, prototyping, and user testing until launching or deployment. 
            </p>
            <br />
        
          </div>
          
          {/* Button */}
          <div className='w-full sm:w-auto'>
            <Link href="/about"> 
              <button className="bg-[#272727] btn hover:text-blue-400 mt-3 sm:mt-8 lg:mt-10 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg transition-all duration-300 hover:bg-[#373737]">
                Learn More 
              </button>
            </Link> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default about