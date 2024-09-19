
import React, { useState } from 'react';
import './Header.css'; 
import { Link } from 'react-scroll';

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleSignInClick = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const handleSignUpClick = () => {
    setShowSignupForm(true);
    setShowLoginForm(false);
  };

  const closeForms = () => {
    setShowLoginForm(false);
    setShowSignupForm(false);
  };

  return (
    <div className='div_main'>
      <nav className="navbar">
        <div className="logo">
          <h2>HOMMY</h2>
        </div>
        <div>
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
            <li><Link to="hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
            <li><Link to="property" spy={true} smooth={true} offset={50} duration={500}>Properties</Link></li>
            <li><Link to="service" spy={true} smooth={true} offset={50} duration={500}>Services</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
            <button className="signup-btn" onClick={handleSignInClick}>Sign In</button>
          </ul>
        </div>
        <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
      </nav>

      {(showLoginForm || showSignupForm) && (
        <div className="form-container">
          {showLoginForm && (
            <>
            <div className='cross'>
            <button className="close-btn" onClick={closeForms}>❎</button>
            </div>
            
             <div className='main'>
             <h2>Login</h2>
              <form>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign In</button>
                <button type="button" onClick={handleSignUpClick}>Sign Up</button>
              </form>
             </div>
             
            </>
          )}

          {showSignupForm && (
            <>
              <div className='cross'>
              <button className="close-btn" onClick={closeForms}>❎</button>
              </div>
              <div>
              <h2>Sign Up</h2>
              <form className='main'>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <button type="submit">Sign Up</button>
                <button type="button" onClick={handleSignInClick}>Sign In</button>
              </form>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
