import React, {useEffect, useState} from "react";
import './Course.scss';
import {NavLink} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getCourseData } from "../../services";
import CourseItem from "./CourseItem/CourseItem";
import Skeleton from '@mui/material/Skeleton';

import { useSelector } from "react-redux";

import {images} from "../../../constants";
import {YouTube}  from "../../index";





const Course=()=>{
    const [data,setData] =useState([])

    const {id} = useParams();
    console.log(id)

    useEffect(()=> {
        getCourseData()
        .then((res)=>{
          console.log(res)
          setData(res.niches)

        })
        .catch(e=>{
          console.log("error",e)
        })
    },[]);

    console.log(data)

    const filta= data.filter((item)=>{
        return item.slug === id;
    })

    console.log(filta.skills)

    const ID =filta.map(item=>item.id)
    console.log(ID, "this is ID")

    const isNiched =filta.map(item=>item.isNiched)
    console.log(isNiched, "this is niched")

    const isSkills =filta.map(item=>{ return item.skills})
    console.log(isSkills, "this is skilled")

    
    
    return(
        <div className="Course">
            
           <div>
                <div className="ghost">
                <div className="Course__banner">
                        {/*<img src={images.polo} alt ="" className="Course__banner_img"/>*/}
                        <div className="Course__banner_inner">
                            <span className="Course__banner_box"><h1>🎨⚙️</h1></span>
                            <span className="Course__banner_desc"> Mae your brand stand out with pixel perfect design crafted to perfection, Mae your brand stand out with pixel perfect design crafted to perfection.</span>
                        </div>
                    </div>
                </div>
                
                <div className="Course__inner">
                        <div className="Course__inner_YT">
                            <YouTube />
                        </div>

                        <span className="Course__inner_p">
                            <h2>{data.length? filta.map(item=>item.name): <Skeleton variant="text" width={210} height={118} />}</h2>
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

                        {data.length? isNiched? 
                        
                        <div className="Course__inner_niche">

                            <span>
                                
                            {filta.map((item)=>{
                                return item.skills.map((item)=>{return(
                                    <div>
                                    <NavLink to={`/courses/${id}/${item.slug}`}>
                                        <div className="Course__inner_niche_item">
                                        <img 
                                            src={""}
                                            width={250}
                                            height={250}
                                            className="product-image"
                                            alt=""
                                        />
                                        <p className="course-name">{item.name}</p>
                                        
                                        </div>
                                    </NavLink>
                                    
                                    
                                </div>

                                
                                )})
                                
                            })
                            }
                            </span>
                        </div>:null:<Skeleton variant="rounded" animation={"wave"} width={`${"80%"}`} height={400} />
                        

                        }
                </div>
           </div>
            
        </div>
    )
}

export default Course;