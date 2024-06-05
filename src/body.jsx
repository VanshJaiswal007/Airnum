import React from "react";
import "./App.css"
import myimg from "./assets/Group 77.png"
import swimmer from "./assets/image 12.png"
import wedding from "./assets/wedding.png"
import mountain from "./assets/mountain.png"
import star from "./assets/star.png"
export default function MainBody(){
    return(
        <>
        <div className="container">
            <img className="mainimg" src={myimg}/>
        </div>
        <div><h1 className="header">Online Experiences</h1></div>
        <div className="headertext">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</div>
        <div className="boxcontainer">
          <div className="box1">
               <img src={swimmer} alt="swimmer " className="imgi1"/>
               <img src={star} alt="star" className="star1"/>5.0<font color="grey">(6) USA</font>
               <div className="box1-text1">life lesson with katie zaferes </div>
               <div className="box1-text2">from $136/ person</div>
               <div className="prop1">Sold Out</div>
          </div>
          <div className="box2">
               <img src={wedding} alt="wedding" className="imgi2"/>
               <img src={star} alt="star" className="star2"/>5.0<font color="grey">(30) USA</font>
               <div className="box2-text1">Learn wedding photography </div>
               <div className="box2-text2">from $125/ person</div>
               <div className="prop2">Online</div>
          </div>
          <div className="box3">
               <img src={mountain} alt="mountain" className="imgi3"/>
               <img src={star} alt="star" className="star3"/>4.8<font color="grey">(2) USA</font>
               <div className="box3-text1">Group Mountain Biking </div>
               <div className="box3-text2">from $50/ person</div>
          </div>
        </div>
        </>
    )
}