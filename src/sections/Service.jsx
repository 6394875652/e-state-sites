import React from 'react'
import './Service.css'
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SearchIcon from '@mui/icons-material/Search';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

export const Service = () => {
  return (
   
    <>
      <div id='service'>
      <div className='up_textt'><h1><span>Top Real estate service available</span></h1></div>
      <div className='contain'>
      <div className='frame'>
      <div className='inner'>
      <HomeIcon className='icon' style={{ fontSize: 80, color: 'red' }}/>
      <h2>Home Loans</h2>
      <p><span>We offer you free consultancy to get a loan</span></p>
      <h3>READ MORE</h3>
      </div>
       
      </div>
      <div className='frame'>
      <div className='inner'>
      <MonetizationOnIcon className='icon' style={{ fontSize: 80, color: 'red' }}/>
      <h2>Sell your home</h2>
      <p><span>We sell your home at the best market prize</span></p>
      <h3>READ MORE</h3>

      </div>
      
      </div>
      <div className='frame'>
      <div className='inner'>
      <HomeRepairServiceIcon className='icon' style={{ fontSize: 80, color: 'red' }}/>
      <h2>Legal service</h2>
      <p><span>Expert legal help for all related property items</span></p>
      <h3>READ MORE</h3>
      </div>
      
      </div>
      <div className='frame'>
      <div className='inner'>
      <SearchIcon className='icon' style={{ fontSize: 80, color: 'red' }}/>
      <h2>Home inspection</h2>
      <p><span>We make sure you get what you were promised</span></p>
      <h3>READ MORE</h3>
      </div>
      
      </div>
      <div className='frame'>
      <div className='inner'>
      <NoteAddIcon className='icon' style={{ fontSize: 80, color: 'red' }}/>
      <h2>Evaluation</h2>
      <p><span>We offer you free evaluation to get a mortgage loan</span></p>
      <h3>READ MORE</h3>
      </div>
      
      </div>
      <div className='frame'>
      <div className='inner'>
      <AddAPhotoIcon className='icon' style={{ fontSize: 80, color: 'red' }}/>
      <h2>Photodshoot</h2>
      <p><span>We prepare your home visual presentation</span></p>
      <h3>READ MORE</h3>
      </div>
      
      </div>

      </div>
      </div>
    </>
  )
}
