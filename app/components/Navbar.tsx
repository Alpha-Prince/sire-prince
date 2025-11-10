'use client' 

import React from 'react'
import { useState } from 'react'
import { FaGlobe, FaMobile, FaTools, FaPaintBrush, FaArrowCircleUp,FaHandsHelping } from 'react-icons/fa';


const Navbar = () => {

   const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full p-2 relative top-0 z-50 bg-black/80 backdrop-blur-sm text-shadow-gray-500 ">
      <div className="flex-between w-full max-w-7xl mx-auto px-6 py-4 text-md font-extralight letter-spacing-md">
        <h1 className="text-xl sm:text-md md:text-2xl font-semibold">Sire Prince</h1>
        <nav>
          <ul className="flex-center gap-12 ">
            <li>
              <a href="#home" className="hover:text-blue-300 transition-colors">
                Home
              </a>
            </li>

            <li>
                <div 
              className="relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              onClick={() => setIsOpen(!isOpen)}
            >
              <button className="flex-between gap-1">
                <a href="#service" className="hover:text-blue-300 transition-colors">Solutions</a>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div>
                   <div className="absolute top-full w-270 -left-[550%] mt-0  z-50"
                  onMouseLeave={() => setIsOpen(false)}>
                    <div className='mt-10 '>
                        <ul className='grid grid-cols-3 gap-6 p-8 w-full rounded-bl-[40px] rounded-tr-[40px] bg-[#1a1a1a]'>
                      <li className='py-3 px-2 border-0 rounded-bl-[30px] rounded-tr-[30px]  bg-[#272727] drop-item'>
                    <a href="#" className="flex items-center justify-start gap-3  py-2 pl-3 pr-7 text-sm">
                       <div className='p-2 bg-amber-800 rounded-md'> <FaGlobe className="w-7 h-7 " title="Website" /></div>
                  <div className='flex-col'> 
                  <h3 className='text-xl font-bold'> Web Development</h3>
                  <p className='mt-2'>Your first digital presence</p>
                   </div>
                  </a>
                      </li>
                      <li className='py-3 px-2 border-0 rounded-bl-[30px] rounded-tr-[30px]  bg-[#272727] drop-item'>
                  <a href="#" className="flex items-center justify-start gap-3  py-2 pl-3 pr-5 text-sm">
                    <div className='p-2 bg-red-500 rounded-md'> <FaMobile className="w-7 h-7" title="Phone" />  </div>
                         
                            <div className='flex-col'> 
                  <h3 className='text-xl font-bold'> Mobile Apps</h3>
                  <p className='mt-2'>Custom Apps for Business</p>
                   </div>
                     </a>
                      </li>
                      <li className='py-3 px-2 border-0 rounded-bl-[30px] rounded-tr-[30px]  bg-[#272727] drop-item'>
                <a href="#" className="flex items-center justify-start gap-3  py-2 pl-3 pr-5 text-sm">
                 
                                    <div className='p-2 bg-purple-800 rounded-md'>
                                    <FaArrowCircleUp className="w-7 h-7 transform rotate-45" /></div>
                     
                       <div className='flex-col'> 
                  <h3 className='text-xl font-bold'>SEO</h3>
                  <p className='mt-2'>Let make your presence felt </p>
                   </div>
                  </a>
                      </li>
                      <li className='py-3 px-2 border-0 rounded-bl-[30px] rounded-tr-[30px]  bg-[#272727] drop-item'>
                <a href="#" className="flex items-center justify-start gap-3  py-2 pl-3 pr-5 text-sm">
                   
                       <div className='p-2 bg-green-800 rounded-md'>
                        <FaTools className="w-7 h-7" title="Tools" /></div>
                   
                      <div className='flex-col'> 
                  <h3 className='text-xl font-bold'>  Website Maintanace</h3>
                  <p className='mt-2'>We offer innovation into your website</p>
                   </div>
                  </a>
                      </li>

    <li className='py-3 px-2 border-0 rounded-bl-[30px] rounded-tr-[30px]  bg-[#272727] drop-item'>
                  <a href="#" className="flex items-center justify-start gap-3  py-2 pl-3 pr-5 text-sm">
                    <div className='p-2 bg-yellow-400 rounded-md'> 
                      <FaPaintBrush className="w-7 h-7 " title="brush" />  </div>
                         
                            <div className='flex-col'> 
                  <h3 className='text-xl font-bold'> Graphic Design</h3>
                  <p className='mt-2'>Communicate your brand</p>
                   </div>
                     </a>
                      </li>







                      <li className='py-3 px-2 border-0 rounded-bl-[30px] rounded-tr-[30px]  bg-[#272727] drop-item'>
                <a href="#" className="flex items-center justify-start gap-3  py-2 pl-3 pr-5 text-sm">
                        
                            <div className='p-2 bg-blue-800 rounded-md'>
                            <FaHandsHelping className="w-7 h-7" title="help" /></div>
                  
                     <div className='flex-col'> 
                  <h3 className='text-xl font-bold'>  IT Consultancy</h3>
                  <p className='mt-2'>Have a discussion with our experts</p>
                   </div>
                  </a>
                      </li>
                    </ul>
                    </div>
                  
                </div>
                </div>
               
              )}
            </div>
            </li>

            <li>
              <a href="#about" className="hover:text-blue-300 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-300 transition-colors">
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <button className='btn'>Contact Me</button>
      </div>
    </header>
  )
}

export default Navbar
