import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { RiDoubleQuotesR } from "react-icons/ri";



const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 3 },
};

const items = [
  

  <div className=" shadow-2xl shadow-slate-400  rounded-3xl pt-6 p-3 m-2" data-value="1">
  <div className='bg-[#FFE28A] flex flex-col lg:flex-row gap-5 p-5 rounded-lg items-center '>
                <div className='bg-[#FFBF00] text-white p-5 rounded-md text-[30px]'>
                    <RiDoubleQuotesR  />
                </div>
                    <div className='p-5 text-center lg:text-left'>
                            <h1 className='font-bold mb-3'>Search Manisha</h1>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                    </div>
                    </div>
      </div>,


<div className="  shadow-2xl shadow-slate-400 p-3 rounded-3xl pt-6 m-2" data-value="1">
<div className='bg-[#FFE28A] flex flex-col lg:flex-row gap-5 p-5 rounded-lg items-center '>
<div className='bg-[#FFBF00] p-5 rounded-md text-white text-[30px]'>
    <RiDoubleQuotesR  />
</div>
    <div className='p-5 text-center lg:text-left'>
            <h1 className='font-bold mb-3'>Search Manisha</h1>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

    </div>
</div>
</div>,

<div className="  shadow-2xl shadow-slate-400 p-3 rounded-3xl pt-6 m-2" data-value="1">
<div className='bg-[#FFE28A] flex flex-col lg:flex-row gap-5 p-5 rounded-lg items-center '>

<div className='bg-[#FFBF00] p-5 rounded-md text-white text-[30px]'>
    <RiDoubleQuotesR  />
</div>
    <div className='p-5 text-center lg:text-left'>
            <h1 className='font-bold mb-3'>Search Manisha</h1>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

    </div>
</div>
</div>,




<div className=" shadow-2xl p-3 rounded-3xl pt-6 m-2" data-value="1">
<div className='bg-[#FFE28A] flex flex-col lg:flex-row gap-5 p-5 rounded-lg items-center '>
<div className='bg-[#FFBF00] p-5 rounded-md text-white text-[30px]'>
    <RiDoubleQuotesR  />
</div>
    <div className='p-5 text-center lg:text-left'>
            <h1 className='font-bold mb-3'>Search Manisha</h1>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

    </div>
</div>
</div>,

     <div className="  shadow-2xl shadow-slate-400 p-3  rounded-3xl pt-6 m-2" data-value="1">
     <div className='bg-[#FFE28A] flex flex-col lg:flex-row gap-5 p-5 rounded-lg items-center '>
     <div className='bg-[#FFBF00] p-5 rounded-md text-white text-[30px]'>
         <RiDoubleQuotesR  />
     </div>
         <div className='p-5 text-center lg:text-left'>
                 <h1 className='font-bold mb-3'>Search Manisha</h1>
                 <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

         </div>
</div>
</div>,




<div className="  shadow-2xl shadow-slate-400 p-3 rounded-3xl pt-6 m-2" data-value="1">
<div className='bg-[#FFE28A] flex flex-col lg:flex-row gap-5 p-5 rounded-lg items-center '>
                <div className='bg-[#FFBF00] p-5 rounded-md text-white text-[30px]'>
                    <RiDoubleQuotesR  />
                </div>
                    <div className='p-5 text-center lg:text-left'>
                            <h1 className='font-bold mb-3'>Search Manisha</h1>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                    </div>
                    </div>
      </div>,


<div className=" shadow-2xl shadow-slate-400 p-3 rounded-3xl pt-6 m-2" data-value="1">
<div className='bg-[#FFE28A] flex flex-col lg:flex-row gap-5 p-5 rounded-lg items-center '>
                <div className='bg-[#FFBF00] p-5 rounded-md text-white text-[30px]'>
                    <RiDoubleQuotesR  />
                </div>
                    <div className='p-5 text-center lg:text-left'>
                            <h1 className='font-bold mb-3'>Search Manisha</h1>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                    </div>
                    </div>
      </div>,

<div className=" shadow-2xl shadow-slate-400 p-3  rounded-3xl pt-6 m-2" data-value="1">
<div className='bg-[#FFE28A] flex flex-col lg:flex-row gap-5 p-5 rounded-lg items-center '>
                <div className='bg-[#FFBF00] p-5 rounded-md text-white text-[30px]'>
                    <RiDoubleQuotesR  />
                </div>
                    <div className='p-5 text-center lg:text-left'>
                            <h1 className='font-bold mb-3'>Search Manisha</h1>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

                    </div>
      </div>
      </div>,

         
];

function Testimonials() { 
  return (
    <>
    <div>
<div className='text-center mb-14 '>
    <p className='text-gray-500 font-medium'>TESTIMONIALS</p>
    <h1 className='font-bold text-3xl mt-3'>What They <b className='text-[#FFBF00]'>Think</b></h1>
   </div>
        <AliceCarousel
         autoPlay
         autoPlayInterval={5000} 
         infinite
        items={items}
        responsive={responsive}
        disableButtonsControls
    />
    </div>
    </ >
  )
}

export default Testimonials
