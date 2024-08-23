import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { BiBasketball } from "react-icons/bi";
import { IoCall } from "react-icons/io5";

function ContactUs() {
  return (
    <>


<div className='sm:flex sm:justify-around sm:gap-2 p-4 k'>
<di v className='my-4 w-full h-[800px]'>
        <iframe 
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.7055461305604!2d76.83906957503727!3d30
        .726677285926307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef0799d5c1c3%3A0xbe2c79bd70a0973!
        2sKreativan%20Technologies!5e0!3m2!1sen!2sin!4v1710326811204!5m2!1sen!2sin'
          className='border:0 h-[600px] w-full rounded-xl shadow-sm shadow-black' 
          allowfullscreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          
        ></iframe>

              <div  className='sm:flex sm:justify-center sm:gap-5 mt-3 sm:mt-4'>
                    <div className='shadow-sm shadow-black p-3 bg-white rounded-md flex items-center gap-3 pr-24'>
                          
                    <div className='bg-[#FFBF00] text-white rounded-full p-4'>
                         <IoCall  className=' ' />
                          </div>
                          
                    
                          <div>
                            <p>Phone</p>
                            <p>78079567</p>
                          </div>
                    </div>
            

{/* second mobile */}

               
<div className='shadow-sm shadow-black bg-white p-3 rounded-md flex items-center gap-3 pr-24 mt-3 sm:mt-0'>
                          <div className='bg-[#FFBF00] text-white rounded-full p-4'>
                          <IoCall  className=' ' />
                          </div>
                         
                        
                  
                        <div>
                          <p>Mobile</p>
                          <p>78079567</p>
                        </div>
                  </div>


                </div>

      </di>   


      {/*form  */}
      <form>
        <div className='p-3 bg-white shadow-sm shadow-black  mt-10 sm:mt-4  rounded-lg sm:pb-14'>
        <div className="text-gray-500 font-medium"><h2>ContactUs</h2>
          <h1 className="font-bold text-3xl mt-2" >Say<b className="text-pink-300"> Hello</b></h1>
          <p className="mt-10">IF you need a working contact form by SEO, please visit TemplateMo's contact page for more info.</p></div>
          
          <div className="flex flex-col mt-4 ">
          <input type="text" placeholder="Full Name"  className="p-2 bg-gray-100 rounded-md outline-0" />
          <input type="text" placeholder="Your Email" className="p-2 bg-gray-100 rounded-md mt-4 outline-0"  />
          <input type="text" placeholder="Your Message" className="p-2 pb-36 pt-0  bg-gray-100 rounded-md mt-4 outline-0"  />
          <p className="flex justify-end p-3"><button className="bg-[#FFBF00] p-3 mt-3 rounded-lg text-white outline-0">SEND MESSAGE</button></p>
          
          </div>
    

</div>
        </form>

       
        </div>
 
        <div className='flex justify-center  gap-3 '>
          <div className='rounded-full bg-slate-400 p-3 hover:bg-[#FFBF00]  hover:text-white cursor-pointer'><FaFacebookF /></div>
          <div className='rounded-full bg-slate-400 p-3  hover:bg-[#FFBF00]  hover:text-white cursor-pointer'><FaTwitter /></div>
          <div className='rounded-full bg-slate-400 p-3  hover:bg-[#FFBF00]  hover:text-white cursor-pointer'><FaLinkedinIn /></div>
          <div className='rounded-full bg-slate-400 p-3  hover:bg-[#FFBF00]  hover:text-white cursor-pointer'><FaWifi /></div>
         <div className='rounded-full bg-slate-400 p-3  hover:bg-[#FFBF00]  hover:text-white cursor-pointer'><BiBasketball /></div>

        </div> 

        <div className=' flex  flex-col  text-center'>
        <p >Copyright © 2022 EduWell Co., Ltd. All Rights Reserved.</p>
        <p>Design: TemplateMo</p>
        
        </div>

       
    </>
  )
}

export default ContactUs
