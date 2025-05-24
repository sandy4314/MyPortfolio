import React, { useEffect } from 'react';
import AboutCard from '../cards/AboutCard';

import myimage3 from '/src/assets/myimage3.jpg';
import tool1 from '/src/assets/tool1.png';
import tool2 from '/src/assets/tool2.png';
import tool3 from '/src/assets/tool3.png';
import tool4 from '/src/assets/tool4.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <div
      id="about"
      className="dark:bg-gray-900 mt-28 flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-16 gap-10 transition-colors duration-300"
    >
      {/* Image Section */}
      <div className="flex justify-center lg:justify-start w-full lg:w-1/3">
        <img
          src={myimage3}
          className="w-[80%] md:w-[60%] lg:w-full max-w-xs md:max-w-sm rounded-xl shadow-lg"
          alt="Profile"
          data-aos="fade-right"
        />
      </div>

      {/* Text and AboutCards Section */}
      <div className="w-full lg:w-2/3 text-center lg:text-left" data-aos="fade-left">
        <div className="flex items-center justify-center xl:justify-start">
          <h2 className="text-3xl font-bold text-[#003366] dark:text-indigo-300">About Me...</h2>
        </div>
        <p className="text-gray-900 dark:text-gray-300 text-base md:text-lg leading-relaxed mt-4">
          I am <span className="font-bold">Onteru Sandeep Kumar Yadav</span>, a third-year B.Tech
          student at RVR&JC College of Engineering. I am passionate about web development, coding,
          and problem-solving, always striving to improve my skills. I have solved{' '}
          <span className="font-bold">300+ LeetCode problems</span> to strengthen my DSA expertise
          and continuously challenge myself to learn and grow.
        </p>

        <p className="mt-3 text-gray-900 dark:text-gray-300 text-base md:text-lg leading-relaxed">
          I am proud to have earned the <span className="font-bold">Gold Topper badge</span> for
          completing the Joy of Computing Using Python course by NPTEL, IIT Madras. With a strong
          drive to take on challenges, I look forward to collaborating on exciting projects and
          making meaningful contributions in the tech world.
        </p>

        {/* About Cards Section */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6 md:gap-8 lg:gap-20 mt-6">
          <AboutCard
            icon={<ion-icon name="laptop-outline"></ion-icon>}
            title="Programming Languages"
            description="Python, C, JavaScript"
          />
          <AboutCard
            icon={<i className="bi bi-mortarboard"></i>}
            title="Education"
            description="B.Tech in Computer Science"
          />
          <AboutCard
            icon={<i className="bi bi-briefcase"></i>}
            title="Personal Skills"
            description="Problem-solving, Leadership"
          />
        </div>

        {/* Tools Section */}
        <div className="mt-8">
          <p className="font-semibold text-center lg:text-left text-[#003366] dark:text-indigo-300">
            Tools I Use
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mt-3">
            {[tool1, tool2, tool3, tool4].map((tool, index) => (
              <div
                key={index}
                className="w-14 h-14 border border-gray-400 dark:border-gray-800 rounded-md flex items-center justify-center cursor-pointer hover:-translate-y-1 transition duration-300 bg-white dark:bg-gray-800"
                data-aos="zoom-in"
              >
                <img src={tool} className="w-3/4 h-3/4" alt={`Tool ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
