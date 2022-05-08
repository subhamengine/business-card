import React from "react";
import Style from "./footer.module.css"
import Ig from "../assets/InstagramIcon.png"
import Twt from "../assets/Twitter Icon.png"
import Fb from "../assets/Facebook Icon.png"
import Ln from "../assets/LinkedinIcon.png"
import Gt from "../assets/GitHub Icon.png"
export default function footer(){
    return(
        <div className={Style.mainFooter}>
            <div className={Style.footer}>
                <img src={Twt} alt="" />
                <img src={Fb} alt="" />
                <img src={Ig} alt="" />
                <img src={Ln} alt="" />
                <img src={Gt} alt="" />
            </div>
        </div>
        
    )
}