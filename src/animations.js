import gsap from "gsap";
import Typed from 'typed.js';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const landingAnimation = () => {
    
    gsap.set('.nav-btn', {
        opacity: 0,
        y: 30,
    });

    gsap.set('.hamburger-btn', {
        opacity: 0,
        y: 30,
    });

    gsap.set('.name', {
        opacity: 0,
        clipPath: 'inset(0 0 100% 0)',
    });

    gsap.to('.nav-btn', {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.5,
    });

    gsap.to('.hamburger-btn', {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        delay: 0.8,
    });

    gsap.fromTo('.name',
    { 
        opacity: 0,
        y: -40,
        clipPath: 'inset(0 0 100% 0)'
    },
    { 
        duration: 2,
        opacity: 1,
        y: 0,
        clipPath: 'inset(0 0 0% 0)',
        ease: "elastic.out(1,0.4)",
        delay: 1.5
    }
    );

    gsap.set('.landing img', {
        opacity: 0,
        y: 20
    });

    gsap.to('.landing img', {
        duration: 2,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
    });

    gsap.set('.landing-text', {
        opacity: 0
    });
    
    gsap.set('.landing-btns button', {
        opacity: 0
    });

  gsap.to('.landing-text', {
    duration: 1,
    opacity: 1,
    onComplete: () => {
      new Typed('.landing-text h4', {
        strings: ["Hey I'm"],
        typeSpeed: 20,
        showCursor: false
      });
      
      new Typed('.landing-text h2', {
        strings: ["Ahmed Mohamed"],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 700
      });

      new Typed('.landing-text h3', {
        strings: ["Frontend Developer"],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 1700
      });
    }
  });

  gsap.to('.landing-btns button', {
    duration: 2,
    y:10,
    opacity: 1,
    stagger: 0.5,
    delay: 4.5, 
    ease: "power1.out"
  });
};

export const aboutAnimation = () => {
  gsap.set('.about-text h1, .about-text h2', {
    opacity: 0,
    x: -100
  });

  gsap.set('.about-boxes .box', {
    opacity: 0,
    y: 50
  });

  gsap.to('.about-text h1, .about-text h2', {
    scrollTrigger: {
      trigger: '.about-text',
      start: 'top 80%',
      end: 'top 20%'
    },
    duration: 3,
    opacity: 1,
    x: 0,
    stagger: 0.3,
    ease: 'power2.out'
  });

  gsap.to('.about-boxes .box', {
    scrollTrigger: {
      trigger: '.about-boxes',
      start: 'top 80%',
      end: 'top 20%'
    },
    delay:1,
    duration: 2,
    opacity: 1,
    y: 0,
    stagger: 0.5,
    ease: 'power2.out'
  });
};

export const experienceAnimation=()=>{
    gsap.set('.experience h5, .experience h1, .experience h3',{
        opacity:0,
        y:-10
    })

    gsap.to('.experience h5, .experience h1, .experience h3',{
        scrollTrigger:{
            trigger:'.experience',
            start:'top 80%',
            end:"top 20%"
        },
        duration:1,
        y:0,
        stagger:0.3,
        opacity:1,
        ease:"power2.out"
    })
}

export const projectsAnimation=()=>{
    gsap.set('.project-header, .project-box',{
        opacity:0,
        x:-40
    })

    gsap.to('.project-header, .project-box', {
        scrollTrigger:{
            trigger:".projects",
            start:"top 80%",
            end:"top 20%"
        },
        duration:1,
        x:0,
        opacity:1,
        stagger:0.3,
        ease:"power2.out"
    })
}

export const contactsAnimation=()=>{
    gsap.set('.contacts-header h5, .contacts-header h1, .contacts',{
        y:20,
        opacity:0
    })

    gsap.to('.contacts-header h5, .contacts-header h1, .contacts',{
        scrollTrigger:{
            trigger:".contacts",
            start:"top 80%",
            end:"top 20%"
        },
        duration:1,
        y:0,
        opacity:1,
        stagger:0.5,
        ease:"power2.out"
    })
}