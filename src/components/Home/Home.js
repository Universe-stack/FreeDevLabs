import React from "react";
import './Home.scss';
import {images} from "../../constants";



const Home=()=>{
    return(
        <div className="home">

            <section className="home__inner">
                <div className="home__inner_text">
                    <span className="home__text"> <h1>Good design meets<br/> great user experience</h1></span>

                    <small>For everyone, from beginner to experts</small>

                    <span className="home__text_button">
                        <button>Buy digits</button>
                        <button>See the features</button>
                    </span>
                </div>

                <img src={images.ellipseP} className="image__ellipse" alt=""/>

                <div className="home__vectors">
                    <img src={images.chat} alt=""/>
                    <img src={images.chat1} alt=""/>
                    <img src={images.input} alt=""/>
                    <img src={images.ellipse2} alt=""/>
                    <img src={images.vector} alt=""/>
                    <img src={images.mask} alt=""/>
                    <img src={images.triangleP} alt=""/>
                    
                     
                </div>
            </section>
            
        </div>
    )
}

export default Home;