import React from "react";
import './Sidebar.scss';
//import Bux from "../../Containers/hoc/Bux/Bux";
//import Logo from "../UI/Logo/Logo";
import Navigations from "../Navigations/Navigations";
import BackDrop from "../UI/Backdrop/Backdrop";

const sideBar =(props)=>{

    let attachedClasses=['SideBar','Close'].join(' ');
    
    if(props.showBackdrop){
        attachedClasses=['SideBar','Open'].join(' ');
    }
    
    return(
        <>
            <BackDrop show={props.showBackdrop} clickedBackdrop={props.backdropClicked}/>
            <div className={attachedClasses}>
                <div className="Logo">
                    <div>LOGO</div>
                </div>

                <Navigations/>
            </div>
        </>
        
    )
}

export default sideBar;