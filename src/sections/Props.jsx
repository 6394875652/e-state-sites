import React from 'react'
import props1 from '../assests/pros1.avif'
import pros2 from '../assests/props2.avif'
import props3 from '../assests/props3.avif'
import props4 from '../assests/props4.avif'
import props5 from '../assests/props5.avif'
import props6 from '../assests/pros1.avif'
import './Props.css'


export const Props = () => {
  return (
    <>
     <div className='up_textt' id='property'><h1><span>Explore the latest properties available</span></h1></div>
     <div className='man'>
      <div className='card'>
        <div>
          <img src={props1} alt='s'/>
        </div>
        <div>
          <h2><span>Villa with Amazing View</span></h2>
          <h2>$543</h2>
          <p><span>Some quick example text to build on the card title and make up the cards content.</span></p>
        </div>
        <div className='btn'>
          <button>Featured</button>
          <button>sale</button>
          <button>Active</button>
        </div>
      </div>
      <div className='card'>
      <div>
          <img src={pros2} alt='s'/>
        </div>
        <div>
          <h2><span>Townhouse for Sale</span></h2>
          <h2>$543</h2>
          <p><span>Some quick example text to build on the card title and make up the cards content.</span></p>
        </div>
        <div className='btn'>
          <button>Featured</button>
          <button>sale</button>
          <button>Active</button>
        </div>
      </div>
      <div className='card'>
      <div>
          <img src={props3} alt='s'/>
        </div>
        <div>
          <h2><span>Duplex sea facing for rent</span></h2>
          <h2>$543</h2>
          <p><span>Some quick example text to build on the card title and make up the cards content.</span></p>
        </div>
        <div className='btn'>
          <button>Featured</button>
          <button>sale</button>
          <button>Active</button>
        </div>
      </div>
      <div className='card'>
      <div>
          <img src={props4} alt='s'/>
        </div>
        <div>
          <h2><span>Villa with side view</span></h2>
          <h2>$543</h2>
          <p><span>Some quick example text to build on the card title and make up the cards content.</span></p>
        </div>
        <div className='btn'>
          <button>Featured</button>
          <button>sale</button>
          <button>Active</button>
        </div>
      </div>
      <div className='card'>
      <div>
          <img src={props5} alt='s'/>
        </div>
        <div>
          <h2><span>Awesomr villa for rent</span></h2>
          <h2>$543</h2>
          <p><span>Some quick example text to build on the card title and make up the cards content.</span></p>
        </div>
        <div className='btn'>
          <button>Featured</button>
          <button>sale</button>
          <button>Active</button>
        </div>
      </div>
      <div className='card'>
      <div>
          <img src={props6} alt='s'/>
        </div>
        <div>
          <h2><span>Street farm for sale</span></h2>
          <h2>$543</h2>
          <p><span>Some quick example text to build on the card title and make up the cards content.</span></p>
        </div>
        <div className='btn'>
          <button>Featured</button>
          <button>sale</button>
          <button>Active</button>
        </div>
      </div>
     </div>
     
    </>
  )
}
