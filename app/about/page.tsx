// import React from 'react'
// import Link from 'next/link'

// const about = () => {
//   return (
//     <div className="bg-black/50 w-full py-30 px-18 flex items-start justify-between ">
//       <div className='flex flex-col items-start justify-between w-[35%] h-full gap-42 pl-12 pt-12'> 
//         <div className='text-5xl leading-16 font-bold'>
//             A developer specializing in crafting innovative solutions. 
// </div>
//           <div className='flex items-center justify-start gap-4 w-full '>
//             <Link href="/contact"> 
//           <button className="bg-[#272727] btn hover:text-blue-400">
//                       Download Cv
//            </button>
//           </Link>
//             <Link href="/contact"> 
//           <button className="bg-[#272727] btn hover:text-blue-400">
// Contact Me      
//      </button>
//           </Link>
          
//           </div>

//             </div>
//       <div className='text-lg w-[50%] text-white/90 leading-7'>
//       <h2 className='text-3xl mb-10'>About Me</h2>
// Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
// Odit quaerat quibusdam voluptas. Itaque suscipit dolorem non, 
// nisi impedit, vero, iure culpa modi consequatur deserunt expedita.
// Iste, vitae. Optio, aperiam dolorem.
// <br />
// <br />
// Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
// Odit quaerat quibusdam voluptas. Itaque suscipit dolorem non, 
// nisi impedit, vero, iure culpa modi consequatur deserunt expedita.
// Iste, vitae. Optio, aperiam dolorem.
// Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
// Odit quaerat quibusdam voluptas. Itaque suscipit dolorem non, 
// nisi impedit, vero, iure culpa modi consequatur deserunt expedita.
// Iste, vitae. Optio, aperiam dolorem.
// <br /><br />
// Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
// Odit quaerat quibusdam voluptas. Itaque suscipit dolorem non, 
// nisi impedit, vero, iure culpa modi consequatur deserunt expedita.
// Iste, vitae. Optio, aperiam dolorem.
// Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
// Odit quaerat quibusdam voluptas. Itaque suscipit dolorem non, 
// nisi impedit, vero, iure culpa modi consequatur deserunt expedita.
// Iste, vitae. Optio, aperiam dolorem.
//       </div>
//     </div>
//   )
// }

// export default about


import React from 'react'
import Link from 'next/link'

const about = () => {
  return (
    <div className="bg-black/50 w-full py-16 sm:py-20 lg:py-30 px-4 sm:px-8 md:px-12 lg:px-18 flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-12 lg:gap-0">
      
      {/* Left Column - Main Content & Buttons */}
      <div className='flex flex-col items-start justify-between w-full lg:w-[35%] h-full gap-8 sm:gap-12 lg:gap-42 pl-0 lg:pl-12 pt-0 lg:pt-12'> 
        <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-snug lg:leading-16 font-bold'>
          A developer specializing in crafting innovative solutions. 
        </div>
        
        {/* Buttons Container */}
        <div className='flex flex-col sm:flex-row items-center justify-start gap-3 sm:gap-4 w-full'>
          <Link href="/contact" className='w-full sm:w-auto'> 
            <button className="bg-[#272727] btn hover:text-blue-400 w-full sm:w-auto px-6 py-3 text-sm sm:text-base transition-all duration-300 hover:bg-[#373737] rounded">
              Download CV
            </button>
          </Link>
          <Link href="/contact" className='w-full sm:w-auto'> 
            <button className="bg-[#272727] btn hover:text-blue-400 w-full sm:w-auto px-6 py-3 text-sm sm:text-base transition-all duration-300 hover:bg-[#373737] rounded">
              Contact Me
            </button>
          </Link>
        </div>
      </div>

      {/* Right Column - About Text */}
      <div className='text-base sm:text-lg lg:text-lg w-full lg:w-[50%] text-white/90 leading-6 sm:leading-7 lg:leading-7'>
        <h2 className='text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10'>About Me</h2>
        <div className='space-y-4 sm:space-y-6'>
          <p>
          A developer specialized in crafting innovative solutions. 
          Transforming ideas into seamless, responsive, and user-centric applications.
          </p>
          <p>
          My journey into web development began 
              by wondering why and how things worked. That curiosity 
              to know how things worked turned into a passion for building over the years.
          </p>
          
           
      <p>  I bridge the gap between design and development, ensuring that the final work is up to expectation.
          My process in creating is collaborative and research-driven, starting with user point of view
              and moving through wireframing, prototyping, and user testing until launching or deployment. 
          </p>
        <p>
           When I am not coding or creating, you might find me creating chances on a park or scoring.
              Relaxing in solitude, or reading a good old book.
        </p>
             
        
        </div>
      </div>
    </div>
  )
}

export default about