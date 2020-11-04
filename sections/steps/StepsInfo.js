import React from 'react';
import { Elipze, ArrowDown } from '../../svg/Svg';
import { StepsImg } from '../../svg/Svg';
import Link from 'next/link';

function StepsInfo() {
  return (
    <div className='stepsInfo__container'>
      <div className='logo'>
        <Link href='/'>
          <img src='./logo.png' alt='logo' />
        </Link>
      </div>
      <div className='stepsInfo__wrapper'>
        <div className='stepsInfo__box'>
          <h1>
            60 Krokow <Elipze />
          </h1>
          <div className='arrov_dovn'>
            <ArrowDown />
          </div>
        </div>

        <div className='steps__manage'>
          <div className='steps__image'>
            {/* <img src='./ebook.png' alt='steps image' /> */}
            <StepsImg />
          </div>
          <div className='steps__text'>
            <h2>61 Krokow</h2>
            <p>
              W celu stworzenia profesjonalnej strony internetowej, ktora bedzie
              zarowno dynamiczna jak i nowoczesna, postanowilismy rozwinac
              dotychczasowy sposob na tworzenie stron o wieksza ilosc
              dodatkowych opcji.
            </p>
            <br />
            <p>
              Strony przez nas tworzone podlegaja najnowszym regulacja ustalonym
              przez firme Google.
            </p>
            <br />
            <p>
              Majac w zasiegu tyle mozliwosci nasza glowna idea stali sie
              Tlumacze Jezykow Obcych. To na nich chcemy skupic nasze dzialania.
            </p>
          </div>
        </div>
      </div>
      <img src='./tlooo.png' className='stepsInfo__tlo' />
    </div>
  );
}

export default StepsInfo;
