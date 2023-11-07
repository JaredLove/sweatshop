import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Roster from './pages/Roster';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const handlePageChange = (page) => setCurrentPage(page);

    
  return (
    <div className="hero">
      <Header
          currentPage={currentPage}
          handlePageChange={handlePageChange}
      ></Header>
      <main>
        {currentPage === 'home' ? (

            <Home></Home>
        ) : currentPage === 'about' ? (
          <About></About>
        ) :  currentPage === 'roster' ? (
          <Roster></Roster>
          ) :  currentPage === 'contact' ? (
            <Contact></Contact>
            ) : (
              <Home></Home>
        )}
      </main>
    </div>
  );
}

export default App;
