import React from 'react'

const HeroPage = (props) => {
  return (
    <div>
        <img src={props.image} alt='Thor: Love and Thunder'/>
        <div className='page-info'> 
            <h2>{props.title}</h2>
            <p>{props.releaseyear}</p>
            
        </div>
    </div>
  )
}

export default HeroPage