import React from "react";
import './Listpage.scss';

import {images} from '../../constants';

const Listpage=(props)=>(
    <div className="Listpage">
       
        <div className="Listpage__inner">

            <h2>Whatever work you do,<br/> we're able to help</h2>
            
            <div className="Listpage__inner_Section">
                <div className="Listpage__inner__left">
                        <div className="blue">
                            <img src={images.woman} alt=""  />
                        </div>

                        <div className="yellow">
                            <img src={images.suit} alt="" />
                        </div>

                        <div className="red">
                        <img src={images.polo} alt="" />
                        </div>
                </div>

                <div className="Listpage__inner__right">
                   <div>
                        <span className="svg">Icon</span>
                        <div className="content">
                            <h3>Design and assets</h3>

                            <p>
                                Mae your brand stand out with pixel perfect design crafted to perfection. 
                            </p>
                        </div>
                   </div>

                   <div>
                        <span className="svg">Icon</span>
                        <div className="content">
                            <h3>Design and assets</h3>

                            <p>
                                Mae your brand stand out with pixel perfect design crafted to perfection. 
                            </p>
                        </div>
                   </div>

                   <div>
                        <span className="svg">Icon</span>
                        <div className="content">
                            <h3>Design and assets</h3>

                            <p>
                                Mae your brand stand out with pixel perfect design crafted to perfection. 
                            </p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
)

export default Listpage;