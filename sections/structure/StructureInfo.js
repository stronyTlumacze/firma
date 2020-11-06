import React from 'react';
import { Elipze, ArrowDown } from '../../svg/Svg';
import { StructureImg } from '../../svg/Svg';
import Link from 'next/link';

function StructureInfo() {
  return (
    <div className='structureInfo__container'>
      <div className='logo'>
        <Link href='/'>
          <img src='./logo.png' alt='logo' />
        </Link>
      </div>
      <div className='structureInfo__wrapper'>
        <div className='structureInfo__box'>
          <h1>
            14 Sekcji <Elipze />
          </h1>
          <div className='arrov_dovn'>
            <ArrowDown />
          </div>
        </div>

        <div className='structureInfo__manage'>
          <div className='structureInfo__image'>
            <StructureImg />
          </div>
          <div className='structureInfo__text'>
            <h2>Sekcje</h2>
            <p>
              W celu stworzenia profesjonalnej strony internetowej, która będzie
              zarówno dynamiczna jak i nowoczesna, postanowiliśmy rozwinąć
              dotychczasowe sposoby i dodać nowe, obowiązkowe opcje.
            </p>
            <p>Struktura ktorą wybraliśmy zawiera wszystkie niezbędne informacje
              dla poprawnej prezentacji.
            </p>
            <p>Całość w połączeniu z 60 krokami, stanowi idealne rozwiązanie
              zyskując coraz to wiekszą popularność wsrod developerów.</p> 
          </div>
        </div>
      </div>
      <img src='./tlooo.png' className='structureInfo__tlo' />
    </div>
  );
}

export default StructureInfo;
