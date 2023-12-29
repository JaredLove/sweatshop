import React from "react";
import "./about.css";
import elite from "../assets/images/elite.png";
const About = () => {

    return (
        <section className="about-section">
            <h1>About Us</h1>
            <div className="ss-p">
            <p>Do you ever wake up in a sweat? Do you ever type 
            imflammatory language in solo shuffle and decide to 
            delete it right after because you tell yourself 
            "what's the point?". Do you want to become a good person? 
            If you answered yes to any of those questions then you've 
            landed where you were destined to be.</p>

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
                        
            <div className="about-section-content">
            <div id="z-close">
                <h2>Multi-Gladiator Roster</h2>
                <img src={elite} alt="elite" />
            </div>
            <div id="me-close">
            <h2>Rbg Nights</h2>
            <img src={elite} alt="elite" />
            </div >
            <div id="ciz-close">
            <h2>Arenas</h2>
            <img src={elite} alt="elite" />
            </div> 
            </div>   
            <div className="about-section-content">
            <div id="bub-close">
            <h2>Active Discord</h2>
            <img src={elite} alt="elite" />
            </div>
            <div id="lay-close">
            <h2>Healthy Banter</h2>
            <img src={elite} alt="elite" />
            </div>
            <div id="pepe-close">
            <h2>Mythic+</h2>
            <img src={elite} alt="elite" />
            </div>    
            </div>
           
        </section>
    );
};

export default About;

