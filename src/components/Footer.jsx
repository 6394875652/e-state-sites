import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <>
       <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We provide top real estate services that help you find your dream home with ease.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: anandk27375@gmail.com</li>
            <li>Phone: +91 8840838032</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f">Facebook</i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            
            <a href="#"><i className="fab fa-instagram"> Instagram</i></a>
            <a href="#"><i className="fab fa-linkedin-in">Linkedin</i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Real Estate Company. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}
