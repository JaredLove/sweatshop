import React from "react";
import "./style.css";
import logo from '../../assets/images/highres.png'
const Header = ({ currentPage, handlePageChange}) => {
    return (
        <div>
        <header>
        <nav>
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div>
            <ul>
                <li><button  onClick={() => {handlePageChange('home');}}>Home</button></li>
                <li><button  onClick={() => {handlePageChange('about');}}>About Us</button></li>
                <li><button  onClick={() => {handlePageChange('roster');}}>Roster</button></li>
                <li><button  onClick={() => {handlePageChange('contact');}}>Join Us</button></li>
            </ul>
            </div>
        </nav> 
        </header>
       
        </div>
    );
}   

export default Header;
