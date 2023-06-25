import React from 'react'
import '../stylesheets/home.css'
import {FaArrowRight} from "react-icons/fa"
import HeroImage from '../assests/hero11.jpg'

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
                <button className="button1">
                    Portfolio
                    <span>
                        <FaArrowRight size={15} className='icon1'/> 
                    </span>
                </button>
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
