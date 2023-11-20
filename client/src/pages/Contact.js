import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiscord} from '@fortawesome/fontawesome-free-brands';


const Contact = () => {
    
        return (
            <section className="contact">
                <h1 id="work">Join Us</h1>
                <div className="contact-content">
                    <p>
                        Start your new sweaty life today.
                        </p>      
                <p>
                        
                    <a href="https://discord.gg/gx4TTCFBU9"><FontAwesomeIcon icon={faDiscord} className="icon"/></a>
                </p>
                </div>
            </section>
        );
    };


export default Contact;