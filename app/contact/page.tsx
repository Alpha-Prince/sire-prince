'use client'


import React from 'react'

const contact = () => {
return (
    <div className="max-w-lg mx-autor bg-blue-400 p-6">
      <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
      
      <form  className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name or Business name"
          required
          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400"
        />
        
        <input
          type="email"
          name="email"
          placeholder="Your email or Number"
          required
          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400"
      
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 resize-vertical"
        />
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default contact
