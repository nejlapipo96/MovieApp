import './App.css';
import Home from './pages/Home';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import Movies from './pages/Movies/Movies';
import TVShows from './pages/Shows/TVShows';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <nav className='navbar'>
        <div className='logo'><Link to='/'>MarvelCinema</Link></div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/movies'>Movies</Link></li>
            <li><Link to='/shows'>TV Shows</Link></li>
        </ul>
        <div className='search-bar'>
          <form>
            <input type='text' placeholder='Search...'/>
            <i className="fa-solid fa-magnifying-glass icon"></i>
          </form>
        </div>
      </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/shows' element={<TVShows />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
