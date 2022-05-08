import React from "react";
import Style from "./App.module.css"
import Header from "./components/Header"
import Button from "./components/button.js"
import MainBody from "./components/mainBody.js"
import Footer from "./components/footer.js"
export default function app(){
  return(
    <div className={Style.container}>
      <Header/>
      <Button/>
      <MainBody/>
      <Footer/>
    </div>
  )
}