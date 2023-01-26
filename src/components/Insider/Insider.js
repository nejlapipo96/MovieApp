import React from 'react';
import './insider.css';

const Insider = () => {
  return (
    <div className='insider-container'>
        <img src='https://i.annihil.us/u/prod/marvel/html_blocks_assets/loyalty/images/marvel_insider_master.jpg' alt='insider'/>
        <div className='insider-info'>
            <h4>Marvel Insider</h4>
            <h2>Watch, Earn, Redeem!</h2>
            <p>Get rewarded for doing what you already do as a fan.</p>
            <button><a href='https://www.marvel.com/insider?cid=dcom_promomodule_20210319_insider_home' target='_blank' rel="noreferrer">JOIN NOW</a></button>
        </div>
    </div>
  )
}

export default Insider