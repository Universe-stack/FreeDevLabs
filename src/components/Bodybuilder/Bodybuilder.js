import React from "react";
import "./Bodybuilder.scss";

import {Home,Patners,Listpage,Courses, Showcase, Faq, Banner} from "../index";

export default function Bodybuilder(){
    return(
        <div className="bodybuilder">
            <Home />

            <Patners />

            <Listpage />

            <Courses />

            <Showcase />

            <Faq />

            <Banner />
            
        </div>
    )
}