import React from 'react'
import sco from '../assets/Images/sco.jpg'
import { Link } from 'react-router-dom'
function WebPage() {
  return (
    <>
      <div className='lg:flex p-3 lg:p-3  lg:w-[70%] shadow-md shadow-slate-400 rounded-xl'> 
      <img className='lg:w-[30%] rounded-tl-2xl rounded-bl-2xl' src= {sco} />
      <div className=' p-3  lg:pl-20 xl:pr-20 '>
        <h1 className='font-bold text-2xl text-left underline underline-offset-4'>Technical SEO</h1>
        <p className='mt-5 '>Technical SEO ensures that your website is fast, mobile-friendly, and easy to navigate. Our technical SEO services include:
         </p>

        <p className='mt-5'>
        <b>Site Speed Optimization:</b> Improving your websites loading speed to enhance user experience and reduce bounce rates.
          </p>
          
        <p className='mt-7'>
                <b> Mobile Optimization:</b> Ensuring your site is fully responsive and provides a seamless experience on all devices.
                 </p>

                 <p className='mt-5'>
                 <b>XML Sitemaps & Robots.txt:</b> Creating and optimizing sitemaps and robots.txt files to guide search engines in crawling your site.
                 </p>
      
    
      </div>

      </div>
    </>
  )
}

export default WebPage
