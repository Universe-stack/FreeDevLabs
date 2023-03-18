import React,{useState} from "react";
import './Faq.scss';
import {images} from "../../constants";



const Faq=()=>{

    const [ptoggle,setPtoggle] = useState(false);
    const [ptoggle2,setPtoggle2] = useState(false);
    const [ptoggle3,setPtoggle3] = useState(false);

    let attachedClasses='close';
    let attachedClasses2='close';
    let attachedClasses3='close';


    
    if(ptoggle){
        attachedClasses='open';
    }else{
        attachedClasses='close';
    }

    if(ptoggle2){
        attachedClasses2='open';
    }else{
        attachedClasses2='close';
    }

    if(ptoggle3){
        attachedClasses3='open';
    }else{
        attachedClasses3='close';
    }

    return(
        <div className="Faq">

            <span>
                <h2>Frequently Asked Questions</h2>
                <small>If you have any further questions, please contact us</small>
                <img src={images.triangleP} alt="" />
            </span>
            <section className="Faq__inner">

                <div className="Faq__inner_1">
                    <div className="Faq__div">
                        <span>
                            <h3> Will I get lifetime Updates?</h3>
                            <small id ="first" onClick={()=>setPtoggle(prev => prev = !prev)}>{ptoggle?<small>close</small>:<small>open</small>}</small>
                        </span>
                        <div className={attachedClasses}>
                            <p>Landify is a landing page UI kit for figma, it is not a avenur fni the ksn jejs</p>
                        </div>
                        
                    </div>

                    <div className="Faq__div">
                            <span>
                                <h3> Will I get lifetime Updates?</h3>
                                <small small id ="second" onClick={()=>setPtoggle2(prev => prev = !prev)} >{ptoggle?<small>close</small>:<small>open</small>}</small>
                            </span>
                            <div className={attachedClasses2}>
                                <p>Landify is a landing page UI kit for figma, it is not a avenur fni the ksn jejs</p>
                            </div>
                    </div>
                </div>
              
                <div className="Faq__inner_2">
                    <div className="Faq__div">
                        <span>
                            <h3> Will I get lifetime Updates?</h3>
                            <small onClick={()=>setPtoggle3(prev => prev = !prev)}>Togg</small>
                        </span>
                        <div className={attachedClasses3}>
                            <p>Landify is a landing page UI kit for figma, it is not a avenur fni the ksn jejs</p>
                        </div>
                    </div>

                    <div className="Faq__div">
                        <span>
                            <h3> Will I get lifetime Updates?</h3>
                            <small onClick={()=>setPtoggle3(prev => prev = !prev)}>{ptoggle?<small>close</small>:<small>open</small>}</small>
                        </span>
                        <div className={attachedClasses3}>
                            <p>Landify is a landing page UI kit for figma, it is not a avenur fni the ksn jejs</p>
                        </div>
                    </div>
                </div>
               
            </section>
            
        </div>
    )
}

export default Faq;