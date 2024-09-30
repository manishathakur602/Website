




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
import Buttons from './components/Buttons.jsx';
import WebPage from './components/WebPage.jsx';
import Graphic from './components/Graphic.jsx';
import WebDesign from './components/WebDesign.jsx';
import Word from './components/Word.jsx';
const App = () => {

   const Home = () => <>

 <BannerSection />
     <Title />
     <Carousel />
     <Courses />
     <div className="lg:flex lg:p-5 lg:justify-around">
      <Buttons />
      <Routes>
        <Route path="/" element={<WebPage />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/webdesign" element={<WebDesign />} />
        <Route path="/word" element={<Word />} />
      </Routes>
     </div>
     <div className="bg-[#e7ddc0]">
     <Testimonials />
     <ContactUS />
     </div>
 </> 

  return (
    <div>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<OurServices />}/>
        <Route path='/Courses' element={<Courses />}/>
        <Route path='/Testimonials' element={<Testimonials />}/>
        <Route path='/ContactUS' element={<ContactUS />}/>
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App



