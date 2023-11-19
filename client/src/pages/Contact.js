import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiscord} from '@fortawesome/fontawesome-free-brands';


const Contact = () => {
    
        return (
            <section className="contact">
                <h1 id="work">Join Us</h1>
                <div className="contact-content">
                
                <p>Do you ever wake up in a sweat? Do you ever type imflammatory language in solo shuffle and decide to delete it right after because you tell yourself "what's the point?". Do you want to become a good person? If you answered yes to any of those questions then you've landed where you were destined to be.</p>

        <p>Come be apart of something that's bigger than all of us. We love to sweat and we expect you to sweat with us. With an active discord providing healthy banter, as well as RBG nights occasionally (Aha). But our main focus and energy will always lie within the arena. Come learn and pick the brains from our highly experienced multi-gladiator roster and give yourself a reason to sweat. </p>            
                <p>
                        
                    <a href="https://discord.gg/gx4TTCFBU9"><FontAwesomeIcon icon={faDiscord} className="icon"/></a>
                </p>
                </div>
            </section>
        );
    };


export default Contact;