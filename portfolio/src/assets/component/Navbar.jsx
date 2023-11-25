import './navbar.css'


export default function Navbar() {
  const handleClick = (elementId) => {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>
        <ul>
  <li><a onClick={() => handleClick('home')} href="#home">Home</a></li>
  <li><a onClick={() => handleClick('about')} href="#about">About</a></li>
  <li><a onClick={() => handleClick('news')}href="#news">News</a></li>
  <li><a onClick={() => handleClick('contact')} href="#contact">Contact</a></li>
  
</ul>
    </div>
  )
}
