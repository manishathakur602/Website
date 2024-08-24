import  { useState } from 'react';
import gift from './assets/images/undrawhead.png';
import maleprofile from './assets/images/maleprofile.png';
import femaleprofile from './assets/images/femaleprofile.png';
import creative from './assets/images/creative.jpg'; 
import technology from './assets/images/technology.jpg'; 
import books from './assets/images/books.jpg'; 
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const AboutUS = () => {
  // State to handle the active tab for team members
  const [activeMember, setActiveMember] = useState(0);

  const teamMembers = [
    {
      name: 'Aryan Sharma',
      role: 'SEO Specialist',
      description: 'Aryan Sharma drives our SEO strategies, optimizing websites to rank higher in search results and drive organic traffic.',
      image: maleprofile,
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Simran',
      role: 'Content Strategist',
      description: 'Simran develops and implements content strategies that enhance our SEO efforts and engage our target audience effectively.',
      image: femaleprofile,
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Abhinav',
      role: 'Technical SEO Expert',
      description: 'Abhinav specializes in technical SEO, ensuring that websites are technically sound and optimized for search engines.',
      image: maleprofile,
      socialLinks: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
  ];

  return (
    <div className="">
      {/* Page Heading */}
      <section className="py-12 text-center bg-gradient-to-b from-[#FA931C] to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-white">
            About Us
          </h1>
          <p className="text-lg mb-8 text-white">
            Discover who we are and how we can boost your online presence with our SEO expertise.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md">
          <div className="md:w-1/2 p-6">
            <h2 className="text-5xl font-bold mb-4 text-gray-800 animate-bounce">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At SEO Mastery, we are dedicated to enhancing your online visibility and driving more traffic to your website. Our mission is to provide cutting-edge SEO strategies and insights to help you achieve top rankings and business success.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={gift}
              alt="SEO Mission"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 bg-[#FA931C] mt-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Meet Our Team
          </h2>
          <div className="flex justify-center flex-wrap gap-8 mb-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`p-4 cursor-pointer ${
                  activeMember === index ? 'bg-white' : 'bg-[#ebb16e]'
                } rounded-lg shadow-lg transition duration-300`}
                onClick={() => setActiveMember(index)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="p-6 bg-[#fbb25e] rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">
                {teamMembers[activeMember].name}
              </h3>
              <p className="text-gray-600">{teamMembers[activeMember].role}</p>
              <p className="mt-4">{teamMembers[activeMember].description}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href={teamMembers[activeMember].socialLinks.facebook} className="text-blue-600 hover:underline">
                  <div className='inline-block ml-2'><FaFacebookF /></div> Facebook
                </a>
                <a href={teamMembers[activeMember].socialLinks.twitter} className="text-blue-400 hover:underline">
                  <div className='inline-block ml-2'><FaXTwitter /></div> Twitter
                </a>
                <a href={teamMembers[activeMember].socialLinks.linkedin} className="text-blue-700 hover:underline">
                  <div className='inline-block'><FaLinkedin /></div> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional */}
      <section className="py-24 text-white bg-gradient-to-b from-[#FA931C] to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4" data-aos="fade-right">
            Special Offer!
          </h2>
          <p className="text-xl mb-8" data-aos="fade-left">
            Get up to 50% OFF on our SEO services. Boost your online presence and drive more traffic to your site with our expert solutions.
          </p>
          <button className="bg-white text-[#f73176] py-4 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 text-lg">
            Explore Services
          </button>
        </div>
      </section>

      <section className="py-12 flex justify-center gap-5 flex-wrap">
        <div className="max-w-sm rounded overflow-hidden shadow-lg" data-aos="zoom-out-right">
          <img className="w-full h-96 object-cover" src={creative} alt="SEO Creative Ideas"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Creative SEO</div>
            <p className="text-gray-700 text-base">
              Creative SEO involves innovative strategies and techniques to optimize your site and enhance user engagement through effective content and design.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg" data-aos="zoom-out-down">
          <img className="w-full h-96 object-cover" src={technology} alt="SEO Technology"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">SEO Technology</div>
            <p className="text-gray-700 text-base">
              Leveraging advanced SEO technology to analyze, optimize, and monitor your  performance for improved search engine rankings.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg" data-aos="zoom-out-left">
          <img className="w-full h-96 object-cover" src={books} alt="SEO Knowledge"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">SEO Knowledge</div>
            <p className="text-gray-700 text-base">
              Comprehensive SEO knowledge covers everything from keyword research to on-page and off-page optimization to help your website rank higher in search results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Call-to-Action */}
      <section className="py-12 mt-20 text-center bg-gradient-to-r from-[#fbb25e] to-red-300">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 animate-pulse">
            Ready to Improve Your SEO?
          </h2>
          <p className="text-lg mb-8 text-gray-600">
            Join us to optimize your website and enhance your online presence with expert SEO strategies.
          </p>
          <button className="bg-white text-[#fbb25e] py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUS;
