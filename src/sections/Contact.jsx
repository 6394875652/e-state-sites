import React from 'react'
import './Contact.css'



export const Contact = () => {
  return (
    <>
    <div className='contact' id='contact'>
    <h2><span>Send us a message today</span></h2>
      <input type='text' placeholder='Enter your full name'/>
      <input type='email' placeholder='Enter your valid email'/>
      <input type='number' placeholder='Enter your moble number'/>
      <textarea placeholder='Enter your message here...'></textarea> 
      <button>SEND EMAIL</button>
    </div>
     
    </>
  )
}
