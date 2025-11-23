'use client' 

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { FaGlobe, FaMobile, FaTools, FaPaintBrush, FaArrowCircleUp,FaHandsHelping } from 'react-icons/fa';


const Navbar = () => {

   const [isOpen, setIsOpen] = useState(false)
   const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div>

       <header className="w-full p-2 relative top-0 z-50 bg-black/80 backdrop-blur-sm text-shadow-gray-500 hidden md:block ">
      <div className="flex-between w-full max-w-7xl mx-auto px-6 py-4 text-md font-extralight letter-spacing-md">
      <Link href="/"> <h1 className="text-xl sm:text-md md:text-2xl font-semibold">Sire Prince</h1></Link> 
        <nav>
          <ul className="flex-center gap-12 ">
           
   <Link  
      href="/">
    <li  className="hover:text-blue-300 transition-colors">
                Home
            </li>
    </Link>
    
    <li >
                <div 
              className="relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              onClick={() => setIsOpen(!isOpen)}
            >
              <button className="flex-between gap-1">
                <p  className="hover:text-blue-300 transition-colors">Solutions</p>
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
                        <ul className='grid grid-cols-3 gap-6 p-8 w-full rounded-bl-[40px] rounded-r-[40px] bg-[#1a1a1a]'>
                      <li className='py-3 px-2 border-0 rounded-bl-[30px]  bg-[#272727] drop-item'>
                    <Link href="/services" className="flex items-center justify-start gap-3  p-2 text-sm">
                       <div className='p-2 bg-amber-800 rounded-md'>
                         <FaGlobe className="w-7 h-7 " title="Website" /></div>
                  <div className='flex-col'> 
                  <h3 className='text-xl font-bold'> Web Development</h3>
                  <p className='mt-2'>Your first digital presence</p>
                   </div>
                  </Link>
                      </li>
                    <li className='py-3 px-2 border-0   bg-[#272727] drop-item'>
                    <Link href="/services" className="flex items-center justify-start gap-3  p-2 text-sm">
                       <div className='p-2 bg-red-500 rounded-md'> <FaMobile className="w-7 h-7" title="Phone" />  </div>
                         
                            <div className='flex-col'> 
                  <h3 className='text-xl font-bold'> Mobile Apps</h3>
                  <p className='mt-2'>Custom Apps for Business</p>
                   </div>
                        </Link>
                      </li>
                      <li className='py-3 px-2 border-0  rounded-br-[30px]  bg-[#272727] drop-item'>
               <Link href="/services"  className="flex items-center justify-start gap-3  p-2 text-sm">
                 
                                    <div className='p-2 bg-purple-800 rounded-md'>
                                    <FaArrowCircleUp className="w-7 h-7 transform rotate-45" /></div>
                     
                       <div className='flex-col'> 
                  <h3 className='text-xl font-bold'>SEO</h3>
                  <p className='mt-2'>Let make your presence  </p>
                   </div>
                    </Link>
                      </li>
                      <li className='py-3 px-2 border-0 rounded-bl-[30px]  bg-[#272727] drop-item'>
              <Link href="/services"  className="flex items-center justify-start gap-3  p-2 text-sm">
                   
                       <div className='p-2 bg-green-800 rounded-md'>
                        <FaTools className="w-7 h-7" title="Tools" /></div>
                   
                      <div className='flex-col'> 
                  <h3 className='text-xl font-bold'>  Website Maintanace</h3>
                  <p className='mt-2'>We offer innovation into your website</p>
                   </div>
                 </Link>
                      </li>

    <li className='py-3 px-2 border-0   bg-[#272727] drop-item'>
                 <Link href="/services" className="flex items-center justify-start gap-3  p-2 text-sm">
                    <div className='p-2 bg-yellow-400 rounded-md'> 
                      <FaPaintBrush className="w-7 h-7 " title="brush" />  </div>
                         
                            <div className='flex-col'> 
                  <h3 className='text-xl font-bold'> Graphic Design</h3>
                  <p className='mt-2'>Communicate your brand</p>
                   </div>
                     </Link>
                      </li>

                      <li className='py-3 px-2 border-0  rounded-br-[30px]  bg-[#272727] drop-item'>
                  <Link href="/services" className="flex items-center justify-start gap-3  p-2 text-sm">
                        
                            <div className='p-2 bg-blue-800 rounded-md'>
                            <FaHandsHelping className="w-7 h-7" title="help" /></div>
                  
                     <div className='flex-col'> 
                  <h3 className='text-xl font-bold'>  IT Consultancy</h3>
                  <p className='mt-2'>Have a discussion with our experts</p>
                   </div>
                  </Link>
                      </li>
                    </ul>
                    </div>
                  
                </div>
                </div>
               
              )}
            </div>
            </li>
       <li>
              <Link href="/about" className="hover:text-blue-300 transition-colors">
                About
              </Link>
            </li>
  
          <li>
              <Link href="#projects" className="hover:text-blue-300 transition-colors">
                Projects
              </Link>
            </li>
          
           
          </ul>
        </nav>
        <Link href="/contact">  <button className='btn'>Contact Me</button>
        </Link>
      
      </div>
    </header>

    
    {/* mobile view header */}
    <header  className="w-full p-2 relative top-0 z-50 bg-black backdrop-blur-sm text-shadow-gray-500 block sm:hidden">
      <div className='flex items-center justify-between mb-6  px-6 py-4'>
      <Link href="/"> <h1 className="text-xl sm:text-md md:text-2xl font-semibold">Sire Prince</h1></Link> 
                  <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label='Open Menu'
              className='p-2 rounded-md bg-white/5 cursor-pointer'
            >
              {/* simple hamburger */}
              <svg className='w-6 h-6 text-white' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
              </div>
        {mobileOpen && (
          <div className='sm:hidden  fixed inset-0 w-full h-screen z-50 bg-black flex flex-col '>
            <div className='w-full py-6 px-8 mb-6 flex justify-between items-center'> 
                          <Link href="/"> <h2 className='text-xl font-semibold'>Sire Prince</h2>  </Link>  

              <button onClick={() => setMobileOpen(false)} aria-label='Close menu'  className='p-2 rounded-md bg-white/5 cursor-pointer'>
                  <svg className='w-6 h-6' viewBox='0 0 24 24' fill='none' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  </svg>
                  
                </button>
                </div>
           
         <div className="flex flex-col items-start justify-between gap-20 w-full max-w-7xl mx-auto  mb-12 px-10 py-4 text-md font-extralight letter-spacing-md">
          
              <ul className='flex flex-col gap-10'>
                <li className='hover:text-blue-300 transition-colors'><Link href='#home' onClick={() => setMobileOpen(false)}>Home</Link></li>
               
               
  <li>
                <div 
              className="relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              onClick={() => setIsOpen(!isOpen)}
            >
              <button className="flex-between gap-1">
                <Link href="#service" className="hover:text-blue-300 transition-colors">Solutions</Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div>
                   <div className="relative  mt-0 z-50"
                  onMouseDown={() => setIsOpen(false)}>
                    <div className='mt-3 '>
                        <ul className='grid grid-cols-2 gap-x-7 p-5 bg-[#0c0c0cd7] w-auto h-80'>
                      <li className='p-1 drop-item  flex items-center justify-start'>
                    <Link href="#" className="flex items-center justify-start gap-3 text-xs">
                       <div className='p-1 bg-amber-800 rounded-md'>
                         <FaGlobe className="w-4 h-4 " title="Website" /></div>
                  <div className='flex-'> 
                  <h3 className='font-bold'> Web Development</h3>
                   </div>
                   
                  </Link>
                      </li>
                      <li className='p-1 drop-item  flex items-center justify-start'>
                  <Link href="#" className="flex items-center justify-start gap-3 text-xs">
                    <div className='p-1 bg-red-500 rounded-md'> <FaMobile className="w-3 h-4 " title="Phone" />  </div>
                         
                            <div className='flex-col'> 
                  <h3 className='font-bold'> Mobile Apps</h3>
                   </div>
                     </Link>
                      </li>
                      <li className='p-1 drop-item  flex items-center justify-start'>
                <Link href="#" className="flex items-center justify-start gap-3 text-xs">
                 
                                    <div className='p-1 bg-purple-800 rounded-md'>
                                    <FaArrowCircleUp className="w-4 h-4  transform rotate-45" /></div>
                     
                       <div className='flex-col'> 
                  <h3 className='font-bold'>SEO</h3>
                   </div>
                  </Link>
                      </li>
                      <li className='p-1 drop-item  flex items-center justify-start'>
                <Link href="#" className="flex items-center justify-start gap-3 text-xs">
                   
                       <div className='p-1 bg-green-800 rounded-md'>
                        <FaTools className="w-4 h-4 " title="Tools" /></div>
                   
                      <div className='flex-col'> 
                  <h3 className='font-bold'>  Website Maintanace</h3>
                   </div>
                  </Link>
                      </li>

                      <li className='p-1 drop-item  flex items-center justify-start'>
                  <Link href="#" className="flex items-center justify-start gap-3 text-xs ">
                    <div className='p-1 bg-yellow-400 rounded-md'> 
                      <FaPaintBrush className="w-4 h-4  " title="brush" />  </div>
                         
                            <div className='flex-col'> 
                  <h3 className='font-bold'> Graphic Design</h3>
                
                   </div>
                     </Link>
                      </li>

                      <li className='p-1 drop-item  flex items-center justify-start'>
                <Link href="#" className="flex items-center justify-start gap-3 text-xs">
                        
                            <div className='p-1 bg-blue-800 rounded-md'>
                            <FaHandsHelping className="w-4 h-4 " title="help" /></div>
                  
                     <div className='flex-col'> 
                  <h3 className='font-bold'>  IT Consultancy</h3>
                   </div>
                  </Link>
                      </li>
                    </ul>
                    </div>
                  
                </div>
                </div>
               
              )}
            </div>
            </li>



           <li className='hover:text-blue-300 transition-colors'>    <Link href='/about' onClick={() => setMobileOpen(false)}>About</Link></li>
                   <li className='hover:text-blue-300 transition-colors'> <Link href='#projects' onClick={() => setMobileOpen(false)}>Projects</Link></li>
              </ul>
           </div>

            <button className='btn w-34 my-6 mx-6' onClick={() => setMobileOpen(false)}>    <Link href="/contact">Contact me</Link></button>
          </div>
        )}</header>
    </div>
   
  )
}

export default Navbar


