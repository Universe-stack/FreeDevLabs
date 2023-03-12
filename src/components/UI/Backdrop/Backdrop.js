import React from "react";
import './Backdrop.scss';

const Backdrop=(props)=>(
    props.show?<div className="backdrop" onClick={props.clickedBackdrop}></div>:null
)

export default Backdrop;