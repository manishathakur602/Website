import React from 'react'
import Design from './assets/Images/newdesign.jpg'
import { Link } from 'react-router-dom'
 function Graphic() {
  return (
    <>
      <div className='lg:flex p-3 lg:p-3  lg:w-[70%] shadow-md shadow-slate-400 rounded-xl '>
      <img className='lg:w-[30%] rounded-tl-2xl rounded-bl-2xl' src= {Design} />
      <div className='p-3  lg:pl-20 xl:pr-20'>
        <h1 className='font-bold text-2xl text-left underline underline-offset-4'>Content Marketing</h1>
        <p className='mt-5 '>Content is king, and our content marketing services focus on creating high-quality content that engages your audience and drives traffic.  </p>

        <p className='mt-5'>
        <b>Content Creation:</b> Develop blog posts, articles, and other content that resonates with your target audience.. 
        </p>

        <p className='mt-7 '>
                 <b>Content Optimization:</b> Ensuring your content is optimized for search engines without sacrificing quality.
        </p>

        <p className='mt-5'>
       <b> Content Distribution:</b> Promoting your content through various channels to reach a wider audience.
        </p>

        {/* <div className='flex mt-5 '>
        <p className=' border-r-2 border-solid border-black pr-10'>36 hours</p>
        <p className=' border-r-2 border-solid border-black pr-10 ml-6'> 4 week</p>
        <p className=' ml-6'> Certificate</p>
        
        </div> */}

        {/* <div className='flex mt-4 '>
      <Link to="#" className='underline' >Subscribe Courses</Link>
        </div> */}

      </div>

      </div>
    </>
  )
}
export default Graphic
