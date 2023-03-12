import React from "react";
import "./Bodybuilder.scss";

import {Home,Patners,Listpage,Courses, Showcase, Faq} from "../index";

export default function Bodybuilder(){
    return(
        <div className="bodybuilder">
            <Home />

            <Patners />

            <Listpage />

            <Courses />

            <Showcase />

            <Faq />
            
        </div>
    )
}