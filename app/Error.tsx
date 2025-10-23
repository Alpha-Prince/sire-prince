// app/error.tsx (for error boundary)
'use client'

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="bg-[rgb(6,6,93)] text-amber-100 px-30 py-24 rounded shadow  h-full w-full flex flex-col items-center justify-around gap-10">
        <div>
           <h2 className='text-center text-xl sm:text-3xl md:text-4xl font-zen-dots '>Something went <span className='text-red-500'>wrong!</span></h2>
        <p>{error.message}</p>
        </div>
        <div className='flex items-center justify-btween gap-10 '>
            <button onClick={() => reset()} className='font-voltaire text-lg sm:text-3xl md:text-lg text-red-500 cursor-pointer'>Try again</button>
            <button className='font-voltaire text-lg sm:text-3xl md:text-lg cursor-pointer'>Redirect To <Link href="https://sire-services.vercel.app/#main-nav"                   target="_blank"
>Sire Services</Link></button>
        </div>
       
      </div>
    </div>
  )
}
