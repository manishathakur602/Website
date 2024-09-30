import React from "react";
import keyword from "../assets/Images/keyword.jpg";
import { Link } from "react-router-dom";
function WebDesign() {
  return (
    <>
      <div className="lg:flex p-3 lg:p-3  lg:w-[70%] shadow-md shadow-slate-400 rounded-xl ">
        <img
          className="lg:w-[30%] rounded-tl-2xl rounded-bl-2xl"
          src={keyword}
        />
        <div className="p-3  lg:pl-20 xl:pr-20">
          <h1 className="font-bold text-2xl text-left underline underline-offset-4">
            Keyword Research{" "}
          </h1>
          <p className="mt-5 ">
            Understanding what your audience is searching for is the cornerstone
            of a successful SEO strategy. Our keyword research service involves:{" "}
          </p>
          <p className="mt-5">
            <b>In-Depth Analysis:</b> We conduct thorough research to identify
            the most relevant keywords for your business.
          </p>
          <p className="mt-7 ">
            <b>Competitor Analysis:</b> We analyze your competitors to discover
            keyword opportunities you might be missing.
          </p>
          <p className="mt-5">
            <b>Strategic Planning:</b> We create a keyword strategy that aligns
            with your business goals and targets your ideal audience.
          </p>
          {/* <div className='flex mt-5 '>
        <p className=' border-r-2 border-solid border-black pr-10 font-bold'>36 hours</p>
        <p className=' border-r-2 border-solid border-black pr-10 ml-6 font-bold'> 4 week</p>
        <p className=' ml-6 font-bold'> Certificate</p>
        
        </div> */}

          {/* <div className='flex mt-4 '>
      <Link to="#" className='underline' >Subscribe Courses</Link>
        </div> */}
        </div>
      </div>
    </>
  );
}
export default WebDesign;
