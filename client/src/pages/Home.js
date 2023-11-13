import React from "react";
import homeLogo from "../assets/images/highres.png";
const Home = () => {
    
    return (
        <div className="home-container">
            <img src={homeLogo} alt="homeLogo" className="homeLogo" />
            <h1>Keepin' It Sweaty Since 2020.</h1>
        </div>
    );
};

export default Home;