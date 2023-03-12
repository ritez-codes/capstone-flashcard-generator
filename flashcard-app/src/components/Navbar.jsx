import React from 'react'
import { NavLink } from 'react-router-dom'

// navbar component with NavLink component from react-router-dom
function Navbar() {
     return <div className='navbar flex justify-start gap-8 border-b '>
          {/* create new navlink */}
          <NavLink to={"/"} className="link text-slate-600 py-1 " >Create New</NavLink>
          {/* my flashcard navlink */}
          <NavLink to={"/flashcard"} className="link text-slate-600 py-1 " >My Flashcard</NavLink>
     </div>
}
export default Navbar
