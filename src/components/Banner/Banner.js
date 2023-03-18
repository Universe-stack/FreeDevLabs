import React from "react";
import './Banner.scss';
import {images} from "../../constants";



const Banner=()=>{
    return(
        <div className="Banner">

            <section className="Banner__inner">
              <span className="Banner__inner_left"><h2>Ready to learn <br/>your next skill?</h2></span>
              <span className="Banner__inner_right">
                <button>Get in touch now</button>
                <small>or take a peek inside our library</small>
              </span>
            </section>
            
        </div>
    )
}

export default Banner;