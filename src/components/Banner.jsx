import React from 'react';
import h2 from '../assets/Images/image1.png'; 

const BannerSection = () => {
  return (
    <section id="top" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="min-h-screen flex flex-col lg:flex-row items-center bg-white">
          <div className="flex-grow flex flex-col justify-center px-4 sm:px-6 lg:w-1/2 lg:pr-8">
            <p className="text-gray-700 text-xl mb-2">Welcome to our Website</p>
            <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4">
              Our Experience in SEO is Unmatched <br />
              <span className="text-amber-600">Search Engine Optimization!</span>
            </h1>
            <button className="mt-4 sm:mt-6 bg-amber-600 text-slate-50 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-lg font-semibold hover:bg-blue-300 transition-colors duration-300 w-1/2 md:w-full">
        Click Me!
      </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={h2}
              alt="Banner"
              className="w-full h-auto object-cover justify-items-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;