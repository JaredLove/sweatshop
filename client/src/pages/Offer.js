import React from "react";
import "./offer.css";
import elite from "../assets/images/elite.png";
const Offer = () => {
    return (
        <div className="offer-container">
            <div>
                <h6>What We Bring To The Table</h6>
                <h2>Why Should You Join Us?</h2>
                <p>Come be apart of something that's 
                bigger than all of us. We love 
                to sweat and we expect you to 
                sweat with us. With an active 
                discord providing healthy banter, 
                as well as RBG nights occasionally 
                (Aha). But our main focus and energy 
                will always lie within the arena. 
                Come learn and pick the brains from 
                our highly experienced multi-gladiator 
                roster and give yourself a reason to sweat. </p>
            </div>
            
            <div className="what-we-offer">
                    <div className="wwo-icons">
                        <div className="icon-img">
                        <img src={elite} alt="elite" ></img>
                        </div>
                        <div>
                        <div className="icon-content">
                        <h3>Multi-Gladiator Roster</h3>
                        <p>Our roster is filled with multi-gladiators who are ready to help you reach your full potential.</p></div>
                        </div>

                    </div>
                    <div className="wwo-icons">
                    <div className="icon-img">
                        <img src={elite} alt="elite" ></img>
                        </div>
                        <div className="icon-content">
                        <h3>Active Discord</h3>
                        <p>Our discord is always active with healthy banter and helpful advice.</p> </div>
                    </div>
                    <div className="wwo-icons">
                    <div className="icon-img">
                        <img src={elite} alt="elite" ></img>
                        </div>
                        <div className="icon-content">
                        <h3>RBG Nights</h3>
                        <p>Occasionally we will have RBG nights for those who are interested.</p></div>
                    </div>  
                    <div className="wwo-icons">
                    <div className="icon-img">
                        <img src={elite} alt="elite" ></img>
                        </div>
                        <div className="icon-content">
                        <h3>Arenas</h3>
                        <p>Our main focus and energy will always lie within the arena.</p></div>
                    </div>
                    <div className="wwo-icons">
                    <div className="icon-img">
                        <img src={elite} alt="elite" ></img>
                        </div>
                        <div className="icon-content">
                        <h3>Healthy Banter</h3>
                        <p>Our discord is always active with healthy banter and helpful advice.</p></div>
                    </div>
                    <div className="wwo-icons">
                    <div className="icon-img">
                        <img src={elite} alt="elite" ></img>
                        </div>
                        <div className="icon-content">
                        <h3>Mythic+</h3>
                        <p>Occasionally we will have RBG nights for those who are interested.</p></div>
                    </div>
            </div>
        </div>
    );

};

export default Offer;