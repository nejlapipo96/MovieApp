import React from 'react';
import data from './dataShows.json';
import { useState, useRef } from 'react';
import Card from '../../components/Card';

const ShowsCards = () => {
    const showcards = data.map((show) => {
        return (
          <Card 
            key={show.id}
            {...show}
          />
        )
      }) 

    const [slideNumber, setSlideNumber] = useState(0)

    const showRef = useRef()
    const handleClickShows = (direction) => {
    if(direction === 'left' && slideNumber > 0) {
        setSlideNumber(slideNumber - 1)
        showRef.current.style.transform += `translateX(215px)`
    }
    if(direction === 'right' && slideNumber < 3) {
        setSlideNumber(slideNumber + 1)
        showRef.current.style.transform += `translateX(-215px)`
    }
    }

  return (
    <section className='cards-container'>
        <h2 className='main-title'>Latest TV Shows</h2>
        <div className='icons'>
            <i className="fa-sharp fa-solid fa-circle-arrow-left left" onClick={() => handleClickShows('left')}></i>
            <i className="fa-sharp fa-solid fa-circle-arrow-right right" onClick={() => handleClickShows('right')}></i>
        </div>
        <div className='cards-list' ref={showRef}>
          {showcards}
        </div>
      </section>
  )
}

export default ShowsCards