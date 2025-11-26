'use client';
import Link from 'next/link';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#131212] text-white py-6 px-4 border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright text */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-300">
             Sire Prince © copyright 2025 . All rights reserved.
            </p>
          </div>
          
          {/* Optional: Additional links or text */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;