import React from 'react'
import market from '../assets/Images/marketing.jpg'
import { Link } from 'react-router-dom'

 function Word() {
  return (
    <>
    <div className='lg:flex p-3 lg:p-3  lg:w-[70%] shadow-md shadow-slate-400 rounded-xl '>
      <img className='lg:w-[30%] rounded-tl-2xl rounded-bl-2xl' src= {market} />
      <div className='p-3  lg:pl-20 xl:pr-20'>
        <h1 className='font-blod text-2xl text-left underline underline-offset-4'>Analytics & Reporting</h1>
        <p className='mt-5 '>
        We believe in transparency and keeping our clients informed every step of the way. Our analytics and reporting services include:
        </p>

        <p className='mt-5'>
        <b>Regular Reports:</b> Provide detailed reports that show the progress of your SEO campaigns. 
        </p>
        <p className='mt-7'>
        <b>Performance Analysis:</b> Analyzing data  to identify trends and make informed decisions. quickly, and perform well.
        </p>

        <p className='mt5'>
       <b> Continuous Optimization:</b> Using insights from analytics to continuously refine and improve your SEO strategy.
        </p>

        {/* <div className='flex mt-5 '>
        <p className=' border-r-2 border-solid border-black pr-10'>36 hours</p>
        <p className=' border-r-2 border-solid border-black pr-10 ml-6'> 4 week</p>
        <p className=' ml-6'> Certificate</p>
        
        </div> */}



        {/* <div className='flex mt-4 '>
      <Link to= "" className='underline'>Subscribe Courses</Link>
        </div> */}

      </div>

      </div>
      
    </>
  )
}
export default Word
