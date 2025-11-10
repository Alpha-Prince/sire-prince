import React from 'react'

const Banner = () => {
  return (
  <div className='w-full gap-5 flex items-center justify-between md:flex-between py-27 px-15 font-bold text-4xl text-white/80 '>
        <div className='flex-col-center gap-3'>
         <h1>85%</h1>
         <p className='text-md text-white/40 font-light text-md sm:text-md md:text-xl' >Client Satisfaction </p> 
        </div>
     <div className='flex-col-center gap-3'>
        <h1>23+</h1>
         <p className='text-md text-white/40 font-light text-xl sm:text-md md:text-xl'> Real Projects Completed</p>
     </div>
     <div className='flex-col-center gap-3'>
        <h1>40%</h1>
         <p className='text-md text-white/40 font-light text-xl sm:text-md md:text-xl'>  Average Performance </p> 
     </div>
     <div className='flex-col-center gap-3'>
         <h1>3Yrs+</h1>
         <p className='text-md text-white/40 font-light text-xl sm:text-md md:text-xl'>Innovation in the field</p> 
     </div>
     <div className='flex-col-center gap-3'>
        <h1>24/7</h1>
         <p className='text-md text-white/40 font-light text-xl sm:text-md md:text-xl'> Revenue Generated Posibility</p> 
     </div>
    </div>
  )
}

export default Banner
