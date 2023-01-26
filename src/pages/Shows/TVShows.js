import React, { useState } from 'react';
import './TVShows.css';
import dataAllShows from './AllShows.json';
import Card from '../../components/Card';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal';
import dataHero from './ShowsHero.json';
import HeroPage from '../../components/HeroPage';

const TVShows = () => {

const [activeModal, setActiveModal] = useState(false);
const [trailerId, setTrailerId] = useState("")

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
      <div className='shows-page' style={activeModal ? dakrMode : lightMode}>
        <div className='shows-hero'>
          {
            dataHero && dataHero.map((data) => {
              return (
                <>
                  <HeroPage
                    {...data}
                    key={data.id}
                  />
                  <button onClick={() => handleModal(data.trailer)}>Watch trailer</button>
                </>
              )
            })
          }
        </div>
        <h2 className='shows-page-title'>All TV Shows</h2>
        <div className='showcard-page'>
        { dataAllShows && dataAllShows.map((show) => {
            return (
              <div onClick={() => handleModal(show.trailer)} key={show.id}>
                <Card 
                  {...show}
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

export default TVShows