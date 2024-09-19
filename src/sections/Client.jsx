import React from 'react'
import './Client.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Client = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,


    responsive: [
      {
        breakpoint: 768, // for tablet and below
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        }
      }
    ]

  };

  

  return (
    <>
      <div className='clent-cont'>
      <div className='up_text'><h1><span>What are our clients saying anout us</span></h1></div>

      <Slider {...settings}>
      
       
        <div className='client-info'>
        <div className='upper'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPI_xnC5ObNY9ZZQS83z0qypt230fkZMkI5zDd9LF-z5_vQVKTe2TwMShUdotlTvMxjA&usqp=CAU" alt='jh'/>
          <div>
          <h2>Allu Arjun</h2>
          <p>Excellent team!</p>
          </div>
          
        </div>
      <div className='bootom'>
      <p><span>I had an amazing experience buying my first home through this company. The team was professional, knowledgeable, and helped me through every step of the process.</span></p>
      <h3>★★★★★</h3>
      </div>
      
      </div>
        
        <div className='client-info'>
        <div className='upper'>
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUQMCwXg0ZYw9z3YypnUoPOxEhGvE23h6n_PAA-6ghUtinK1bnGGfGFA6jTG0yFvN5STMGbedabo9ugTnEX_qAoqDNWyQuyyE2OtBD9os" alt='jh'/>
          <div>
          <h2>Vijay</h2>
          <p>Excellent team!</p>
          </div>
          
        </div>
        <div className='bootom'>
      <p><span>I had an amazing experience buying my first home through this company. The team was professional, knowledgeable, and helped me through every step of the process.</span></p>
      <h3>★★★★★</h3>
      </div>
      </div>
    
      
        
        <div className='client-info'>
        <div className='upper'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5IMvU5mzUNUAVtUPVexkzgt3cDPUE6113Q&s" alt='jh'/>
          <div>
          <h2>Rohit Sharma</h2>
          <p>Excellent team!</p>
          </div>
          
        </div>
        <div className='bootom'>
      <p><span>I had an amazing experience buying my first home through this company. The team was professional, knowledgeable, and helped me through every step of the process.</span></p>
      <h3>★★★★★</h3>
      </div>
      </div>
    
       
        <div className='client-info'>
        <div className='upper'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcoYf8q23UT55fl66gzqekfi-w41FJzvzR6sEr4otdt3LbM0N" alt='jh'/>
          <div>
          <h2>Ram Charan</h2>
          <p>Excellent team!</p>
          </div>
          
        </div>
        <div className='bootom'>
      <p><span>I had an amazing experience buying my first home through this company. The team was professional, knowledgeable, and helped me through every step of the process.</span></p>
      <h3>★★★★★</h3>
      </div>
      </div>
      
        
        <div className='client-info'>
        <div className='upper'>
          <img src="https://img.indiaforums.com/person/640x480/1/2908-disha-patani.jpg" alt=''/>
          <div>
          <h2>Disa Patani</h2>
          <p>Excellent team!</p>
          </div>
          
        </div>
        <div className='bootom'>
      <p><span>I had an amazing experience buying my first home through this company. The team was professional, knowledgeable, and helped me through every step of the process.</span></p>
      <h3>★★★★★</h3>
      </div>
      </div>
     
        
        <div className='client-info'>
        <div className='upper'>
          <img src="https://content.tupaki.com/twdata/2018/0418/photos/actress/Kiara%20Advani%20Photos/normal/Kiara%20Advani%20Photos_23.jpg" alt='jh'/>
          <div>
          <h2>Kiara Adwani</h2>
          <p>Excellent team!</p>
          </div>
          
        </div>
        <div className='bootom'>
      <p><span>hello this I had an amazing experience buying my first home through this company. The team was professional, knowledgeable, and helped step of the process.</span></p>
      <h3>★★★★★</h3>
      </div>
      </div>
      
    </Slider>
      

      </div>
    </>
)}
