import React from "react";
import Style from "./main.module.css"
export default function mainBody(){
    return(
        <div className={Style.mainSection}>
            <p className={Style.p1}>About</p>
            <p className={Style.p2}>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <p className={Style.p1}>Interests</p>
            <p className={Style.p2}>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    )
}