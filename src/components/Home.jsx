import React, { useEffect } from 'react';
import myimage from '/src/assets/myimage.jpg'; // Ensure this path is correct
import resume from '/src/assets/resume.pdf'; // Ensure the resume file exists in the correct path
import Button from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Home = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // Function to open resume in a new tab
  const handleResumeClick = () => {
    window.open(resume, '_blank');
  };

  const handleConnectClick = () => {
    const email = 'sandeepkumaronteru7777@gmail.com';
    const subject = encodeURIComponent("Let's Connect");
    const body = encodeURIComponent("Hello Sandeep,\n\nI would like to connect with you.");
    
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_self');
  };
  

  return (
    <div id="home" className="mt-24 flex flex-col-reverse md:flex-row items-center md:items-start px-6 md:px-32">
      
      {/* Text Section */}
      <div className="md:mt-36 mt-10 text-center md:text-left md:w-1/2" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-xl font-semibold md:text-3xl">
          Hi, I'm Onteru Sandeep Kumar Yadav
        </h1>
        <h1 className="mt-5 font-extrabold font-[Poppins] text-2xl md:text-3xl">
          I'm a Full Stack Web Developer
        </h1>
        <p className="mt-5 text-gray-800 text-lg md:text-xl leading-relaxed">
          I am Onteru Sandeep Kumar Yadav, a third-year B.Tech student at RVR&JC College of Engineering 
          with a passion for web development, coding, and problem-solving.
        </p>
        <div className="mt-11 flex justify-center md:justify-start space-x-4">
          <Button onClick={handleResumeClick}>VIEW RESUME</Button>
          <Button onClick={handleConnectClick}>LET'S CONNECT</Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end" data-aos="zoom-in" data-aos-duration="1000">
        <img
          src={myimage}
          alt="Profile"
          className="mt-10 w-[80%] md:w-[80%] lg:w-[60%] max-w-[400px] h-auto rounded-lg hover:-translate-y-3 duration-500 hover:-translate-x-3 hover:shadow-[5px_5px_0_0_rgba(0,0,255,1)] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Home;
