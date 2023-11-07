import React from "react";
import "./style.css";

const Header = ({ currentPage, handlePageChange}) => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="#home" onClick={() => handlePageChange('home')} className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}>Home</a>
                        <a href="#about" onClick={() => handlePageChange('about')} className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}>About</a>
                        <a href="#roster" onClick={() => handlePageChange('roster')} className={currentPage === 'roster' ? 'nav-link active' : 'nav-link'}>Roster</a>
                        <a href="#contact" onClick={() => handlePageChange('contact')} className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>

    );
}   

export default Header;
