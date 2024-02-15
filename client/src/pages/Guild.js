import React from "react";
import "./Guild.css";
import orc from "../assets/images/rexxar.png";

const Guild = () => {
    return (
        <div className="guild-section">
            
            <div className="guild-container">
                <div className="guild-image">
                    <img src={orc} alt="orc" />
                </div>
            </div>
            <div className="guild-info">
                <h6>It Starts Here</h6>
                <h2>More Than Just A Guild</h2>
                <p>
                    We are a guild of like-minded individuals 
                    who have come together to form a community of gamers. 
                    We are a diverse group of people who come from all walks of life.
                     We are united by our love of gaming and our desire to create a 
                     community that is welcoming to all. We are a guild that is 
                     dedicated to creating a positive and inclusive environment f
                     or all of our members. 
                </p>
            </div>
        </div>
    );
}

export default Guild;