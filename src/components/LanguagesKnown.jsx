import React from 'react'
import '../stylesheets/language.css'
import html from '../assests/html.jpg'
import css from '../assests/css.png'
import js from '../assests/js.png'
import react from '../assests/react.png'
import github from '../assests/github.png'

const LanguagesKnown = () => {
    const tech=[
        {
            id:1,
            src:html,
            title:'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src:js,
            title:'Java Script',
            style: 'shadow-yellow-500'
        },
        {
            id:3,
            src:css,
            title:'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:4,
            src:react,
            title:'React',
            style: 'shadow-blue-600'
        },
        {
            id:5,
            src:github,
            title:'Github',
            style: 'shadow-gray-500'
        },
    ]
  return (
    <div name="language" className='main1'>
      <div className="main2">
        <div>
            <p className='p11'>Languages known</p>
            <p className='p12 py-6'>This are the techologies I've workedwith</p>
        </div>

        <div className='main3'>
            {tech.map(({id,src,title,style})=>(
            <div key={id} className={`main4 ${style}`}>
                <img src={src} alt='' className='image' />
                <p className='p13'>{title}</p>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default LanguagesKnown
