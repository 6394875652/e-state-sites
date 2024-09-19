// import React, { useState, useEffect } from 'react'
// import './Hero.css'

// const Typewriter = ({ texts, speed = 150, delay = 2000 }) => {
//   const [displayedText, setDisplayedText] = useState('');
//   const [index, setIndex] = useState(0);
//   const [subIndex, setSubIndex] = useState(0);
//   const [reverse, setReverse] = useState(false);

//   useEffect(() => {
//     // If the full text has been displayed, wait for a moment before clearing
//     if (subIndex === texts[index].length + 1 && !reverse) {
//       setTimeout(() => setReverse(true), delay);
//       return;
//     }

//     // If the full text has been cleared, move to the next text
//     if (subIndex === 0 && reverse) {
//       setReverse(false);
//       setIndex((prevIndex) => (prevIndex + 1) % texts.length);
//       return;
//     }

//     const timeout = setTimeout(() => {
//       setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
//     }, speed);

//     // Cleanup the timeout
//     return () => clearTimeout(timeout);
//   }, [subIndex, reverse, texts, index, speed, delay]);

//   return <div>{`${texts[index].substring(0, subIndex)}|`}</div>;
// };


// const AnimatedNumber = ({ start, end, duration }) => {
//   const [number, setNumber] = useState(start);

//   useEffect(() => {
//     let startTimestamp = null;

//     const step = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       const newValue = Math.floor(progress * (end - start) + start);
//       setNumber(newValue);

//       if (progress < 1) {
//         window.requestAnimationFrame(step);
//       }
//     };

//     window.requestAnimationFrame(step);
//   }, [start, end, duration]);

//   return <h3>{number}+</h3>;
// };


// export const Hero = () => {
//   const textArray = ['Your Dream Home', 'Luxury Living', 'Exclusive Properties', 'Mordern Living'];
//   return (
//     <>
//         <div className='hr'>
        
//             <section id='hero'>
//                 <div className='about'>
//                 <h1><span>Discover Premium Estates for <span style={{color:'red'}}><Typewriter texts={textArray} speed={100} delay={1500} /></span></span></h1>
//                 <p><span>Experience modern sophistication in the most sought-after estates and properties, Unlock a world of luxury living with our
//                  handpicked selection of elite properties.</span></p>
//                  <div className='lower'>
//                   <div>
//                      <h3><span className='counter'> <AnimatedNumber start={70} end={140} duration={2000} /></span></h3>
//                      <h3>Team Members</h3>
//                   </div>
//                   <div>
//                   <h3><span className='counter'><AnimatedNumber start={5000} end={10000} duration={2000} /></span></h3>
//                   <h3>Clients</h3>
                    
//                   </div>
//                   <div>
//                   <h3><span className='counter'><AnimatedNumber start={300} end={850} duration={2000} /></span></h3>
//                   <h3 >Sales</h3>
                    
//                   </div>
                  
//                  </div>
//                  <div className='search'>
//                     <button>Search</button>
//                   </div>
//                 </div>
//             </section>
//         </div>
//     </>
//   )
// }





import React, { useState, useEffect } from 'react';
import './Hero.css';
import home from '../assests/home.jpg'

// Typewriter component
const Typewriter = ({ texts, speed = 150, delay = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), delay);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, texts, index, speed, delay]);

  return <div>{`${texts[index].substring(0, subIndex)}|`}</div>;
};

// AnimatedNumber component
const AnimatedNumber = ({ start, end, duration }) => {
  const [number, setNumber] = useState(start);

  useEffect(() => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const newValue = Math.floor(progress * (end - start) + start);
      setNumber(newValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [start, end, duration]);

  return <h3>{number}+</h3>;
};

// The second component that will show and hide
const SecondComponent = ({ onCancel }) => {
  // State for form data
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const searchfun=()=>{
    alert(" Sorry for that,Back-End Available Soon 🏡🏡");

  }


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Category: ${category}`);
  };

  return (
    <div className="second-component">
      <form onSubmit={handleSubmit}>
        <div className='heading'><h2>Search Your Home</h2></div>
        <div className="form-group">
          <label htmlFor="name">LOCATION</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder='Enter an address, state, city or pincode'
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="category">TYPE</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Property</option>
            <option value="category1">Rentals</option>
            <option value="category2">Sales</option>
            <option value="category3">Commercial</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="category">CATEGORY</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Property Category</option>
            <option value="category1">Duplex</option>
            <option value="category2">Condos</option>
            <option value="category3">Houses</option>
            <option value="category4">Villas</option>
          </select>
        </div>
        
        <div className='btn'>
          <button type="submit" className="submit-btn" onClick={searchfun}>Search</button>
          <button type="button" className="submit-btn" onClick={onCancel}>Cancel</button> {/* Hide the component on cancel */}
        </div>
      </form>
    </div>
  );
};

// Main Hero component
export const Hero = () => {
  const textArray = ['Your Dream Home', 'Luxury Living', 'Exclusive Properties', 'Modern Living'];

  // State to manage the visibility of the second component
  const [isSecondComponentVisible, setIsSecondComponentVisible] = useState(false);

  // Show the second component
  const handleSearchClick = () => {
    setIsSecondComponentVisible(true);
  };

  // Hide the second component
  const handleCancelClick = () => {
    setIsSecondComponentVisible(false);
  };

  return (
    <>
      <div className='hr'>
        <section id='hero'>
          <div className='about'>
            <h1>
              <span>Discover Estate for <span style={{color: 'orange'}}><Typewriter texts={textArray} speed={100} delay={1500} /></span></span>
            </h1>
            <p>
              <span>Experience modern sophistication in the most sought-after estates and properties. Unlock a world of luxury living with our handpicked selection of elite properties.</span>
            </p>
            <div className='lower'>
              <div>
                <h3><span className='counter'><AnimatedNumber start={70} end={140} duration={2000} /></span></h3>
                <h3>Team Members</h3>
              </div>
              <div>
                <h3><span className='counter'><AnimatedNumber start={5000} end={10000} duration={2000} /></span></h3>
                <h3>Clients</h3>
              </div>
              <div>
                <h3><span className='counter'><AnimatedNumber start={300} end={850} duration={2000} /></span></h3>
                <h3>Sales</h3>
              </div>
            </div>
            <div className='search'>
              <button onClick={handleSearchClick}>Search</button>
            </div>
          </div>
          <div className='home'>
            <img src={home} alt='df'/>
          </div>
        </section>

        {/* Conditionally render the second component based on state */}
        {isSecondComponentVisible && (
          <SecondComponent onCancel={handleCancelClick} />
        )}
      </div>
    </>
  );
};
