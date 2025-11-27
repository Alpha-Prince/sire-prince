'use client'
import React from 'react';
import Image from 'next/image';
import { useEffect, useState} from "react"


const Testimonials = () => {

 const testimonialsData =[
    {
       name: "Skyline Haven",
       image: "/test1.jpg",
       description: "They delivered a stunning, website that increased our conversions. Attention to detail and understanding of our brand vision was exceptional. "
       
    },{
    
        name: "Skyline Haven",
        description: "Working with this web development team transformed our online presence completely. Highly recommended for enterprise-level projects.",
       image: "/test2.jpg"
    },
    {
        name: "Skyline Haven",
            description:"They created a scalable platform that's grown with us, and their strategic insights helped position us perfectly in the market. The ROI has been incredible .",

       image: "/test3.jpg"
    },
    {
        name: "Skyline Haven",
       description: "The corporate website redesign project was handled with utmost professionalism. Their project management kept everything on schedule and within budget. ",
       image: "/test4.jpg"
    },
    
    {
        name: "Skyline Haven",
            description: "I needed a portfolio website that truly showcased my artistic work, and wow, did they deliver!. The admin panel is so easy to use - I can update my portfolio in minutes. ",

       image: "/test5.jpg"
    },
    {
        name: "Skyline Haven",
       description: "Their restaurant-specific solutions transformed our business during challenging times.",
       image: "/test6.jpg"
    }
]



const [currentIndex, setCurrentIndex] = useState(0);
const [cardsToShow, setCardsToShow] = useState(1);

useEffect(()=>{
    const updateCardsToShow = ()=>{
        if(window.innerWidth >= 1024){
            setCardsToShow(testimonialsData.length);
        }else{
            setCardsToShow(1)
        }
};
        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    
},[])


const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
}
const prevProject = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1);
}


  return (
    <div>
    <div    className='container mx-auto py-15 sm:py-10 px-6 md:px-20
    lg:px-32  w-full overflow-hidden' id='Testimonials'>
         <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight pb-20 px-8 sm:py-20 lg:px-18 ">
    What clients say
          </h1>
   

      
        {/* projects slider container */}
        <div className='overflow-hidden'>
            <div className=' flex items-center justify-between gap-10 transition-transform duration-500 ease-in-out '
            style={{transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`}}
            >
                <div className='w-auto flex items-center justify-between gap-7'>
                      {testimonialsData.map((testimonials,index)=>(
                  <div key={index} className='w-[300]  h-auto bg-black/20 py-10 flex flex-col items-center justify-between gap-10'>
                <div className='flex items-center text-white jutstify-between gap-8 px-2'>
                <Image
                src={testimonials.image}
                width={70}
                height={70}
                alt={testimonials.name}
                className='rounded-full'
                /> 
                   <h3 className="text-lg font-bold">{testimonials.name} </h3>  
                </div>
              
                
        <div className='w-[90%] flex flex-col items-center justify-between gap-5 px-3 overflow-hidden'>
          <h2>⭐⭐⭐⭐⭐</h2>  
      <p className="text-md text-center break-all ">{testimonials.description} </p>

         </div>
         
 
                    </div>
                    
                ))}
                </div>
              
            </div>
        </div>

        
          {/* slider button */}
        <div className='flex justify-start items-center mt-8'>
            <button onClick={prevProject}  className='p-3 bg-gray-200 rounded mr-2 w-10 cursor-pointer'
             aria-label='Previous Projects'> 
                <img 
                 src="leftarrow.png" alt="Previous" />
            </button>
            <button onClick={nextProject}  className='p-3 bg-gray-200 rounded mr-2 w-10 cursor-pointer' 
            aria-label='Next Projects'> 
                <img 
                src="/rightarrow.png" alt="Next" />
            </button>
        </div>
    </div>
    </div>
  )
}





export default Testimonials;



       
