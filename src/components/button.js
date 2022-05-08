import React from "react";
import Style from "./button.module.css"
import Img from "../assets/emailIcon.png"
export default function button(){
    return(
        <div className = {Style.button}>
            <img src={Img} alt="" />
            <p>Email</p>
        </div>
    )
}