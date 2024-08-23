import Testimonials from "./assets/Testimonials"
import Buttons from "./Buttons"
import Carousel from "./Carousel"
import ContactUS from "./ContactUs"
import Courses from "./Courses"
import Graphic from "./Graphic"
import Title from "./Title"
import WebDesign from "./WebDesign"
import WebPage from "./WebPage"
import Word from "./Word"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    
     <BrowserRouter>
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
     
     </BrowserRouter>
    
    </>
  )
}

export default App
