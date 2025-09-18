import React, { useEffect, useState } from 'react';
import ProjectCard from '../cards/ProjectCard';
import skill2 from '/src/assets/skill2.jpeg';
import Projects from './Projects';
import project1 from '/src/assets/project1.jpg';
import project2 from '/src/assets/project2.jpg';
import project4 from '/src/assets/project4.png';
import project5 from '/src/assets/project5.png';
import project6 from '/src/assets/project6.png';
import project7 from '/src/assets/cityfix.jpg';

import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Project = () => {
  const projects = [
    { id: 1, type: "Web", title: "City Fix", image: project7, description: "A responsive complaint management system where users can report issues in their city, and admins can track, manage, and resolve complaints efficiently. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js)", link1: "https://github.com/sandy4314/EmployeeTaskFlow",link2: "https://employee-task-flow.vercel.app/" },
    { id: 2, type: "Web", title: "Task Management Dashboard", image: project5, description: "A responsive task manager where admins assign and track tasks, while users monitor progress. Built with React.js, Tailwind CSS, and local storage for seamless performance.", link1: "https://github.com/sandy4314/Tasktrack/", link2: "https://sandy4314.github.io/Tasktrack/" },
    { id: 3, type: "Web", title: "Snake Game", image: project2, description: "A classic Snake Game built with HTML, CSS, and JavaScript, featuring smooth controls and dynamic gameplay. Enjoy a fun, interactive experience right in your browser!", link1: "https://github.com/sandy4314/snakegame/", link2: "https://sandy4314.github.io/snakegame/" },
    { id: 4, type: "ML", title: "Multi Disease Web App", image: project6, description: "A machine learning-powered web app that predicts multiple diseases, including heart, kidney, Parkinson’s, and diabetes, based on user inputs. It provides quick and accurate health risk assessments for early diagnosis.", link1: "https://github.com/sandy4314/Multi-DIsease-Ml-Web-App", link2: "https://github.com/sandy4314/Multi-DIsease-Ml-Web-App" },
    { id: 5, type: "Web", title: "GuestHouse", image: project1, description: "A responsive website for seamless room booking, showcasing services, amenities, and a gallery. Built with HTML, CSS, and JavaScript for an interactive user experience.", link1: "https://github.com/sandy4314/GuestHouse", link2: "https://sandy4314.github.io/GuestHouse/" },
    { id: 6, type: "Web", title: "WeatherNow", image: project4, description: "A real-time weather web app that shows temperature, humidity, wind speed, and conditions for any location. Built with JavaScript APIs, HTML, and CSS for accurate and interactive updates.", link1: "https://github.com/sandy4314/weather", link2: "https://sandy4314.github.io/weather/" }
  ];

  const [change, setChange] = useState("All");

  function handleChange(category) {
    setChange(category);
  }

  const selectedProjects = change === "All" ? projects : projects.filter((project) => project.type === change);

  useEffect(() => {
    AOS.init(); // Initialize AOS
    AOS.refresh(); // Refresh AOS to apply the animations correctly
  }, []);

  return (
    <div className="m-10 md:mt-40 " id="projects">
      <div className="flex justify-center flex-col items-center">
        <h1 className="font-bold text-3xl text-[#003366] dark:text-indigo-300" data-aos="fade-up">Projects...</h1> {/* Navy Blue for Main Heading */}
        <h1 className="text-xl font-extrabold text-[#FF9F00] mt-3 text-center" data-aos="fade-up" data-aos-delay="100">Discover My Innovative Projects..</h1> 
        <p className="text-center text-lg m-3 text-[#555555] dark:text-gray-300" data-aos="fade-up" data-aos-delay="200">Explore my collection of projects, where I showcase my skills in developing innovative solutions.</p> 
      </div>

      <div className="flex justify-center">
        <button onClick={() => handleChange("All")} className="bg-yellow-300 w-20 h-10 rounded-xl m-2 text-black font-semibold text-xl hover:bg-yellow-200" data-aos="fade-up" data-aos-delay="300">
          All
        </button>
        <button onClick={() => handleChange("Web")} className="bg-yellow-300 w-20 h-10 rounded-xl m-2 text-black font-semibold text-xl hover:bg-yellow-200" data-aos="fade-up" data-aos-delay="350">
          Web
        </button>
        <button onClick={() => handleChange("ML")} className="bg-yellow-300 w-20 h-10 rounded-xl m-2 text-black font-semibold text-xl hover:bg-yellow-200" data-aos="fade-up" data-aos-delay="400">
          ML
        </button>
        
      </div>

      <div className="projects grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-6 md:gap-8 lg:gap-10 justify-center items-center place-items-center">
        {selectedProjects.map((project, index) => (
          <div key={project.id} data-aos="fade-up" data-aos-delay={index * 200}> 
            <Projects
              image={project.image}
              title={project.title}
              description={project.description}
              link1={project.link1}
              link2={project.link2}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
