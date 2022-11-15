import './App.css';
import './MediaQueries.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../src/components/Navbar'
import HeroSection from './components/HeroSection'
import NFTLinks from './components/NFTLinks'
import Adventure from './components/Adventure'
import './data'
import { images } from './data';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={(
          <div>
            <Navbar/>
            <HeroSection />
            <NFTLinks />
            {images.map((img, i) => {
              return(
                <Adventure
                  id={i}
                  cardImg={img.cardImg}
                />
              )
            })}
          </div>
        )}
      />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
