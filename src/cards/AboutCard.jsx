import React from 'react';

const AboutCard = ({ icon, title, description }) => {
  return (
    <div className="h-[200px] border border-gray-400 rounded-xl p-6 cursor-pointer 
                    hover:bg-pink-100 hover:-translate-y-1 transition-transform duration-300 
                    md:w-[310px] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] flex flex-col justify-between">
      <p className="text-3xl text-blue-500">{icon}</p>
      <h1 className="text-xl font-semibold font-[Georgia]">{title}</h1>
      <p className="text-gray-800">{description}</p>
    </div>
  );
};

export default AboutCard;
