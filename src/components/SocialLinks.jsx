import React from 'react'
import { FaGithub,FaLinkedinIn } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import '../stylesheets/sociallinks.css'

const SocialLinks = () => {

    const links=[
        {
            id:1,
            child: (
                <a className="action1">LinkedIn<FaLinkedinIn size={30} className='iconin'/></a>
            ),
            href:"https://www.linkedin.com/feed/",
        },
        {
            id:2,
            child: (
                <a className="action1">Github<FaGithub size={30} className='icongit'/></a>
            ),
            href:"https://www.linkedin.com/feed/",
        },
        {
            id:3,
            child: (
                <a className="action1">Mail<HiOutlineMail size={30} className='iconMa'/></a>
            ),
            href:"mailto:parsiharshith002@gmail.com",
        },
        {
            id:4,
            child: (
                <a className="action1">Resume<BsFillPersonLinesFill size={30} className='iconin'/></a>
            ),
            href:"https://www.linkedin.com/feed/",
        },
    ]
  return (
    <div className="main-box">
      <ul>
        {links.map(({id,child,href}) =>(
        <li className="line1">
            <a href="{href}" className="action1" target='_blank'>
                {child}
            </a>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
