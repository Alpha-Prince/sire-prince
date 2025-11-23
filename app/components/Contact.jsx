'use client'


import React from 'react'

const contact = () => {
return (
    <div className='flex-row items-center justify-between w-full  bg-black/50 pb-20 px-8 sm:py-20 lg:px-12 '>
         <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
    Reach Out
          </h1>
   <div className='w-full py-12 px-6 sm:py-18 sm:px-24 flex flex-col-reverse md:flex-row items-start justify-between gap-6'>


<div className='flex flex-col items-center sm:items-start justify-between h-full w-full sm:w-[45%] gap-18 sm:gap-25 '>
  <h2 className='text-3xl sm:text-5xl text-center sm:text-start leading-relaxed sm:leading-loose lg:leading-16 font-bold w-full'>
    Get in touch today and we'll get back to you within 24 hours.
  </h2>
   
  <div className='flex flex-col items-center sm:items-start text-center sm:text-center gap-8'>
    <h2 className='text-2xl font-bold'>Follow Our Socials</h2>
    <div className="flex items-center gap-6">
       <a href="#" className="hover:opacity-80 transition-opacity">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
       <a href="#" className="hover:opacity-80 transition-opacity">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
        </svg>
      </a>
    <a href="#" className="hover:opacity-80 transition-opacity">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.987 1.846 7.987 2.948v3.204H5.032v3.864h2.955V24h3.937V9.998h2.848s.269-1.656.395-3.864h-3.243V3.367c0-.388.49-.91 1.229-.91H16.2V0h-4.183z"/>
        </svg>
      </a>
       <a href="#" className="hover:opacity-80 transition-opacity">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a> 
    </div>
  </div>
</div>



    <div className="max-w-lg mx-autor bg-[#272727] p-6">
      <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
      
      <form  className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name or Business name"
          required
          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400"
        />
        <div  className='flex items-center justify-between'>
            <input
          type="email"
          name="email"
          placeholder="Email or Number"
          required
          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400"
      
        /><input
          type="email"
          name="email"
          placeholder="Project type e.g website"
          required
          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400"
      
        />

        </div>
        
        
        <textarea
          name="message"
          placeholder="Message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 resize-vertical"
        />
        
        <button
          type="submit"
          className="w-[35%] bg-black/20 text-white py-3 rounded-lg font-medium hover:bg-black/60 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
    </div>
    </div>
  )
}

export default contact
 
