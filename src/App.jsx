import React from 'react';
import Navbar from './components/Navbar';
import image from '/src/assets/myimage.jpg'
import Home from './components/Home';
import About from './components/About'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Project from './components/Project';
import Contact from './components/Contact';
const App = () => {
  return (
    <>
    
   <Navbar/>
    <Home/> 
    <About/>
    <Skills/>
    <Project/>
    <Contact/>

    </>
  );
};

export default App;

