import React from "react";
import "./offer.css";
import elite from "../assets/images/elite.png";
const Offer = () => {
    return (
        <div className="offer-container">
            <h2>Why Join Us?</h2>
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
            <div className="what-we-offer">
                    <div className="wwo-icons">
                        <div>
                        <img src={elite} alt="elite" ></img>
                        </div>
                        <div>
                        <div>
                        <h2>Multi-Gladiator Roster</h2>
                        <p>Our roster is filled with multi-gladiators who are ready to help you reach your full potential.</p></div>
                        </div>

                    </div>
                    <div className="wwo-icons">
                    <div>
                        <img src={elite} alt="elite" ></img>
                        </div>
                        <div>
                        <h2>Active Discord</h2>
                        <p>Our discord is always active with healthy banter and helpful advice.</p> </div>
                    </div>
                    <div className="wwo-icons">
                    <div>
                        <img src={elite} alt="elite" ></img>
                        </div>
                        <div>
                        <h2>RBG Nights</h2>
                        <p>Occasionally we will have RBG nights for those who are interested.</p></div>
                    </div>  
                    <div className="wwo-icons">
                    <div>
                        <img src={elite} alt="elite" ></img>
                        </div>
                        <div>
                        <h2>Arenas</h2>
                        <p>Our main focus and energy will always lie within the arena.</p></div>
                    </div>
                    <div className="wwo-icons">
                    <div>
                        <img src={elite} alt="elite" ></img>
                        </div>
                        <div>
                        <h2>Healthy Banter</h2>
                        <p>Our discord is always active with healthy banter and helpful advice.</p></div>
                    </div>
                    <div className="wwo-icons">
                    <div>
                        <img src={elite} alt="elite" ></img>
                        </div>
                        <div>
                        <h2>Mythic+</h2>
                        <p>Occasionally we will have RBG nights for those who are interested.</p></div>
                    </div>
            </div>
        </div>
    );

};

export default Offer;