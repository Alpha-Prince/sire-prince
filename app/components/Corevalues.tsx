import React from 'react';
import { 
  FaUsers, 
  FaShieldAlt, 
  FaLightbulb, 
  FaStar,
  FaHandshake 
} from 'react-icons/fa';
import { 
  FadeUp, 
  FadeDown, 

} from '../components/Reveal';

const Corevalues = () => {
  const values = [
    {
      id: 1,
      title: "Team Work",
      tagline: "Together we achieve more.",
      description: "We are deeply committed to understanding and solving our customers' real problems. Prioritising team work for bigger problems",
      question: "How does this create value for our customer?",
      icon: <FaUsers className="text-2xl text-blue-500" />,
      color: "blue"
    },
    {
      id: 2,
      title: "Integrity and Trust",
      tagline: "Doing the right thing, especially when it's hard.",
      description: "Being open, honest, and clear in communication with employees, customers, and stakeholders.",
      question: "Are we proud of how we achieved this result?",
      icon: <FaShieldAlt className="text-2xl text-green-500" />,
      color: "green"
    },
    {
      id: 3,
      title: "Innovation",
      tagline: "Embrace the unknown and create what's next.",
      description: "We champion curiosity and challenge the status quo with elegant solutions.",
      question: "What's the boldest solution we can pursue?",
      icon: <FaLightbulb className="text-2xl text-purple-500" />,
      color: "purple"
    },
    {
      id: 4,
      title: "Excellence",
      tagline: "Achieving significant, challenging goals",
      description:  "A commitment to providing the best in every aspect of the business.",
      question: "How can I help my colleague succeed today?",
      icon: <FaStar className="text-2xl text-orange-500" />,
      color: "orange"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <FadeDown>
      <h2 className='py-4 sm:py-14 text-2xl text-center sm:text-3xl md:text-6xl font-bold mb-8 sm:mb-10 lg:mb-12'>Core values that define us</h2>

      </FadeDown>
      <FadeUp><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {values.map((value) => (
          <div
            key={value.id}
            className="bg-black/40 rounded-5xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700 hover:transform hover:scale-105 transition-transform duration-300"
          >
         <div className='flex w-full gap-4 items-center justify-start mb-3'><div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800">
              {value.icon}
            </div>

         
            <h3 className="text-lg font-boldtext-white mb-2">
              {value.title}
            </h3></div>
            

   
            <p className="text-sm text-gray-300 italic mb-3">
              {value.tagline}
            </p>

      
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              {value.description}
            </p>

     
            <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
              <p className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-1">
                Key Question
              </p>
              <p className="text-sm text-gray-400">
                {value.question}
              </p>
            </div>
          </div>
        ))}
      </div>
      </FadeUp>
      
    </div>
  );
};

export default Corevalues;