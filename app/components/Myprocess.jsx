import React from 'react';
import { 
  FadeUp, 
  FadeDown, 

} from '../components/Reveal';

const Myprocess = () => {
  const process = [
    {
      id: 1,
      title: "Discovery",
      description: "Understand your business needs and define project goals through comprehensive research and analysis.",
      icon: "🔍",
      color: "violet"
    },
    {
      id: 2,
      title: "Design",
      description: "Transform insights into intuitive user experiences and beautiful, accessible interfaces.",
      icon: "🎨",
      color: "pink"
    },
    {
      id: 3,
      title: "Development",
      description: "Build robust, scalable solutions with clean code and comprehensive testing practices.",
      icon: "⚙️",
      color: "cyan"
    },
    {
      id: 4,
      title: "Deploy",
      description: "Launch successfully with thorough deployment processes and ongoing support.",
      icon: "🚀",
      color: "amber"
    }
  ];

  

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 border-blue/100">
      <FadeDown> <div className="text-center mb-12">
        <h2 className=" text-2xl sm:text-5xl font-bold text-white mb-4">
          Our 4D Process
        </h2>
        <p className="text-lg sm:text-2xl text-gray-300">
          A streamlined approach to delivering exceptional results
        </p>
      </div></FadeDown>
     <FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-14 sm:p-6 ">
        {process.map((step, index) => (
          <div key={step.id} className="relative group">
            <FadeUp>
               <div className=" flex flex-col items-center justify-centerl p-6  hover:shadow-lg transition-all duration-300 h-full">
              <div className=" w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                {step.id}
              </div>
            

              <h3 className="text-xl font-bold text-white mb-3 text-center py-3">
                {step.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed text-center">
                {step.description}
              </p>
            </div></FadeUp>
           
          </div>
        ))}
      </div>
      </FadeUp>

    </div>
  );
};

export default Myprocess;