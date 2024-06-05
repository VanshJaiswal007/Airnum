import React from "react";
import myimg from "./assets/airbnb.png"
import "./App.css"
export default function Nav(){
    return(
        <>
        <div className="navbar">
        <img src={myimg} width='80px'/>
        </div>
        </>
    )
}