import React from 'react'

const Error = ({ message = "Something went wrong. Please try again." }) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="bg-red-100 text-red-700 px-6 py-4 rounded shadow">
        {message}
      </div>
    </div>
  )
}

export default Error