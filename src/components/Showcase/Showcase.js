import React from "react";
import './Showcase.scss';

import {images} from '../../constants';

const Showcase=(props)=>(
    <div className="Showcase">
       
        <div className="Showcase__inner">

            <span>
                <h2>What others are saying</h2>
                <p></p>
            </span>

            <div className="Showcase__divs">
                <div>
                    <p>Completely beautiful website and amazing support! This is my second website from this author and I love both of the sites so much and she has helped me so well when I needed it!</p>

                    <span>
                        <img src={images.testimonial1} alt="" />
                        <h3>Maya Wright</h3>
                        <small>Code Academy</small>
                    </span>
                </div>

                <div>
                    <p>Completely beautiful website and amazing support! This is my second website from this author and I love both of the sites so much and she has helped me so well when I needed it!</p>

                    <span>
                        <img src={images.testimonial3} alt="" />
                        <h3>Simon</h3>
                        <small>Google</small>
                    </span>
                </div>

                <div>
                    <p>Completely beautiful website and amazing support! This is my second website from this author and I love both of the sites so much and she has helped me so well when I needed it!</p>

                    <span>
                        <img src={images.testimonial2} alt="" />
                        <h3>Justice</h3>
                        <small>Microsoft</small>
                    </span>
                </div>

            </div>
        
       
        </div>
    </div>
)

export default Showcase;