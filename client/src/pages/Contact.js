import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiscord} from '@fortawesome/fontawesome-free-brands';


const Contact = () => {
    
        return (
            <footer className="contact">
            <h6>It Starts Here</h6>     
            <h1 id="work">Join Us</h1>
            <div className="footer-content">
                <div>
                    <p>
                        Start your new sweaty life today.
                    </p>      
                    <p>
                        <a href="https://discord.gg/gx4TTCFBU9" target='_blank' rel='noreferrer' className="discord"><FontAwesomeIcon icon={faDiscord} id="icon" /></a>
                    </p>
            </div>
                
                <div className="contact">
                    <h2>Other Links</h2>
                    <div>
                        <h2>Twitch</h2>
                        <ul>
                            <li>
                                <a href="https://www.twitch.tv/pepefreshtv" target='_blank' rel='noreferrer'>PepeFreshTV</a>
                                <a href="https://www.twitch.tv/zujoooo" target='_blank' rel='noreferrer'>Zujo</a>
                                <a href="https://www.twitch.tv/itspunx" target='_blank' rel='noreferrer'>Pun</a>
                                <a href="https://www.twitch.tv/cizwxx" target='_blank' rel='noreferrer'>Ciz</a>
                                <a href="https://www.twitch.tv/dorisseline" target='_blank' rel='noreferrer'>Dorrise</a>
                                <a href="https://www.twitch.tv/bubbajrw" target='_blank' rel='noreferrer'>BubbaJ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            </footer>
        );
    };


export default Contact;