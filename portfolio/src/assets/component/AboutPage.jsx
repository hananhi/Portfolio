import React from "react"
import './aboutpage.css'
export default function AboutPage(props) {
  return (
    <div id='about' >
     <div className="about-container">
      <img src={props.src} alt={props.title} style={props.style} className="about-image" />
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          At Hanan Company, we are dedicated to transforming businesses through the creation of exceptional digital
           customer experiences. With a focus on innovation and cutting-edge technology, we strive to revolutionize 
           how businesses engage with their customers in the digital realm. Our team of experts is committed to crafting
            immersive and user-friendly solutions that enhance customer satisfaction and drive business success. Whether
             it's developing intuitive websites, mobile applications, or implementing advanced digital strategies, we are 
             here to elevate your online presence and help you achieve lasting success in the digital landscape.
        </p>
      </div>
    </div>

    </div>
  )
}
