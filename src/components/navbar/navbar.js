import React from "react";
import './navbar.scss';
//import Logo from "../UI/Logo/Logo";
import Navigations from "../Navigations/Navigations";
//import DrawToggle from "../UI/DrawToggle/DrawToggle";
import { NavLink } from "react-router-dom";

import {TiThMenu} from 'react-icons/ti';




export default function Navbar(props){
    return(
        <div className="navbar">
            <div className="navbar__left">
                <div>
                    <span><TiThMenu onClick={props.clickedToggle}/></span>
                    <span className="navbar__menu" clicked={props.clickedToggle}> menu</span>
                </div>

                <nav className="DesktopOnly">
                    <Navigations/>
                </nav>

            </div>
           
            <div className="navbar__right">
                <div><h3>+234-567-67</h3></div>
                
                <div className="navbar__buttons">
                    <button><NavLink to='/signUp' style={({isActive})=>{ return {color: isActive ? 'yellow':'#FFFFFF'}}}>Sign Up</NavLink></button>
                    <button><NavLink to='/login' style={({isActive})=>{ return {color: isActive ? 'yellow':'#FFFFFF'}}}>Log in</NavLink></button>
                </div>
                
            </div>
        </div>
    )
};