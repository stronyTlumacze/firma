import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  Circle,
  Domek,
  Harmonia,
  Krezka,
  Circle2,
  ImageTeacher,
  Checked,
  Vorld,
} from '../svg/Svg';
import Typed from 'react-typed';

function Welcome() {
  return (
    <div className='welcome__container'>
      <div className='logo'>
        <Link href='/'>
          <img src='./logo.png' alt='logo' />
        </Link>
      </div>
      <div className='welcome__wrapper'>
        <div className='welcome__box welcome__box-left'>
          <div className='welcome__box-left-content'>
            <p className='dobrazmiana'>Dobra zmiana</p>
            <h1 className='title'>
              Interaktywne
              <br />
              Wizytówki
              <br /> dla Tłumaczy
              <br />
              <Typed
                strings={['Jezyków Obycych']}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            </h1>
            <div className='option'>
              <div className='left__option'>
                <p>
                  <Checked />
                  Nowoczesne #2021
                </p>
                <p>
                  <Checked />
                  Google Moja Firma
                </p>
                <p>
                  <Checked />
                  14+ sekcji
                </p>
              </div>
              <div className='right__option'>
                <p>
                  <Checked />
                  60 kroków
                </p>
                <p>
                  <Checked />
                  Interaktywne
                </p>
                <p>
                  <Checked />
                  Dynamiczne
                </p>
              </div>
            </div>
            <p className='e-book buttonRed'>
              <Link href='/ebook' className='e-book buttonBlue'>
                Darmowy E-book
              </Link>
            </p>
          </div>
        </div>
        <Vorld />
      </div>

      {/* tlo */}
      {/* <img src='./tlooo.png' className='welcome__tlo' /> */}

      <div className='welcome__elementy'>
        <span className="sport-icon flag-pl"></span>
        <span className="sport-icon flag-pl"></span>
        <span className="sport-icon flag-pl"></span>
        <span className="sport-icon flag-pl"></span>
        <span className="sport-icon flag-pl"></span>
      </div>
    </div>
  );
}

export default Welcome;
