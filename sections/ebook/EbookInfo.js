import React, { useEffect } from 'react';
import { Elipze, ArrowDown, EbookImg } from '../../svg/Svg';
import GetEbook from './GetEbook';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function EbookInfo() {
  useEffect(() => {
    ScrollTrigger.batch('.ebook__text h2 span', {
      start: 'top +645px',
      onEnter: (batch) =>
        gsap.to(batch, {
          scrollTrigger: {
            trigger: '.ebook__text h2 span',
          },
          x: '-100%',
          duration: 1,
          overwrite: true,
        }),
      onLeave: (batch) =>
        gsap.to(batch, {
          x: '0%',
          duration: 1,
          overwrite: true,
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          x: '-100%',
          duration: 1,
          overwrite: true,
        }),
      onLeaveBack: (batch) =>
        gsap.to(batch, {
          x: '0%',
          duration: 1,
          overwrite: true,
        }),
    });
  }, []);
  return (
    <div className='ebookInfo__container'>
      <div className='logo'>
        <Link href='/'>
          <img src='./logo.png' alt='logo' />
        </Link>
      </div>
      <div className='ebookInfo__wrapper'>
        <div className='ebookInfo__box'>
          <h1>
            E-BOOK <Elipze />
          </h1>
          <div className='arrov_dovn'>
            <ArrowDown />
          </div>
        </div>

        <div className='ebook__manage'>
          <div className='ebook__image'>
            {/* <img src='./ebook.png' alt='Ebook image' /> */}
            <EbookImg />
          </div>
          <div className='ebook__text'>
            <h2><span className='mark__black'></span>Content Marketing i Social Media</h2>
            <p>
              {' '}
              Zbiór najlepszych zasad dotyczących tworzenia contentu
              marketingowego, social media i sposobów na zdobycie większej
              ilości klientów.
            </p>
            <br />
            <p>
              Twórca E-booka Pan Michał Moneta od lat zajmuje się zagadnieniamy
              dotyczącymi marketingu. Jest to jego kolejna publikacja w której
              znajdą Państwo dużo wartościowych wskazówek i informacji.{' '}
            </p>

            <GetEbook />
          </div>
        </div>
      </div>
      <img src='./tlooo.png' className='ebookInfo__tlo' />
    </div>
  );
}

export default EbookInfo;
