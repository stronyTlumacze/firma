import React, { useState, useEffect } from 'react';
// import ReactPlayer from 'react-player';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline();

function GeneralInfo() {
  // const [w, ww] = useState(0);
  // const [playMe, setPlayMe] = useState(false);

  // useEffect(() => {
  //   ww(window.innerWidth);
  // }, []);

  // const playVideo = () => {
  //   setPlayMe(true)
  //   document.querySelector('.button__container').style.display = 'none'
  //   }

  useEffect(() => {
    // ScrollTrigger.matchMedia({
    //   '(min-width: 765px)': function () {
    // gsap.to('.g-main__two .mark__black', {
    //   scrollTrigger: {
    //     trigger: '.g-main__two .mark__black',
    //     markers: true,
    //     start: 'top +650px',
    //   },
    //   x: '-100%',
    //   duration: 0.2,
    // });
    //   },
    // });

     ScrollTrigger.batch('.g-main__two .mark__black', {
      start: 'top +645px',
      onEnter: (batch) =>
        gsap.to(batch, {
          scrollTrigger: {
            trigger: '.g-main__two .mark__black',
          },
          x: '-100%',
          duration: 1,
          overwrite: true,
          // ease: 'Power2.easeOut'
        }),
      onLeave: (batch) =>
        gsap.to(batch, {
          x: '0%',
          duration: 1,
          overwrite: true,
          // ease: 'Power2.easeOut'
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          x: '-100%',
          duration: 1,
          overwrite: true,
          // ease: 'Power2.easeOut'
        }),
      onLeaveBack: (batch) =>
        gsap.to(batch, {
          x: '0%',
          duration: 1,
          overwrite: true,
          // ease: 'Power2.easeOut'
        }),
    });
  }, []);

  return (
    <div className='generalInfo__container'>
      <div className='generalInfo__wrapper'>
        <div className='generalInfo__box'>
          <h2 className='main__two g-main__two'>
            <span className='mark__black'></span>PROBLEM JAKI ROZWIAZUJEMY
          </h2>
          <p>
            Dzieki 3 letniej obserwacji poprawnego budowania stron, a takze tego
            jak nie powinny byc one twrzone,{' '}
            <span style={{ fontWeight: '700' }}>udalo</span> nam sie stworzyc
            idealne rozwiazanie na Panstwa potrzeby.
          </p>
          <p>
            Struktura strony internetowej, ktora nazwalismy{' '}
            <span className='bg-color-red'>
              Interaktywna Wizytowka
            </span>
            , zostala dostosowana do wymogow{' '}
            <span style={{ fontWeight: '700' }}>Google z roku 2020</span> a
            takze zmodyfikowana tak, by spelniala wszystkie niezbedne elementy,
            o ktorych moge Panstwo sie dowiedziec{' '}
            <a href='#offer' style={{ textDecoration: 'underline' }}>
              ponizej
            </a>
            .
          </p>
          <br />
          <p>
            Naszym celem jest sprawic by{' '}
            <span style={{ fontWeight: '700' }}>Panstwa firma</span> wskoczyla
            do
            <span style={{ fontWeight: '700' }}> TOP</span> najlepszych firm w
            miescie.
          </p>
        </div>
      </div>

      {/* <div className='video__container'>
        <div className='button__container'>
          <span className='buttonPLAY buttonBlue' onClick={() => playVideo()}>
            Nacisnij
          </span>
        </div>

        {w > 0 && w < 768 && (
          <ReactPlayer
            url='https://www.youtube.com/watch?v=ZdVhkYShNoo'
            className='video'
            width='100%'
            height='100%'
            playing={playMe}
          />
        )}

        {w >= 768 && w < 1024 && (
          <ReactPlayer
            url='https://www.youtube.com/watch?v=ZdVhkYShNoo'
            className='video'
            width='80%'
            height='80%'
            playing={playMe}
          />
        )}

        {w >= 1024 && (
          <ReactPlayer
            url='https://www.youtube.com/watch?v=ZdVhkYShNoo'
            className='video'
            width='60%'
            height='60%'
            playing={playMe}
          />
        )}
      </div> */}
      {/* <img src='./tlooo.png' className='generalInfo__tlo' /> */}
    </div>
  );
}

export default GeneralInfo;
