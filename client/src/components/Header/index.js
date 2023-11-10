import React from "react";
import "./style.css";
import logo from '../../assets/images/highres.png'
const Header = ({ currentPage, handlePageChange}) => {
    return (

        <nav>
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="quote">
            <p>Keepin' It Sweaty Since 2020</p>
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

    );
}   

export default Header;
