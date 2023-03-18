import React from "react";
import './Footer.scss';
//import {images} from '../constants';

export default function Footer(props){
    return(
        <div className="Footer">

            <div className="Footer__inner">
                <div className="Footer__inner_left">
                    <span className="Logo">
                        Logo
                    </span>

                    <span className="Menu">
                        <p>Menu</p>
                        <ul>
                            <li>Services</li>
                            <li>Works</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </span>

                    <span className="Connect">
                        <p>Connect</p>
                        <ul>
                            <li>LinkedIn</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </span>
                </div>

                <div className="Footer__inner_right">
                    <p>Subcribe to our newsletter</p>
                    <form>
                        <input placeholder="Your email" />
                        <button>Subcribe</button>
                    </form>
                 
                </div>
            </div>

            <div className="Footer__last_div">
                <span>
                    <small><strong>2020 Logo</strong>, All rights reserved</small>
                </span>

                <span>
                    <ul>
                        <li><small>Privacy policy</small></li>
                        <li><small>Terms/conditions</small></li>
                        <li><small>Code of conduct</small></li>
                    </ul>
                    
                </span>
            </div>

        </div>
    )
};