import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import myImage from './assets/ana5.JPG';
import './index.css';
import {projects} from './projects.js'
import phone from './assets/icons8-phone-50.png';
import maps from './assets/icons8-place-marker-48.png';
import gmail from './assets/icons8-gmail-50.png';
import linkedin from './assets/icons8-linkedin-50.png';


function App() {
  const [hamburgerVisibility, setHamburgerVisibility] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setHamburgerVisibility(true);
      } else {
        setHamburgerVisibility(false);
        setMenuOpen(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (sectionName) => {
    const sectionMap = {
      'About': 'about',
      'Experience': 'experience',
      'Projects': 'project-header',
      'Contact': 'contacts'
    };

    const elementId = sectionMap[sectionName];
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Close menu if it's open
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <div className='navbar'>
        <h2 className='name'>Ahmed Mohamed</h2>

        {hamburgerVisibility ? (
          <div className='hamburger-menu'>
            {menuOpen ? (
              <IoCloseOutline
              className='close-btn'
                size={30}
                onClick={() => setMenuOpen(!menuOpen)}
              />
            ) : (
              <GiHamburgerMenu
                className='hamburger'
                size={20}
                onClick={() => setMenuOpen(!menuOpen)}
              />
            )}
          </div>
        ) : (
          <div className='nav-btns'>
            <button className='nav-btn' onClick={() => handleNavClick('About')}>About</button>
            <button className='nav-btn' onClick={() => handleNavClick('Experience')}>Experience</button>
            <button className='nav-btn' onClick={() => handleNavClick('Projects')}>Projects</button>
            <button className='nav-btn' onClick={() => handleNavClick('Contact')}>Contact</button>
          </div>
        )}
      </div>

      {/* Slide-in menu panel */}
      {hamburgerVisibility && (
        <>
          {menuOpen && (
            <div 
              className='menu-overlay' 
              onClick={() => setMenuOpen(false)}
            />
          )}
          <div className={`hamburger-panel ${menuOpen ? 'open' : ''}`}>
            <div className='hamburger-btns'>
              <button className='nav-btn hamburger-btn' onClick={() => handleNavClick('About')}>About</button>
              <button className='nav-btn hamburger-btn' onClick={() => handleNavClick('Experience')}>Experience</button>
              <button className='nav-btn hamburger-btn' onClick={() => handleNavClick('Projects')}>Projects</button>
              <button className='nav-btn hamburger-btn' onClick={() => handleNavClick('Contact')}>Contact</button>
            </div>
          </div>
        </>
      )}

      <div className='landing'>
        <img src={myImage} alt="myImg"/>
        <div className='landing-text'>
          <h4>Hey I'm</h4>
          <h2>Ahmed Mohamed</h2>
          <h3>Frontend Developer</h3>
          <div className='landing-btns'>
            <button>Download CV</button>
            <button>Contact Info</button>
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


      <h1 className='project-header' id='project-header'>My Latest Projects</h1>
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

      <div className="contacts" id='contacts'>
        <h5>Get In Touch</h5>
        <h1>Contact Me</h1>
        <div className="contact-box">
          <div className='contact'>
            <img src={gmail} alt="gmail" />
            <h3>ahmed8eith@gmail.com</h3>
          </div>
           <div className='contact'>
            <img src={linkedin} alt="linkedin" />
            <a href="https://www.linkedin.com/in/ahmed-mohamed-885496348/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BW4SVBPcDTB2IrRoQOLTJvQ%3D%3D">
            <button className="linked-btn"><h3>LinkedIn</h3></button>
            </a>
          </div>
          <div className='contact'>
            <img src={phone} alt="phone" />
            <h3>+201030240751</h3>
          </div>
          <div className='contact'>
            <img src={maps} alt="maps" />
            <h3>Cairo, Egypt</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;