import React from "react";
import "./style.css";

const Header = ({ currentPage, handlePageChange}) => {
    return (
        <header>
        <nav>
            <ul>
                <li><button  onClick={() => {handlePageChange('home');}}>Home</button></li>
                <li><button  onClick={() => {handlePageChange('about');}}>About Us</button></li>
                <li><button  onClick={() => {handlePageChange('roster');}}>Roster</button></li>
                <li><button  onClick={() => {handlePageChange('contact');}}>Join Us</button></li>
            </ul>
        </nav>
    </header>

    );
}   

export default Header;
