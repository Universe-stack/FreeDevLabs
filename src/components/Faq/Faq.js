import React,{useState} from "react";
import './Faq.scss';
import {images} from "../../constants";



const Faq=()=>{

    const [ptoggle,setPtoggle] = useState(false);
    const [ptoggle2,setPtoggle2] = useState(false);
    const [ptoggle3,setPtoggle3] = useState(false);

    let attachedClasses='Close';

    if(ptoggle){
        attachedClasses='Open'
    }else if(ptoggle2){
        attachedClasses='Open'
    }else if(ptoggle3){
        attachedClasses='Open'
    }

    return(
        <div className="Faq">

            <section className="Faq__inner">
               <div className="Faq__div">
                    <span>
                        <h3> Will I get lifetime Updates?</h3>
                        <small id ="first" onClick={()=>setPtoggle(prev => prev = !ptoggle)}>Togg</small>
                    </span>
                    <p className={attachedClasses}>Landify is a landing page UI kit for figma, it is not a avenur fni the ksn jejs</p>
               </div>

               <div className="Faq__div">
                    <span>
                        <h3> Will I get lifetime Updates?</h3>
                        <small small id ="second" onClick={()=>setPtoggle2(prev => prev = !ptoggle)} >Togg</small>
                    </span>
                    <p className={attachedClasses}>Landify is a landing page UI kit for figma, it is not a avenur fni the ksn jejs</p>
               </div>

               <div className="Faq__div">
                    <span>
                        <h3> Will I get lifetime Updates?</h3>
                        <small onClick={()=>setPtoggle3(prev => prev = !ptoggle)}>Togg</small>
                    </span>
                    <p >Landify is a landing page UI kit for figma, it is not a avenur fni the ksn jejs</p>
               </div>
            </section>
            
        </div>
    )
}

export default Faq;