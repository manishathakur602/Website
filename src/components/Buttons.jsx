import React from 'react'
import { NavLink } from 'react-router-dom'

function Buttons() {
  return (
    <>
       <div className='flex flex-col gap-4 p-5 lg:p-0 '>

 
<NavLink to="/" className=' p-5  rounded-xl border-2 border-solid font-bold border-[#df4d01] hover:bg-[#ffd11a] hover:text-white cursor-pointer ' >Technical SEO</NavLink>
<NavLink to="/graphic" className=' p-5 rounded-xl border-2 border-solid font-bold border-[#df4d01]  hover:bg-[#ffd11a]  hover:text-white cursor-pointer'  >Content Marketing</NavLink>
<NavLink to="/webdesign" className=' p-5 rounded-xl border-2 border-solid font-bold border-[#df4d01] hover:bg-[#ffd11a]  hover:text-white cursor-pointer'  >Keyword Research</NavLink>
<NavLink to="/word" className=' p-5 rounded-xl border-2 border-solid font-bold border-[#df4d01] hover:bg-[#ffd11a] hover:text-white cursor-pointer'  >Analytics & Reporting</NavLink>
</div>
    </>
  )
}

export default Buttons
