import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiscord} from '@fortawesome/fontawesome-free-brands';


const Contact = () => {
    
        return (
            <footer className="contact">
                <h1 id="work">Join Us</h1>
                <div className="contact-content">
                    <p>
                        Start your new sweaty life today.
                        </p>      
                <p className="discord">
                        
                    <a href="https://discord.gg/gx4TTCFBU9" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faDiscord} id="icon" />    Join our discord.</a>
                
                </p>
                </div>
            </footer>
        );
    };


export default Contact;