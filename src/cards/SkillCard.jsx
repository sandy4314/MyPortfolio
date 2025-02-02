import React from 'react'
import skill2 from '/src/assets/skill2.jpeg'
import image from '/src/assets/myimage.jpg'
const SkillCard = (props) => {
  return (
    <div>
        <div className='bg-black card w-72 m-5 relative cursor-pointer shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-center h-[300px] hover:-translate-y-1 duration 500 hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)]'>
            <img src={props.image} className='img-card rounded-t-lg rounded-b-lg h-[50%] w-[65%]'/>
            <p className='title font-bold text-xl text-white  mt-1 text-center'>{props.title}</p>
            <div className='textcontent p-5 '>
                <div className=' font-bold text-xl text-center'>{props.intro}</div>
                <div className='h-[220px] text-center'>{props.description}</div>

            </div>
        </div>
    </div>
  )
}

export default SkillCard