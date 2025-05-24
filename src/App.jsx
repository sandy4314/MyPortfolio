import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import image from '/src/assets/myimage.jpg'
import Home from './components/Home';
import About from './components/About'
import Skills from './components/Skills';

import Project from './components/Project';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
  const storedTheme = localStorage.getItem('theme');
  const initialTheme = storedTheme === 'dark' ? 'dark' : 'light';
  setTheme(initialTheme);
  
  if (initialTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, []);
const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);

  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
  return (
    <>
    <div className="bg-white dark:bg-gray-900">
 <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
    <Home/> 
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
</div>
    </>
  );
};

export default App;

