import React from "react";
import ProfileImg from "../assets/Profile.png"
import Style from "./header.module.css"
export default function Header(){
    return(
        <header className={Style.header}> 
            <img className={Style.profile} src={ProfileImg} alt="" />
            <h2>Laura Smith</h2>
            <h5>Frontend Developer</h5>
            <a href="laurasmith.website">laurasmith.website</a>

        </header>
    )
}