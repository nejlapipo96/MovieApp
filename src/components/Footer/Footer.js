import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className='footer-info'>
            <div className='footer-navbar'>
                <img src='images/Shield.png' alt='shield'/>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/movies'>Movies</Link></li>
                        <li><Link to='/shows'>TV Shows</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='social-icons'>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-square-tumblr"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
        </div>
        <div className='copyright'>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Copyright 2022</p>
        </div>
    </footer>
  )
}

export default Footer