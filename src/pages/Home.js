import React from 'react';
import Hero from '../components/Hero/Hero';
import MovieCards from '../components/MovieSection/MovieCards';
import Insider from '../components/Insider/Insider';
import Footer from '../components/Footer/Footer';
import ShowsCards from '../components/ShowsSection/ShowsCards';
import AnimeCards from '../components/AnimeSection/AnimeCards';


const Home = () => {
 
  return (
    <div>
      <Hero />
      <MovieCards />
      <ShowsCards />
      <AnimeCards />
      <Insider />
      <Footer />
    </div>
  )
}

export default Home