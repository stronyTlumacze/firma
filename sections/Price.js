import React, { useEffect } from 'react';
import { Checked } from '../svg/Svg';
import Typed from 'react-typed';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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
              <Typed
                strings={['0%']}
                typeSpeed={80}
                backSpeed={80}
                loop
              />
            </p>
          </div>
          <p className='no__pay bg-color-red'>Na poczatku nie placisz nic!</p>
          <p className='last__msg'>Pierwsza rata po 3 miesiacach od zakupu</p>
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
              <Checked /> 61 Krokow
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
              wyroznienia sie na tle innych firm kroki. Jest idealnym
              rozwiazaniem dla osob pracujacych w pojedynke lub malych firm.
            </p>
          </div>
          {/* 2 */}
          <div className='price__info'>
            <img src='./pakiet2.png' />
            <p className='pakiet__title'>Pakiet interaktywny</p>
            <h3 className='price'>2500 PLN</h3>
            <p>
              <Checked /> Struktura 14+ sekcji
            </p>
            <p>
              <Checked /> 61 Krokow
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
              * Wyswietlajace sie automatycznie badz na zyczenie male video w
              roznych miejscach strony i animowane popupy. Uzyskujemy w ten
              sposob mozliwosc czystego zamieszczenia wiekszej ilosci informacji
              i odgornego budowania zaufania.
            </p>
          </div>
          {/* 3 */}
          <div className='price__info coming'>
            <p className='pakiet__title'>Pakiet PRO</p>
            <h3 className='price'>Coming soon #2021</h3>
            <p>
              <Checked /> Struktura 14+ sekcji
            </p>
            <p>
              <Checked /> 61 Krokow
            </p>
            <p>
              <Checked /> Google Moja Firma
            </p>
            <p className='interaktyvny'>
              <span>
                <Checked /> Interaktywne komponenty wizualne
              </span>
            </p>
            <p className='interaktyvny'>
              <span>
                <Checked /> Interaktywny pomocnik wizualny*
              </span>
            </p>
            <p>
              <Checked /> Darmowy e-book
            </p>
            <br />
            <p className='maleinfo'>
              * Wyswietlajace sie automatycznie pomocnik. Dajacy wskazowki i
              dodatkowe informacje na temat firmy w zaleznosci od miejsca w
              ktorym znajduje sie uzytkownik na stronie.
            </p>
          </div>
        </div>
      </div>
      {/* <img src='./tlooo.png' className='price__tlo' /> */}
    </div>
  );
}

export default Price;
