import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <p>Hanan Himoni</p> <span> <CiLinkedin  style={{fontSize: '50px'}}/> 
        <FaFacebook style= {{fontSize: '50px'}} /></span>
    </div>
  )
}
