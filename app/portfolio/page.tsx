"use client";
import React, { useEffect, useState, useRef } from 'react';
import Project from '../components/Project';
import { pro1, pro2, pro3, pro4 } from '../assets';
import Reveal from '../components/Reveal';

// Type definitions
type ScrollDirection = 'prev' | 'next';

interface ProjectData {
  title: string;
  description: string;
  bg: string;
  url: string;
}

const Portfolio: React.FC = () => {
  const [startMarquee, setStartMarquee] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setStartMarquee(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const projects: ProjectData[] = [
    {
      title: 'E-Commerce Website',
      description: 'An e-commerce website with functionalities to sell and serve clients',
      bg: `url(${pro1}) center/cover no-repeat`,
      url: 'https://e-commence-sire-prince.vercel.app/'
    },
    {
      title: 'Real Estate Website',
      description: 'A real estate website with projects and buildings to choose from',
      bg: `url(${pro2}) center/cover no-repeat`,
      url: 'https://real-estate-sire-prince.vercel.app/'
    },
    {
      title: 'University School Website',
      description: 'A modern but simple school website with forms support and contact management',
      bg: `url(${pro3}) center/cover no-repeat`,
      url: 'https://school-sire-prince.vercel.app/'
    },
    {
      title: 'Netflix Clone Platform',
      description: 'A simple Netflix cloned website with the feel and touch of Netflix',
      bg: `url(${pro4}) center/cover no-repeat`,
      url: 'https://netflix-sire-prince.vercel.app/'
    }
  ];

  const scrollProjects = (direction: ScrollDirection): void => {
    if (!containerRef.current) return;
    
    const container: HTMLDivElement = containerRef.current;
    const scrollAmount: number = 400; // Adjust based on your project card width + gap
    
    if (direction === 'prev') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  const handleMouseEnter = (): void => setIsHovered(true);
  const handleMouseLeave = (): void => setIsHovered(false);

  return (
    <div id='portfolio' className="py-20 flex flex-col items-center justify-center relative">
      <Reveal animation='fadeInDown'>
        <h1 className="font-zen-dots text-white text-center text-3xl mb-12">Projects</h1>
      </Reveal>
    
      {/* Navigation Buttons */}
      <div className="flex items-center justify-center w-full max-w-6xl relative">
        <button
          onClick={() => scrollProjects('prev')}
          className="absolute left-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label="Previous projects"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          ref={containerRef}
          className="relative w-full overflow-x-auto scrollbar-hide"
          style={{ maxWidth: 1200 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Marquee Animation Container */}
          <div
            ref={marqueeRef}
            className={`flex gap-8 ${startMarquee ? 'animate-marquee' : ''}`}
            style={{
              width: 'max-content',
              animationDuration: '32s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationPlayState: isHovered ? 'paused' : 'running',
            }}
          >
            {/* Original projects */}
            {projects.map((project: ProjectData, index: number) => (
              <Reveal key={`original-${index}`} animation='fadeInUp' delay={0.1}>
                <Project
                  title={project.title}
                  description={project.description}
                  bg={project.bg}
                  url={project.url}
                />
              </Reveal>
            ))}
            
            {/* Duplicate for seamless animation */}
            {projects.map((project: ProjectData, index: number) => (
              <Reveal key={`duplicate-${index}`} animation='fadeInUp' delay={0.1}>
                <Project
                  title={project.title}
                  description={project.description}
                  bg={project.bg}
                  url={project.url}
                />
              </Reveal>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollProjects('next')}
          className="absolute right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label="Next projects"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;