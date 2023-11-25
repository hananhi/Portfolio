import React from "react"
import './intropage.css'
export default function IntroPage(props) {
  return (
    <div id="home">
   <img src={props.src} alt={props.title} style={props.style}>
   </img>
   <div id="intro">
   <h1>Welcome to Hanan Website</h1>
   <h3>We transform busniess by creating digital customer experiance</h3>
   <button className="ReadM">Read More</button>
   </div>
   

   </div>
  )
}
