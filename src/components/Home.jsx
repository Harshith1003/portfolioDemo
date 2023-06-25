import React from 'react'
import '../stylesheets/home.css'
import {FaArrowRight} from "react-icons/fa"
import HeroImage from '../assests/hero11.jpg'
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="main-home">
      <div className="sub1-home h-full  md:flex-row">
        <div className="sub2-home">
            <h2 className="heading1 text-white">I'm a Student</h2>
            <p className="para1">
                I have a 1year of experenice buliding and desgining software.
                Currently, I love to work on the web application using technologies like React,Angular
            </p>
            <div className="sub3-home">
                <Link to="contact" smooth duration={500} className="button1">
                    Contact Me
                    <span>
                        <FaArrowRight size={15} className='icon1'/> 
                    </span>
                </Link>
            </div>
        </div>
        <div>
            <img src={HeroImage} alt="my profile" className='heroimage rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home
