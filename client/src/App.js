import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about"  element={<About />}  />
            <Route path="/roster"  element={<Roster />}  />
            <Route path="/contact" element={<Contact />}  />
            {/* Add a catch-all route for 404 Not Found */}
            <Route component={Home} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
