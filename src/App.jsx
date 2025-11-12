import { useEffect, useState} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import myImage from './assets/ana5.JPG';
import './index.css';
import {projects} from './projects.js'
import phone from './assets/icons8-phone-50.png';
import gmail from './assets/icons8-gmail-50.png';
import linkedin from './assets/icons8-linkedin-50.png';
import { aboutAnimation, contactsAnimation, experienceAnimation, landingAnimation, projectsAnimation } from './animations.js';

function App() {
  useEffect(()=>{
    landingAnimation()
    aboutAnimation()
    experienceAnimation()
    projectsAnimation()
    contactsAnimation()
  },[])

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = ['About', 'Experience', 'Projects', 'Contact'];

  const handleNavClick = (section) => {
    closeMenu();
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
     <div className='navbar'>
        <h1 className='name'>Ahmed Mohamed</h1>
        
        {/* Desktop Nav */}
        <div className='nav-btns'>
          {navItems.map((item) => (
            <button key={item} className='nav-btn' onClick={() => handleNavClick(item)}>
              {item}
            </button>
          ))}
        </div>

        {/* Hamburger Button */}
        <button className='hamburger-btn' onClick={toggleMenu}>
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className='menu-overlay' onClick={closeMenu} />
      )}

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <button className='close-btn' onClick={closeMenu}>
          <IoCloseOutline size={28} />
        </button>
        <div className='mobile-nav-btns'>
          {navItems.map((item) => (
            <button
              key={item}
              className='mobile-nav-btn'
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className='landing'>
        <img src={myImage} alt="myImg"/>
        <div className='landing-text'>
          <h4></h4>
          <h2></h2>
          <h3></h3>
          <div className='landing-btns'>
            <a href="https://www.canva.com/design/DAGckqyCA6o/xmQa6cMxBqsMl9Cwt_63gA/view?utm_content=DAGckqyCA6o&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb75c29a776">
            <button>My CV</button></a>
            <button onClick={() => handleNavClick('Contact')}>Contact Info</button>
          </div>
        </div>
      </div>

      <div className='about' id='about'>
         <div className='about-text'>
            <h1>About Me</h1>
            <h2>
                A fresh website developer with over 2 years of experince as a frontend developer with great knowledge of data structures and algorithms, passionate about
                creating responsive and user-friendly web applications.
            </h2>
         </div>
        <div className='about-boxes'>
          <div className='box'>
            <h3>Experience</h3>
            <h4>2+ Years</h4>
            <h4>Frontend Development</h4>
          </div>
          <div className='box'>
            <h3>Education</h3>
            <h4>CS50 Harvard's introduction course for CS</h4>
            <h4>Udemy Academy React front to back course</h4>
            <h4>Free code camp.org React Full Course</h4>
          </div>
        </div>
      </div>

      <div className='experience' id='experience'>
        <h5>Explore My</h5>
        <h1>Experience</h1>
        <div className="experience-box">
          <div className='skill'>
            <h3>HTML</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>CSS</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>JavaScript</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>React</h3>
            <h5>Experienced</h5>
          </div>
          <div className='skill'>
            <h3>TailWind</h3>
            <h5>Intermediate</h5>
          </div>
          <div className='skill'>
            <h3>Node JS</h3>
            <h5>Basic</h5>
          </div>
          <div className='skill'>
            <h3>Express Js</h3>
            <h5>Basic</h5>
          </div>
          <div className='skill'>
            <h3>API Integration</h3>
            <h5>Intermediate</h5>
          </div>
        </div>
      </div>


      <h1 className='project-header' id='projects'>My Latest Projects</h1>
      <div className='projects'>
        {projects.map((project)=>(
          <div className='project-box'>
            <img src={project.icon} alt="icon" />
            <h2>{project.title}</h2>
            <h4>{project.description}</h4>
            <a href={project.link}>
              <button className='visit-btn'>Visit</button>
            </a>
          </div>
        ))}
      </div>

      <div className='contacts' id='contact'>
        <div className='contacts-header'>
          <h5>Get In Touch</h5>
          <h1>Contact Me</h1>
        </div>
        <div className='contacts-wrapper'>
          <div className='contact'>
            <img src={gmail} alt="gmail" />
            <h4>ahmed8eith@gmail.com</h4>
          </div>
          <div className='contact'>
            <img src={phone} alt='phone' />
            <h4>+201030240751</h4>
          </div>
          <div className='contact'>
            <img className='linkedin-img' src={linkedin} alt='linkedin' />
             <a href="https://www.linkedin.com/in/ahmed-mohamed-885496348/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3WN6NMffSZqMumpriqMykQ%3D%3D">
              <button className='linkedin-btn'>LinkedIn</button>
            </a>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;