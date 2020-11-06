import React, { useEffect } from 'react';
import { Checked } from '../svg/Svg';
import Typed from 'react-typed';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { Ztamp } from '../svg/Svg'

function Price() {
  useEffect(() => {
    ScrollTrigger.batch('.p-main__two .mark__black', {
      start: 'top +645px',
      onEnter: (batch) =>
        gsap.to(batch, {
          scrollTrigger: {
            trigger: '.p-main__two .mark__black',
          },
          x: '-100%',
          duration: 1,
          overwrite: true,
          // ease: 'Power2.easeOut',
        }),
      onLeave: (batch) =>
        gsap.to(batch, {
          x: '0%',
          duration: 1,
          overwrite: true,
          // ease: 'Power2.easeOut',
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          x: '-100%',
          duration: 1,
          overwrite: true,
          // ease: 'Power2.easeOut',
        }),
      onLeaveBack: (batch) =>
        gsap.to(batch, {
          x: '0%',
          duration: 1,
          overwrite: true,
          // ease: 'Power2.easeOut',
        }),
    });
  }, []);

  return (
    <div className='price__container' id='price'>
      <div className='price__wrapper'>
        <div className='price__box'>
          <h2 className='main__two p-main__two'>
            <span className='mark__black'></span>Promocja
          </h2>
        </div>
        <div className='promotion_info'>
          <p className='raty bg-color-red'>Elastyczne raty</p>
          <div className='procent'>
            <p>
              {' '}
              <Typed strings={['0%']} typeSpeed={80} backSpeed={80} loop />
            </p>
          </div>
          <p className='no__pay bg-color-red'>Na poczatku nie płacisz nic!</p>
          <p className='last__msg'>Pierwsza rata po 3 miesiącach od zakupu</p>
        </div>
        <div className='prices'>
          {/* 1 */}
          <div className='price__info'>
            <img src='./pakiet1.png' />
            <p className='pakiet__title'>Pakiet podstawowy</p>
            <h3 className='price'>2000 PLN</h3>
            <p>
              <Checked /> Struktura 14 sekcji
            </p>
            <p>
              <Checked /> 60 Kroków
            </p>
            <p>
              <Checked /> Google Moja Firma
            </p>
            <p>
              <Checked /> Darmowy e-book
            </p>
            <br />
            <p className='maleinfo'>
              Pakiet podstawowy zawiera wszystkie potrzebne do zaistnienia i
              wyróżnienia się na tle innych firm kroki. Jest idealnym
              rozwiązaniem dla osób pracujących w pojedynke lub mniejszych firm.
            </p>
          </div>
          {/* 2 */}
          <div className='price__info'>
            <Ztamp />
            <p className='pakiet__title'>Pakiet interaktywny</p>
            <h3 className='price'>2500 PLN</h3>
            <p>
              <Checked /> Struktura 14+ sekcji
            </p>
            <p>
              <Checked /> 60 Krokow
            </p>
            <p>
              <Checked /> Google Moja Firma
            </p>
            <p className='interaktyvny'>
              <span>
                <Checked /> Interaktywne komponenty wizualne*
              </span>
            </p>
            <p>
              <Checked /> Darmowy e-book
            </p>
            <br />
            <p className='maleinfo'>
              * Wyświetlające się automatycznie bądź na życzenie małe video w
              różnych miejscach strony i animowane popupy. Uzyskujemy w ten
              sposób możliwość czystego zamieszczenia większej ilości informacji
              i odgórnego budowania zaufania.
            </p>
            <span className='to-example'><a href='https://prezentacja.vercel.app/' target="_blank" rel="noreferrer">Przykład</a></span>
          </div>
          {/* 3 */}
          <div className='price__info'>
            <img src='./pakiet2.png' />
            <p className='pakiet__title'>Pakiet PRO</p>
            <h3 className='price'>3000 PLN</h3>
            <p>
              <Checked /> Struktura 14+ sekcji
            </p>
            <p>
              <Checked /> 60 Krokow
            </p>
            <p>
              <Checked /> Google Moja Firma
            </p>
            <p className='interaktyvny'>
              <span>
                <Checked /> Interaktywne komponenty wizualne*
              </span>
            </p>
            <p className='interaktyvny'>
              <span>
                <Checked /> Podstrony*
              </span>
            </p>
            <p>
              <Checked /> Darmowy e-book
            </p>
            <br />
            <p className='maleinfo'>
              * Interaktywny Wizytówka + podstrony (max 5). Każda podstrona
              to miejsce na większą ilość informacji i możliwość zatrzymania
              wizytującej osoby na dłużej. Dynamiczne przejścia nadadzą
              plynności użytkowaniu i miłą, przyjazną dla oka atmosferę.
            </p>
          </div>
        </div>
      </div>
      {/* <img src='./tlooo.png' className='price__tlo' /> */}
    </div>
  );
}

export default Price;
