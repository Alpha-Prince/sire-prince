import React from 'react';
import Image from 'next/image';

interface ProjectProps {
  title: string;
  description: string;
  bg?: string;
  url?: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, bg, url }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div>
      <div
        className="relative w-72 h-40 border border-white/20 rounded-lg overflow-hidden group shadow-lg"
        style={{ background: bg || 'rgba(255,255,255,0.1)' }}
      >
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute rounded-full p-2 top-3 right-2 animate-bounce cursor-pointer bg-white/50 hover:bg-white/90 transition"
            aria-label={`Visit project: ${title}`}
          >
            <Image 
              src={`${basePath}/arrow.jpg`} 
              alt="topright-arrow" 
              width={16} 
              height={16} 
            />
          </a>
        )}
        <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-60 h-16 z-10 pointer-events-none" />
        <div
          className="absolute bottom-0 left-0 w-full h-0 group-hover:h-1/2 transition-all duration-500 bg-gradient-to-t from-red-500/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100"
        >
          <div>
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
