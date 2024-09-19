import React from 'react'
import img from '../assests/about.webp'
import './About.css'

export const About = () => {
  return (
    <>
        <div className='main_content' id='about'>
            <div className='left'>
            <img src={img} alt='jhd'/>

            </div>
            <div className='right'>
            <div className='right_up'>
            <h2><span>We help clients buy and sell houses since 1976</span></h2>
            <p><span>we pride ourselves on our commitment to excellence, trust, and customer
             satisfaction. Our team of experienced agents brings extensive market knowledge, ensuring you receive
              personalized service and expert guidance throughout your home-buying journey.</span></p>

            </div>

            <div className='right_down'>
            <button className='btnn'>VIEW MORE</button>

            </div>
            
             
              

            </div>
           
            
        </div>
    </>
    
  )
}
