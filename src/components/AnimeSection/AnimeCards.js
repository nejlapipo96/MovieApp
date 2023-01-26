import React from 'react';
import data from './dataAnime.json';
import { useState, useRef } from 'react';
import Card from '../../components/Card';

const AnimeCards = () => {
    const cards = data.map((anime) => {
        return (
          <Card 
            key={anime.id}
            {...anime}
          />
        )
      })

    const [slideNumber, setSlideNumber] = useState(0)

    const animeRef = useRef()
    const handleClickAnime = (direction) => {
    if(direction === 'left' && slideNumber > 0) {
        setSlideNumber(slideNumber - 1)
        animeRef.current.style.transform += `translateX(215px)`
    }
    if(direction === 'right' && slideNumber < 1) {
        setSlideNumber(slideNumber + 1)
        animeRef.current.style.transform += `translateX(-215px)`
    }
    }

  return (
    <section className='cards-container'>
        <h2 className='main-title'>Animation</h2>
        <div className='icons'>
            <i className="fa-sharp fa-solid fa-circle-arrow-left left" onClick={() => handleClickAnime('left')}></i>
            <i className="fa-sharp fa-solid fa-circle-arrow-right right" onClick={() => handleClickAnime('right')}></i>
        </div>
        <div className='cards-list' ref={animeRef}>
          {cards}
        </div>
      </section>
  )
}

export default AnimeCards