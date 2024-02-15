import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiscord} from '@fortawesome/fontawesome-free-brands';


const Contact = () => {
    
        return (
            <footer className="contact">
            <h6>Stay Connected</h6>     
            <h2 id="work">Join Us</h2>
            <div className="footer-content">
                <div>
                    <h2>
                        Start your new sweaty life today.
                    </h2>      

            <button className="discord"><a href="https://discord.gg/gx4TTCFBU9" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faDiscord} id="icon" /></a></button>

            </div>
                
                <div className="contact">
                    <h2>Other Links</h2>
                    <div>
                        <h6>Twitch</h6>
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