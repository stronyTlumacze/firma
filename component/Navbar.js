import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import LanguageSwitcher from './LanguageSwitcher'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline();

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      timeline
        .to('.menu', {
          y: 0,
          opacity: 1,
          delay: .5,
        });
    }, 1500);
  }, []);

  return (
    <nav>
      <div className={`menu ${open ? 'active' : ''}`}>
        <span className='toggle' onClick={() => setOpen(!open)}>
          <i></i>
          <i></i>
          <i></i>
        </span>
        {/* big menu */}
        <div className='menuContent'>
          <ul>
            <li onClick={() => setOpen(!open)}>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link href='/steps'>61 Krokow</Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link href='/structure'>Struktura</Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link href='/ebook'>E-book</Link>
            </li>
          </ul>
        </div>
        {/* small menu */}
        <div className='s-menuContent'>
          <ul>
            <li onClick={() => setOpen(!open)}>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link href='/steps'>61 Krokow</Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link href='/structure'>Struktura</Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <Link href='/ebook'>Ebook</Link>
            </li>
          </ul>
          <img src='favicon.ico' alt='logo' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
