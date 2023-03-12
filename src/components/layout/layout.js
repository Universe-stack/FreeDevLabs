import React from "react";
import './layout.scss';

import Navbar from "../navbar/navbar" ;
import Footer from "../Footer/Footer";
import SideBar from "../Sidebar/Sidebar";


export default function Layout(props){
    
    const [showSideDraw, setshowSideDraw]= React.useState(false);

    function setSideDrawHandler(){
        setshowSideDraw(prevState=>prevState=false)
    }

    function sideDrawShow(){
        setshowSideDraw(prevState=>prevState=true)
    }       


    return(
        <>
            <Navbar clickedToggle={sideDrawShow}/>
            <SideBar showBackdrop={showSideDraw} backdropClicked={setSideDrawHandler}/>
            <main className="Content">
                {props.children}
            </main>
            <Footer/>
        </>

    )
};