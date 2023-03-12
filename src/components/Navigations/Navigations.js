import React from "react";
import './Navigations.scss';
import {NavLink} from 'react-router-dom';
//import {motion} from "framer-motion";


const Navigations=(props)=>(
    <div className="navigations">
        <ul>
            <li><h3 className="Navigation__a"><NavLink to={props.Link} className={({isActive})=>isActive?"Navigation__active":"Navigation__normal"}>Home</NavLink></h3></li>
            <li><h3 className="Navigation__a"><NavLink to={props.Link} className={({isActive})=>isActive?"Navigation__active":"Navigation__normal"}>Community</NavLink></h3></li>
            <li><h3 className="Navigation__a"><NavLink to={props.Link} className={({isActive})=>isActive?"Navigation__active":"Navigation__normal"}>How Tos</NavLink></h3></li>
            <li><h3 className="Navigation__a"><NavLink to={props.Link} className={({isActive})=>isActive?"Navigation__active":"Navigation__normal"}>Blog</NavLink></h3></li>
        </ul>
        
    </div>
)

export default Navigations;