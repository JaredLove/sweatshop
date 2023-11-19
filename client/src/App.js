import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Roster from './pages/Roster';
import About from './pages/About';
import Contact from './pages/Contact';
import Splash from './components/Splash';
import Slider from './components/Slider';
import bubba from "./assets/images/bubbaj.png";
import ciz from "./assets/images/ciz.jpg";
import dorrise from "./assets/images/dorrise.png";
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const handlePageChange = (page) => setCurrentPage(page);
  const images = [bubba, ciz, dorrise]; // Add more image URLs as needed
    
  return (
  
      <div>     
      

      <Header
          currentPage={currentPage}
          handlePageChange={handlePageChange}
      ></Header>

        <main>
          <section id='home'>
            <Home />
          </section>
          <section id='about'>
            <About />
            </section>
            <section id='roster'>
            <Roster />
            </section>
            {/* <section id='memories'>
            <Slider images={images} />
            </section> */}
            <section id='contact'>
            <Contact />
            </section>
      </main>  
    </div>
  );
}

export default App;
