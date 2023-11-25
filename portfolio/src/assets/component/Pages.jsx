import React from 'react';
import IntroPage from "./IntroPage"
import Navbar from "./Navbar"
import AboutPage from "./AboutPage"
import NewsPage from './NewsPage';
import ContactPage from './ContactPage';
import Card from './Card';
import Footer from './Footer';



export default function Pages(props) {

   let background_img='https://cutewallpaper.org/21/professional-website-background/Best-49-People-Web-Backgrounds-on-HipWallpaper-Stupid-.jpg'
let ButtonText='Read more'
   const style={
    
        height:' 770px',
        width: '1408px'

        
   }
 
  return (

    <div>
    <header>
      <Navbar />
    </header>
  
    <main>
      <IntroPage id="home" src={background_img} style={style} />
      <AboutPage id="about"src={'https://cdn.wallpapersafari.com/60/84/yhk1gA.jpg'} style={style} />

      <NewsPage id="news" src={'https://media.datacenterdynamics.com/media/images/vertiv-lithium-ion-battery-recycl.2e16d0ba.fill-1200x630.jpg'} style={style}>
        <Card title='Project Managment' description='description:how to manage efectivly your big projects' buttontext={ButtonText} />
        <Card title='Employee Development' description='description:how to manage efectivly your big projects' buttontext={ButtonText}/>
        <Card title='Customer Experience' description='description:how to manage efectivly your big projects' buttontext={ButtonText}/>
      </NewsPage>
  
      <ContactPage id="contact" src={'https://www.godmanchestercommunityassociation.co.uk/wp-content/uploads/2019/08/Contact-us-2-2000x1000.jpg'} style={style} />
    </main>
    <Footer/>
  </div>
  )
}
