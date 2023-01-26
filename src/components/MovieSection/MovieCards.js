import React from 'react';
import data from './dataMovies';
import { useState, useRef } from 'react';
import Card from '../../components/Card';

const MovieCards = () => {
    const cards = data.map((item) => {
        return (
          <Card 
            key={item.id}
            {...item}
          />
        )
        })


    const [slideNumber, setSlideNumber] = useState(0)

    const movieRef = useRef()
    const handleClickMovies = (direction) => {
        if(direction === 'left' && slideNumber > 0) {
        setSlideNumber(slideNumber - 1)
        movieRef.current.style.transform += `translateX(215px)`
        }
        if(direction === 'right' && slideNumber < 5) {
        setSlideNumber(slideNumber + 1)
        movieRef.current.style.transform += `translateX(-215px)`
        }
    }

  return (
    <section className='cards-container'>
        <h2 className='main-title'>Latest Movies</h2>
        <div className='icons'>
            <i className="fa-sharp fa-solid fa-circle-arrow-left left" onClick={() => handleClickMovies('left')}></i>
            <i className="fa-sharp fa-solid fa-circle-arrow-right right" onClick={() => handleClickMovies('right')}></i>
        </div>
        <div className='cards-list' ref={movieRef}>
          {cards}
        </div>
      </section>
  )
}

export default MovieCards