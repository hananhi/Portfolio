import React from 'react'

export default function ContactPage(props) {
  return (
    <div id='contact'>
   <img src={props.src} alt={props.title} style={props.style} className='introimg'></img>
    </div>
  )
}
