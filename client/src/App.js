import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Roster from './components/Roster';
import About from './components/About';
import Contact from './components/Footer';
import Offer from './components/Offer';
import Guild from './components/Guild';
// import Splash from './components/Splash';
// import Slider from './components/Slider';
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const handlePageChange = (page) => setCurrentPage(page);
    
  return (
  
      <div>     
      

      <Header
          currentPage={currentPage}
          handlePageChange={handlePageChange}
      ></Header>


          <section id='home'>
            <Home />
          </section>
          <section id='about'>
            <About />
            </section>            
          
          <section id='offer'>
            <Offer />
            </section>
            <section id='guild'>
            <Guild />
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


    </div>
  );
}

export default App;
