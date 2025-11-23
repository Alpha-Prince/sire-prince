'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
 
  return (
    <div>ggg</div>
    // <footer className="bg-gray-900 text-white">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     {/* Top Section */}
    //     <div className="py-12">
    //       <div className="flex flex-col lg:flex-row gap-8">
    //         {/* Left Section */}
    //         <div className="flex-1 lg:max-w-md">
    //           {/* Logo and Address */}
    //           <div className="mb-8">
    //             <Link href="/homepages/old-home" className="block mb-6">
    //               <Image
    //                 src="https://cdn.prod.website-files.com/657aaa60358ec0cddd72d4e6/659fa9c3a7d2044d28812b17_N-NAVOZYME-white-300px.png"
    //                 alt="Navozyme Logo"
    //                 width={213}
    //                 height={60}
    //                 className="h-auto"
    //               />
    //             </Link>
    //             <p className="text-gray-300 mb-4 leading-relaxed">
    //               <strong className="text-white font-semibold">Navozyme Pte. Ltd.</strong>
    //               <br />
    //               #22-00 The Octagon, 105 Cecil Street,
    //               <br />
    //               Singapore 069534
    //             </p>
    //             <a
    //               href="mailto:info@navozyme.com"
    //               className="text-gray-300 hover:text-white transition-colors duration-200"
    //             >
    //               info@navozyme.com
    //             </a>
    //           </div>

    //           {/* Certifications */}
    //           <div className="flex flex-wrap gap-6 mb-8">
    //             <div className="flex items-center">
    //               <Image
    //                 src="https://cdn.prod.website-files.com/657aaa60358ec0cddd72d4e6/67bdd684cd5ecde491e58daa_Sin%20t%C3%ADtulo%20(738%20x%20647%20px)%20(6).png"
    //                 alt="ISO Certification"
    //                 width={150}
    //                 height={80}
    //                 className="h-auto"
    //               />
    //             </div>
    //             <Image
    //               src="https://cdn.prod.website-files.com/657aaa60358ec0cddd72d4e6/6835648c7352f4bdb499cb35_Member%20of%20IBIA%20-%20bw.png"
    //               alt="IBIA Member"
    //               width={141}
    //               height={60}
    //               className="h-auto"
    //             />
    //           </div>

    //           {/* Newsletter Subscription */}
    //           <div className="mb-8">
    //             <div className="text-white font-semibold mb-4">
    //               Subscribe to our newsletter
    //             </div>
    //             <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
    //               <input
    //                 type="email"
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 placeholder="Enter your e-mail"
    //                 required
    //                 className="flex-1 px-4 py-3 rounded-l sm:rounded-l rounded-r sm:rounded-r-none border-0 bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    //               />
    //               <button
    //                 type="submit"
    //                 disabled={isSubmitting}
    //                 className="px-6 py-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-600 text-white font-medium rounded-r sm:rounded-r rounded-l sm:rounded-l-none transition-colors duration-200 disabled:cursor-not-allowed"
    //               >
    //                 {isSubmitting ? 'Subscribing...' : 'Subscribe'}
    //               </button>
    //             </form>

    //             {/* Status Messages */}
    //             {submitStatus === 'success' && (
    //               <div className="mt-3 p-3 bg-green-900 text-green-200 rounded">
    //                 Thank you! Your submission has been received!
    //               </div>
    //             )}
    //             {submitStatus === 'error' && (
    //               <div className="mt-3 p-3 bg-red-900 text-red-200 rounded">
    //                 Oops! Something went wrong while submitting the form.
    //               </div>
    //             )}
    //           </div>
    //         </div>

    //         {/* Right Section - Navigation Links */}
    //         <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8">
    //           {/* Products */}
    //           <div>
    //             <h3 className="text-white font-semibold mb-4">Products</h3>
    //             <div className="space-y-2">
    //               {productLinks.map((link) => renderLink(link))}
    //             </div>
    //           </div>

    //           {/* Company */}
    //           <div>
    //             <h3 className="text-white font-semibold mb-4">Company</h3>
    //             <div className="space-y-2">
    //               {companyLinks.map((link) => renderLink(link))}
    //             </div>
    //           </div>

    //           {/* About */}
    //           <div>
    //             <h3 className="text-white font-semibold mb-4">About</h3>
    //             <div className="space-y-2">
    //               {aboutLinks.map((link) => renderLink(link))}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Divider */}
    //     <div className="border-t border-gray-700"></div>

    //     {/* Bottom Section */}
    //     <div className="py-6">
    //       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    //         {/* Copyright */}
    //         <p className="text-gray-400 text-sm text-center md:text-left">
    //           2025 © Navozyme Pte. Ltd. - All Rights Reserved. -{' '}
    //           <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
    //             Privacy Policy
    //           </Link>{' '}
    //           -{' '}
    //           <Link href="/information-security-policy" className="text-gray-400 hover:text-white transition-colors">
    //             Information Security Policy
    //           </Link>
    //         </p>

    //         {/* Social Links */}
    //         <div className="flex gap-4">
    //           <a
    //             href="https://sg.linkedin.com/company/navozyme"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="text-gray-400 hover:text-white transition-colors"
    //           >
    //             <Image
    //               src="https://cdn.prod.website-files.com/657aaa60358ec0cddd72d4e6/657aaa61358ec0cddd72d5d1_Frame%203.svg"
    //               alt="LinkedIn"
    //               width={24}
    //               height={24}
    //               className="w-6 h-6"
    //             />
    //           </a>
    //           <a
    //             href="https://www.youtube.com/channel/UC0Za-9EgNlBgtCyXZT2YpFg"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="text-gray-400 hover:text-white transition-colors"
    //           >
    //             <Image
    //               src="https://cdn.prod.website-files.com/657aaa60358ec0cddd72d4e6/65d5d7db3c17539971249bf9_navozyme-youtube-icon.png"
    //               alt="YouTube"
    //               width={24}
    //               height={24}
    //               className="w-6 h-6"
    //             />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div> 
    // </footer>
  );
};

export default Footer;
