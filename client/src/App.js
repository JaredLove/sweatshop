import React, { useState } from 'react';
import './App.css';
// import Home from './pages/Home';
import Header from './components/Header';
import Roster from './pages/Roster';
import About from './pages/About';
import Contact from './pages/Contact';
import Splash from './components/Splash';
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const handlePageChange = (page) => setCurrentPage(page);

    
  return (
  
      <div>     
      

      <Header
          currentPage={currentPage}
          handlePageChange={handlePageChange}
      ></Header>

        <main>
            <Splash />
            <About />
            <Roster />
            <Contact />
        <footer>

        </footer>
      </main>  
    </div>
  );
}

export default App;
