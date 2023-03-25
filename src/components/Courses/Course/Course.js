import React from "react";
import './Course.scss';

import { useSelector } from "react-redux";

import {images} from "../../../constants";
import {YouTube}  from "../../index";




const Course=()=>{

    const courses = useSelector((state)=>state.course)
    console.log(courses);

    const course = courses.course;

    let param = "Data Analysis";
    const courseFound = course.find((item)=> item.name === param);
    console.log(courseFound)

    return(
        <div className="Course">

           <div>
                <div className="ghost">
                <div className="Course__banner">
                        {/*<img src={images.polo} alt ="" className="Course__banner_img"/>*/}
                        <div className="Course__banner_inner">
                            <span className="Course__banner_box"><img src={images.testimonial1} alt="" /></span>
                            <span className="Course__banner_desc"> Mae your brand stand out with pixel perfect design crafted to perfection, Mae your brand stand out with pixel perfect design crafted to perfection.</span>
                        </div>
                    </div>
                </div>
                
                <div className="Course__inner">
                        <div className="Course__inner_YT">
                            <YouTube />
                        </div>

                        <span className="Course__inner_p">
                            <h2>WEB DEVELOPMENT</h2>
                            <ul>
                                <li> <p> 
                                        Mae your brand stand out with pixel perfect design crafted to perfection
                                        stand out with pixel perfect design crafted to perfection
                                        Mae your brand stand out with pixel perfect design crafted to perfection
                                        Mae your brand stand out with pixel perfect design crafted to perfection.
                                    </p>
                                </li>

                                
                            </ul>
                        </span>

                        {courseFound.niches? 
                        
                        <div className="Course__inner_niche">

                            <span>
                            {courseFound.type.map((item)=>{
                                return (
                                
                                <div className="Course__inner_niche_item">
                                    <h2>{item.name}</h2>
                                    <small>{item.id}</small>
                                </div>)
                            })}
                            </span>
                        </div>

                        :
                        null
                        }
                </div>
           </div>
            
        </div>
    )
}

export default Course;