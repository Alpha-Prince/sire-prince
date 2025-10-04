
'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from './Reveal';
import { useRef } from 'react';

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('flex');
      menuRef.current.classList.toggle('hidden');
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.add('hidden');
      menuRef.current.classList.remove('flex');
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="fixed top-0 w-full flex justify-between items-center px-4 sm:px-10 md:px-20 pt-6 sm:pt-8 z-50">
        <Reveal animation="slideRight">
          <Link href="/">
            <h1 className="text-lg sm:text-md md:text-2xl font-zen-dots p-4 sm:p-6 z-50 cursor-pointer">
              Sire Prince
            </h1>
          </Link>
        </Reveal>

        <Reveal animation="slideLeft">
          <div 
            onClick={toggleMenu}
            className="transition transform hover:scale-110 cursor-pointer w-6 h-6 border-2 border-amber-50 rounded-full bg-red-500 z-50"
            aria-label="Menu button"
            role="button"
            tabIndex={0}
          />
        </Reveal>
      </div>

      {/* Slide-out Menu - CHANGED from absolute to fixed */}
      <Reveal animation='slideRight'>
        <div 
          ref={menuRef} 
          className="fixed right-0 top-0 h-dvh w-[50%] md:w-[40%] bg-red-500 pt-20 px-6 hidden flex-col justify-around items-start text-white z-40"
        >
          <h1 className='font-zen-dots text-3xl sm:text-xl md:text-3xl mb-8 flex transition-transform hover:-translate-y-2'>
            <Link 
              href='/' 
              className='flex gap-4 items-center'
              onClick={closeMenu}
            >
              Welcome 
              <Image src="/arrow.jpg" alt="arrow" width={24} height={24} className='transition-transform hover:translate-x-2 hover:-translate-y-2' />
            </Link>
          </h1>
          
          <h1 className='font-zen-dots text-3xl sm:text-xl md:text-3xl mb-8 flex transition-transform hover:-translate-y-2'>
            <Link 
              href='#about' 
              className='flex gap-4 items-center'
              onClick={closeMenu}
            >
              About me 
              <Image src="/arrow.jpg" alt="arrow" width={24} height={24} className='transition-transform hover:translate-x-2 hover:-translate-y-2' />
            </Link>
          </h1>
          
          <h1 className='font-zen-dots text-3xl sm:text-xl md:text-3xl mb-8 flex transition-transform hover:-translate-y-2'>
            <Link 
              href='#portfolio' 
              className='flex gap-4 items-center'
              onClick={closeMenu}
            >
              Work Samples 
              <Image src="/arrow.jpg" alt="arrow" width={24} height={24} className='transition-transform hover:translate-x-2 hover:-translate-y-2' />
            </Link>
          </h1>
          
          <div className='w-full h-5 flex items-center justify-center text-xs text-gray-300 font-voltaire mt-12'>
            &copy; 2025 Sire Prince. All rights reserved.
          </div>
        </div>
      </Reveal>
    </>  
  );
};

export default Navbar;