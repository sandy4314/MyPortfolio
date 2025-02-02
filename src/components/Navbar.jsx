import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import Button from './Button';

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "SKILLS", link: "skills" },
    { name: "PROJECTS", link: "projects" },
    { name: "CONTACT", link: "contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="min-h-[64px] w-full fixed top-0 left-0 bg-white z-50">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="heart-circle-outline"></ion-icon>
          </span>
          Developer
        </div>

        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.link}
                smooth={true}
                offset={-70} // Adjust scroll position
                duration={500} // Duration of the smooth scroll
                className="text-gray-800 cursor-pointer hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
  
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
