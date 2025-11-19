import React from 'react'

const Banner = () => {
  return (
  <div className='w-full gap-8 flex flex-col md:flex-row items-center justify-between py-18 px-12 sm:py-26 sm:px-24 font-bold text-4xl text-white/80 '>
       
        <div className='w-full md:w-50 flex flex-start sm:flex-center gap-3'>
          <div className='flex-col-center gap-3 '>
            <h1>85%</h1>
           <p className='text-md text-white/40 font-light text-xl sm:text-md md:text-xl text-center'>Client Satisfaction </p> 
          </div>
         
        </div>



        <div className='w-full md:w-50 flex-end sm:flex-center gap-3'>
          <div className='flex-col-center gap-3 '>
                 <h1>23+</h1>
     <p className='text-md text-white/40 font-light text-xl sm:text-md md:text-xl text-center'>Projects Completed</p>
     </div>
     </div>

         <div className='w-full md:w-50 flex-start sm:flex-center gap-3'>
          <div className='flex-col-center gap-3 '>
        <h1>40%</h1>
         <p className='text-md text-white/40 font-light text-xl sm:text-md md:text-xl text-center'>  Average Performance </p> 
     </div>
     </div>

        <div className='w-full md:w-50 flex-end sm:flex-center gap-3'>
          <div className='flex-col-center gap-3 '>
         <h1>3Yrs+</h1>
         <p className='text-md text-white/40 font-light text-xl sm:text-md md:text-xl text-center'>Experience field</p> 
     </div>
     </div>

         <div className='w-full md:w-50 flex-start sm:flex-center gap-3'>
          <div className='flex-col-center gap-3 '>
        <h1>24/7</h1>
         <p className='text-md text-white/40 font-light text-xl sm:text-md md:text-xl text-center'> Revenue Generation</p> 
     </div>
     </div>
    </div>
  )
}

export default Banner
