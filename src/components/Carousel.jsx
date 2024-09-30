import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import first from "../assets/Images/newimg.jpg"
import note from "../assets/Images/mfirst.jpg"
import group from "../assets/Images/group.jpg"

const responsive = {
    0: { items: 1 },
    568: { items:2 },
    1024: { items: 3 },
   
};

const items = [
   



    <div className="shadow-2xl shadow-slate-400 sm:ml-10   p-5 rounded-3xl pt-6 m-2" data-value="1"> <div className=' bg-gradient-to-r from-yellow-500 to-orange-400 rounded-lg text-white text-center pt-2 flex flex-col items-center  '>
    <img src= {first} className=' size-36 bg-[#FFDED4] rounded-md' />
   

  
        <p className='font-bold mt-5  text-2xl'>Local SEO</p> <p className=' p-5 '>For businesses targeting a local audience, our local SEO services ensure that you appear in search results when potential customers search for services in your area. Encouraging and managing </p>
        </div>
        </div>,


    <div className="flex flex-col items-center  shadow-2xl shadow-slate-400  sm:ml-10 p-5 rounded-3xl pt-6 m-2" data-value="1"><div className=' bg-gradient-to-r from-yellow-500 to-orange-400 rounded-lg text-white text-center pt-2 flex flex-col items-center  '><img src={note} className=' size-36  bg-[#FFDED4] rounded-md' />
        <p className='font-bold mt-5 text-2xl'> E-Commerce SEO</p> <p className='p-5 '>If you run an e-commerce business, our specialized SEO services can help you rank higher and sell more. Leveraging customer reviews and Q&A sections to boost SEO and build trust with potential buyers.</p>  </div></div>,

    <div className="flex flex-col items-center  shadow-2xl shadow-slate-400  sm:ml-10  p-5 rounded-3xl pt-6 m-2" data-value="1"><div className=' bg-gradient-to-r from-yellow-500 to-orange-400 rounded-lg text-white text-center pt-2 flex flex-col items-center  '><img src={group} className=' size-36 bg-[#FFDED4] rounded-md' />
        <p className='font-bold mt-5  text-2xl'> Reporting</p> <p className='p-5 '>Reporting services provide you with detailed insights into your SEO performance.We provide regular reports tailored to your specific needs, giving you a clear view of your SEO progress.</p>  </div></div>,

    // <div className="flex flex-col items-center  shadow-2xl shadow-slate-400  sm:ml-10 p-5 rounded-3xl pt-6 m-2" data-value="1"><img src={bulb} className='  size-36 bg-[#FFDED4] rounded-md' />
    //     <p className='font-bold mt-5  text-2xl'>Technology</p> <p className='p-5'>Our team of UX designers have ample of years of experience in the core areas of user experience</p></div>,
      
    //   <div className="flex flex-col items-center  shadow-2xl shadow-slate-400 sm:ml-10 p-5  rounded-3xl pt-6 m-2" data-value="1"><img src={bulb} className=' size-36 bg-[#FFDED4] rounded-md' />
    //     <p className='font-bold mt-5  text-2xl'>UseFull Tricks</p> <p className='p-5'>Our team of UX designers have ample of years of experience in the core areas of user experience</p></div>,
      
];
const Carousel = () => (
   
    <AliceCarousel
        autoPlay
        infinite
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlayInterval={3000}
    />
);

export default Carousel     