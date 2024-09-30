




import React from 'react'
import Header from "./components/Header.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OurServices  from "./Pages/OurServies"
import Courses  from "./Pages/Courses"
import AboutUS from './Pages/AboutUs.jsx';
import Testimonials from './Pages/Testimonials.jsx';
import ContactUS from './Pages/ContactUs.jsx';
import BannerSection from './components/Banner.jsx';
import Title from './components/Title.jsx';
import Carousel from './components/Carousel.jsx';

import Page1 from './Page1.jsx'
import Banner from './components/Banner.jsx';
const App = () => {

  return (
    <div>
    
    <BrowserRouter>
    <Header />
     <Banner />
     <OurServices />
    <Testimonials />
    <Page1 />
   
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        {/* <Route path='/services' element={<OurServices />}/> */}
        {/* <Route path='/Courses' element={<Courses />}/>
        <Route path='/Testimonials' element={<Testimonials />}/>
        <Route path='/ContactUS' element={<ContactUS />}/> */}
      </Routes>
      <Carousel />
      <ContactUS />
    </BrowserRouter>
      
    </div>
  )
}

export default App



