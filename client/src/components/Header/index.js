import React, { useState } from "react";
import "./style.css";
import logo from '../../assets/images/highres.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>          
        <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
        </div>          
        <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        <nav className={menuOpen ? "navbar open" : "navbar"}>


          <ul className={menuOpen ? "nav-links open" : "nav-links"}>

                <li><img src={logo} alt="logo" className="logo-moblie" /></li> 
                <li><a href="#home"><button  onClick={() => {setMenuOpen(false);}}>Home</button></a></li>
                <li><a href="#about"><button  onClick={() => {setMenuOpen(false);}}>About Us</button></a></li>
                <li><a href="#roster"><button  onClick={() => {setMenuOpen(false);}}>Roster</button></a></li>
                <li><a href="#contact"><button  onClick={() => {setMenuOpen(false);}}>Join Us</button></a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;