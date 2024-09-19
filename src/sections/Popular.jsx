import React from 'react'
import './Popular.css'
import img from '../assests/hrmg.webp'
import hom from '../assests/ho.jpeg'
import hrmg from '../assests/Heromg.jpg'

export const Popular = () => {
  return (
    <>
        <div className='main_div'>
        <div className='up_text'><h1><span>Explore most poppular areas</span></h1></div>
            
            <div className='second'>
            <div className='child'>
                <img src={img} alt='j'/>
            </div>
            <div className='child'>  <img src={hom} alt='j'/> </div>
            <div className='child'>  <img src={hrmg} alt='j'/> </div>
            
            </div>
           
           <div className='view'>
           <div className='child '><span><h2>5K+</h2><h4>ACTIVE LISTINING</h4></span></div>
            <div className='child '><span><h2>10K+</h2><h4>SOLID LISTINING</h4></span></div>
            <div className='child '><span><h2>8K+</h2><h4>CLIENTS WE'VE SERVED</h4></span></div>
           </div>
           

        </div>
    </>
  )
}
