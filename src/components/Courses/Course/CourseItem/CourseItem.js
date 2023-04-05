import React from 'react'
import {YouTube}  from "../../../index";
import {BsFillArrowDownSquareFill} from "react-icons/bs";

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
  return (
    <div className='CourseItem'>
        <div className='CourseItem__inner'>
            <div className="CourseItem__inner_YT">
                <YouTube w="932px" h="524px" title="Front-end"/>
            </div>

                <span className="CourseItem__inner_p">
                    <h2>TYPE WEB DEVELOPMENT</h2>
                                    <p> 
                                        Mae your brand stand out with pixel perfect design crafted to perfectiostand out with pixel perfect design crafted to perfection Mae your brand stand out with pixel perfect design crafted to per Mae your brand stand out with pixel perfect design crafted to perfection.
                                    </p>
                </span>

                <div className="CourseItem__inner_accordion">
                            <Accordion allowZeroExpanded className='accordion'>
                                <AccordionItem className='accordion_item'>
                                    <AccordionItemHeading className='accordion_heading'>
                                        <AccordionItemButton className='accordion_button'>
                                            <span className='accordion_button_span'><h3>HTML</h3>  <span className='course_icon'><BsFillArrowDownSquareFill /></span></span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className='accordion_panel'>
                                        <ul className='accordion_ul'>
                                            <li className='accordion_li'> <span>Icon</span><span>Traversy media</span></li>
                                            <li className='accordion_li'> <span>Icon</span><span>Traversy media</span></li>
                                            <li className='accordion_li'> <span>Icon</span><span>Traversy media</span></li>
                                        </ul>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                <AccordionItem className='accordion_item'>
                                    <AccordionItemHeading className='accordion_heading'>
                                        <AccordionItemButton className='accordion_button'>
                                        <span className='accordion_button_span'><h3>CSS</h3>  <span className='course_icon'><BsFillArrowDownSquareFill /></span></span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel className='accordion_panel'>
                                        <p className='accordion_panel_p'>
                                            In ad velit in ex nostrud dolore cupidatat consectetur
                                            ea in ut nostrud velit in irure cillum tempor laboris
                                            sed adipisicing eu esse duis nulla non.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                </div>
        </div>

    </div>
  )
}

export default CourseItem;