import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const Links = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "SKILLS", link: "skills" },
    { name: "PROJECTS", link: "projects" },
    { name: "CONTACT", link: "contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[64px] w-full fixed top-0 left-0 bg-white dark:bg-gray-900 z-50 shadow-md transition-colors duration-300">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        {/* Brand Logo */}
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 dark:text-white">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="heart-circle-outline"></ion-icon>
          </span>
          Developer
        </div>

        {/* Theme Toggle + Menu Icon for Mobile */}
        <div className="flex items-center gap-4 md:hidden absolute right-8 top-6">
          {/* Toggle Button Outside Menu */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-white" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>

          {/* Menu Icon */}
          <div onClick={() => setOpen(!open)} className="text-3xl cursor-pointer text-gray-800 dark:text-white">
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>
        </div>

        {/* Nav Links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white dark:bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.link}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-800 dark:text-white cursor-pointer hover:text-gray-400 dark:hover:text-gray-300 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Theme Toggle in Desktop Menu */}
          <li className="hidden md:block md:ml-6">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-gray-800" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
