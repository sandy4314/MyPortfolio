import React, { useEffect } from 'react';
import SkillCard from '../cards/SkillCard';
import skill2 from '/src/assets/skill2.jpeg';
import skill3 from '/src/assets/skill3.png';
import skill4 from '/src/assets/skill4.png';
import skill5 from '/src/assets/skill5.jpg';

import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Skills = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
    AOS.refresh(); // Refresh AOS to apply the animations correctly
  }, []);

  return (
    <div id="skills" className="mt-10 flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl text-[#003366]" data-aos="fade-up">Skills...</h1>  {/* Navy Blue */}
      <h1 className="text-xl font-extrabold text-[#FF9F00] mt-3" data-aos="fade-up" data-aos-delay="100">What I'm good at..</h1> {/* Vibrant Yellow */}
      <h1 className="text-center text-lg m-3 text-[#555555] w-[70%]" data-aos="fade-up" data-aos-delay="200">
        Transforming ideas into impactful solutions, I craft seamless web applications, solve complex problems, and design visually compelling materials that exceed expectations and inspire meaningful connections.
      </h1> {/* Medium Gray */}

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
        <div data-aos="fade-up" data-aos-delay="300">
          <SkillCard 
            image={skill2} 
            title="MERN Stack Development" 
            intro="Building Seamless Web Applications" 
            description="Proficient in creating full-stack web applications using the MERN stack. From developing responsive frontends to crafting efficient backend systems, solving complex challenges in web development is effortless."
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="500">
          <SkillCard 
            image={skill4} 
            title="Algorithmic Problem Solving" 
            intro="Optimizing Solutions with Logical Precision" 
            description="Expertise in Python and DSA, with 300+ problems solved on LeetCode. Tackles intricate challenges with ease, developing efficient algorithms and delivering high-performance solutions."
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="700">
          <SkillCard 
            image={skill5} 
            title="Machine Learning" 
            intro="Transforming Data into Intelligent Solutions" 
            description="Specializes in creating intelligent solutions with machine learning by analyzing data, training models, and generating actionable insights to solve real-world problems."
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="900">
          <SkillCard 
            image={skill3} 
            title="Visual Design and Branding" 
            intro="Crafting Elegant Designs with Canva" 
            description="Skilled in creating visually appealing and professional templates using Canva. Combines creativity with simplicity to produce effective layouts for various needs"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
