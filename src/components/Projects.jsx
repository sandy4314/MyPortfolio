import React from 'react'
import skill2 from '/src/assets/skill2.jpeg'
const Projects = (props) => {
  return (
    <div>
      <div className='project-card cursor-pointer overflow-hidden rounded-xl  w-72 bg-black h-72 m-5 relative flex flex-col justify-center '>

        <img src={props.image} className='proimg-card h-[90%] w-full'/>
        <p className='project-title font-bold text-2xl text-white drop-shadow-lg ml-5'>{props.title}</p>
        <div className='project-content'>
          <p className='h-[120px] text-center text-md font-semibold'>{props.description}</p>
          <div className='flex justify-between mt-5'>
          <button className='bg-yellow-300 w-28 h-10 rounded-xl m-4 text-black font-semibold hover:bg-yellow-200'><a href={props.link1}>Repo link</a></button>
          <button className='bg-yellow-300 w-28 h-10 rounded-xl m-4 text-black font-semibold hover:bg-yellow-200'><a href={props.link2}>Live Preview</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects