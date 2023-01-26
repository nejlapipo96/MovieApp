import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-text'>
            <h2 className='title'>Thor: Love and Thunder</h2>
            <h4 className='release-date'>2022</h4>
            <div className='stats'>
                <p className='rating-text'>Rating IMDb: </p>
                <i class="fa-solid fa-star"></i>
                <p className='rating'>6.4</p>
            </div>
            <button className='btn'>Details</button>
        </div>
        <div className='hero-img'>
            <img src='images/thor-naslovna.jpg' alt='thor'/>
        </div>
    </section>
  )
}

export default Hero