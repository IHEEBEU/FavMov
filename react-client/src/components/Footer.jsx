import React from 'react'
import img from "../assets/favmovlog.png";
function Footer() {
  return (
    <div >
       <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          
          <img
            src={img}
            alt="Netflix Logo"
          />
        </div>
        <ul className="footer-links">
          <li>Home</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Help Center</li>
        </ul>
        <div className="footer-social">
          <i className="fab-fa-facebook-f"></i>
          <i className="fab-fa-twitter"></i>
          <i className="fab-fa-instagram"></i>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
