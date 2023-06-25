import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import '../stylesheets/navbar.css'
import {Link} from "react-scroll";

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const links=[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'language'
        },
        {
            id:4,
            link:'contact'
        },
    ]
  return (
    <div className="main-navbar">
      <div>
        <h1 className='heading ml-2'>Harshith</h1>
      </div>
      <ul className='ul1'>
        {links.map(({id,link})=>(
            <li key={id} className='li1'>
              <Link to={link} smooth duration={500}>{link}</Link></li>
        ))}
      </ul>
      <div onClick={()=>setNav(!nav)} className='icon-bars md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
      </div>

        {nav && (
      <ul className='sidebar' >
      {links.map(({id,link})=>(
            <li key={id} className='li2'><Link to={link} smooth duration={500}>{link}</Link></li>
        ))}
      </ul>
    )}
    </div>
  )
}

export default Navbar

