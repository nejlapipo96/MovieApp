import React, { useState} from 'react';
import './Movies.css';
import Footer from '../../components/Footer/Footer';
import dataAllMovies from './allMovies.json';
import dataOtherMovies from './OtherMovies.json';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import dataHero from './MovieHero.json';
import HeroPage from '../../components/HeroPage';

const Movies = () => {

const [activeModal, setActiveModal] = useState(false);
const [trailerId, setTrailerId] = useState("");

function handleModal(id) {
  setActiveModal(!activeModal);
  setTrailerId(id)
}

const dakrMode = {
  opacity: 0.3
}

const lightMode = {
  opacity: 1
}

  return (
    <>
      <Modal activeModal={activeModal} trailerId={trailerId}/>
      <div className='movies-page' style={activeModal ? dakrMode : lightMode}>
        <div className='movies-hero'>
          {
            dataHero && dataHero.map((hero) => {
              return (
                <>
                  <HeroPage
                    {...hero}
                    key={hero.id}
                  />
                  <button onClick={() => handleModal(hero.trailer)}>Watch trailer</button>
                </>
              )
            })
          }
        </div>
      
      <h2 className='main-title'>Marvel Cinematic Universe</h2>
      <div className='moviecard-page'>
        {
          dataAllMovies && dataAllMovies.map(movie => {
            return (
              <div onClick={() => handleModal(movie.trailer)} key={movie.id} >
                <Card
                  {...movie} 
                />
              </div>
            )
          })
        }
      </div>

      <h2 className='main-title'>Other Marvel Movies</h2>
      <div className='othermoviecard-page'>
        {
          dataOtherMovies && dataOtherMovies.map(movie => {
            return (
              <div onClick={() => handleModal(movie.trailer)} key={movie.id}>
                <Card
                  {...movie} 
                />
              </div>
            )
          })
        }
      </div>
      <Footer />
    </div>
    </>
  )
  
        }

export default Movies