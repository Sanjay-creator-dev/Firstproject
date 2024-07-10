"use client"
import React, {useState, useRef, useEffect} from 'react'
import Link from 'next/link';
import "./menu.css";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const menuLinks =[
  { path: "/", label: "Home"},
  { path: "/Work", label: "work"},
  { path: "/About", label: "About"},
  { path: "/Contact", label: "Contact"},
  { path: "/Overview", label: "Overview"},
];

const page = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    gsap.set(".menu-link-item-holder", {y: 75});

    tl.current = gsap.timeline({ paused: true})
    .to(".menu-overlay",{
      duration: 1.25,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
    })
    .to(".menu-link-item-holder",{
      y:0,
      duration:1,
      stagger:0.1,
      ease: "power4.inOut",
      delay: -0.75
    })
  }, { scope: container});

  useEffect(() => {
    if(isMenuOpen){
      tl.current.play();
    }else{
      tl.current.reverse();
    }
  })
  return (
   <>
   <div className='menu-container' ref={container}>
     <div className='menu-bar'>
      <div className='menu-logo'>
        <Link href="/">Website</Link>
      </div>
      <div className='menu-open' onClick={toggleMenu}>
        <p>Menu</p>
      </div>
     </div>
     <div className='menu-overlay'>
      <div className='menu-overlay-bar'>
        <div className='menu-logo'>
        <Link href="/">Website</Link>
        </div>
       
      </div>
      
      <div className='menu-copy'>
        <div className='menu-links'>
          {menuLinks.map((link, index) => (
            <div className='menu-link-item' key={index}>
              <div className='menu-link-item-holder' onClick={toggleMenu}>
                <Link href={link.path} className='menu-link'>
                {link.label}</Link>
              </div>
            </div>
          ))}
        </div>
        
       </div>
       <div className='menu-close' onClick={toggleMenu}>
          <p>Close</p>
        </div>
      </div>
   </div>
   </>
  )
};

export default page
