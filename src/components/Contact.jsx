import React from 'react'
import '../stylesheets/contact.css'

const Contact = () => {
    return (
        <div name="contact" className='con1'>
            <div className='con2'>
                <div className='con3'>
                    <p className="pa1">Contact</p>
                    <p className='pa2'>Submit the form below to get in touch with me</p>
                </div>
                <div className='con4'>
                    <form action="https://getform.io/f/6559af1f-da05-40dc-9293-1ad39d539b78" method='POST' className='form1'>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="i1" />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="i2"/>
                        <textarea name="message" rows="10" className="text" placeholder='Enter the message'></textarea>

                        <button className='button'>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact
