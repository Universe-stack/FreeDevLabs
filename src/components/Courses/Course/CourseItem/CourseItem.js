import React,{useEffect,useState} from 'react'
import {YouTube}  from "../../../index";
import {BsFillArrowDownSquareFill} from "react-icons/bs";
import { useParams } from 'react-router';
import { NavLink } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';

import { getCourseData } from '../../../services';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';


import './CourseItem.scss';

const CourseItem = () => {
    const [data,setData] =useState([])

    const {id,courseId} = useParams();
    console.log(id,courseId)

    useEffect(()=> {
        getCourseData()
        .then((res)=>{
          const ress=res.niches;
          console.log(ress);
          for(let i=0;i<ress.length;i++){
            if(ress[i].slug===courseId){
                console.log(ress[i])
                setData(ress[i].skills)
            }
          }

        })
        .catch(e=>{
          console.log("error",e)
        })
    },[]);

    console.log(data)

    const filta= data.filter((item)=>{
        return item.slug === id;
    })
    console.log(filta)

    let accordionData =filta.map((item)=>item.techs)
    const [innerAccord]= accordionData;
    
    console.log(accordionData,"accordion data")
    console.log(innerAccord,"inner accordion data")


  return (
    <div className='CourseItem'>
        <div className='CourseItem__inner'>
            <div className="CourseItem__inner_YT">
                <YouTube w="932px" h="524px" title="Front-end"/>
            </div>

                <span className="CourseItem__inner_p">
                    <h2>{filta.map(item=>item.name)}</h2>
                                    <p> 
                                        Mae your brand stand out with pixel perfect design crafted to perfectiostand out with pixel perfect design crafted to perfection Mae your brand stand out with pixel perfect design crafted to per Mae your brand stand out with pixel perfect design crafted to perfection.
                                    </p>
                </span>

                <div className="CourseItem__inner_accordion">
                          {data.length?accordionData.length?innerAccord.map((item)=>{
                            return(
                                 <Accordion allowZeroExpanded className='accordion'>
                                <AccordionItem className='accordion_item'>
                                    <AccordionItemHeading className='accordion_heading'>
                                        <AccordionItemButton className='accordion_button'>
                                            <span className='accordion_button_span'><h3>{item.name}</h3>  <span className='course_icon'><BsFillArrowDownSquareFill /></span></span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className='accordion_panel'>
                                        <ul className='accordion_ul'>
                                            <li className='accordion_li'> <span>🎥</span><span><NavLink to={`${item.link}`}>{item.name}</NavLink></span></li>
                                            <li className='accordion_li'> <span>🔖</span><span>Traversy media</span></li>
                                            <li className='accordion_li'> <span>📚</span><span>Traversy media</span></li>
                                        </ul>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                            )
                          }):null:<Skeleton variant="rounded" animation={"wave"} width={`${"100%"}`} height={400} />}
                </div>
        </div>

    </div>
  )
}

export default CourseItem;