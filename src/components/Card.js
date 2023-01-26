import React from 'react';

const Card = (props) => {

  return (
    <div className='container'>
        <div className='card'>
            <div className='box-rating'>
                <i class="fa-solid fa-star"></i>
                <p className='rating'>{props.rating}</p>
            </div>
            <img src={props.image} alt='img'/>
            <h4 className='title'>{props.title}</h4>
            <p className='release-date'>{props.releaseyear}</p>
        </div>
    </div>
  )
}

export default Card