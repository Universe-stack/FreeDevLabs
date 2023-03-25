import React from "react";
import './Courses.scss';
import {images} from "../../constants";



const Courses=()=>{
    return(
        <div className="courses">

            <section className="courses__inner">
               <span>
                    <h2>Courses we Provide</h2>
                    <p>We provid courses and organize professional training programs</p>
               </span>

               <div className="courses__inner_div">
                    <div>
                        <h3> Web Development</h3>
                        <p> We've designed and built ecommerce experiences that have driven sales.</p>
                        <button><strong>Get Started</strong></button>
                    </div>

                    <div>
                        <h3> Mobile Development</h3>
                        <p> We've designed and built ecommerce experiences that have driven sales.</p>
                        <button><strong>Get Started</strong></button>
                    </div>

                    <div>
                        <h3> Data Analysis</h3>
                        <p> We've designed and built ecommerce experiences that have driven sales.</p>
                        <button><strong>Get Started</strong></button>
                    </div>

                    <div>
                        <h3> Machine Learning And AI</h3>
                        <p> We've designed and built ecommerce experiences that have driven sales.</p>
                        <button><strong>Get Started</strong></button>
                    </div>
                    
                    <div>
                        <h3> Product Design</h3>
                        <p> We've designed and built ecommerce experiences that have driven sales.</p>
                        <button><strong>Get Started</strong></button>
                    </div>
                    
                    <div>
                        <h3> Accounting and Analysis</h3>
                        <p> We've designed and built ecommerce experiences that have driven sales.</p>
                        <button><strong>Get Started</strong></button>
                    </div>
               </div>
            </section>
            
        </div>
    )
}

export default Courses;