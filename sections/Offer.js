import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  Trophy,
  Steps,
  Free,
  MalyTriangle,
  Krezka,
  Circle2,
  Circle,
  Deal,
} from '../svg/Svg';
import Typed from 'react-typed';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Offer() {
  useEffect(() => {
    ScrollTrigger.batch('.o-main__two .mark__black', {
      start: 'top +645px',
      onEnter: (batch) =>
        gsap.to(batch, {
          scrollTrigger: {
            trigger: '.o-main__two .mark__black',
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
    <div className='offer__container' id='offer'>
      <div className='offer__wrapper'>
        <div className='offer__box'>
          <h2 className='main__two o-main__two'>
            <span className='mark__black'></span>Interaktywne wizytowki
          </h2>
          <p>Idealne rozwiazanie dla firm 1-5 osobowych.</p>
        </div>

        <div className='offer__elements'>
          {/* 1 */}
          <div className='offer__element'>
            <div className='element__left'>
              <Trophy />
              <h3>14 Sekcji</h3>
            </div>
            <div className='element__right'>
              <h3 className='element__title'>Lista Wybranch Sekcji</h3>{' '}
              <div className='sekcja__wrapper'>
                <div>
                  <p>1 - Sekcja Powitalna</p>
                  <p>2 - Sekcja Logo</p>
                  <p>3 - Sekcja Opis ogolny</p>
                  <p>4 - Sekcja Statystyki</p>
                  <p>5 - Sekcja Serwis</p>
                  <p>6 - Sekcja O Nas</p>
                  <p>7 - Sekcja Video</p>
                  <p>8 - Sekcja Certyfikaty</p>
                </div>
                <div>
                  <p>9 - Sekcja Prezentacja</p>
                  <p>10 - Sekcja Cennik</p>
                  <p>11 - Sekcja Opinie Klientow</p>
                  <p>12 - Sekcja Prezent</p>
                  <p>13 - Sekcja Mapa + Kontakt</p>
                  <p>14 - Sekcja Nawigacja + Footer</p>
                  <p>
                    <span className='bg-color-red'>
                      + dodatkowe sekcje na zyczenie
                    </span>
                  </p>
                </div>
              </div>
              <p className='buttonGo buttonBlue'>
                <Link href='/structure'>Zobacz &rarr;</Link>
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className='offer__element'>
            <div className='element__left'>
              <Steps />
              <h3>60 Krokow</h3>
            </div>
            <div className='element__right'>
              <h3 className='element__title'>
                60 krokow ktore tworza Wirtualna Wizytowke
              </h3>

              <p>
                <span className='bg-color-red'>
                  # Strona pisana 100% od zera:{' '}
                </span>
                <br /> Bez uzycia szablonow czy nieslawnych, wolnych i
                powtarzalnych CMS (np. WordPress)
              </p>
              <br />
              <p>
                <span className='bg-color-red'># SSR:</span> <br />
                Strona tworzy sie po stronie serwera a nie w przegladrce.
                Oznacza to ze robotom Google latwiej bedzie ja znalezc. Dzieki
                temu pozycja strony bedzie o wiele lepsza a sama strona duzo
                dynamiczniejsza.{' '}
              </p>
              <br />
              <p>
                <span className='bg-color-red'># PWA:</span> <br />
                Progresywna aplikacja, dzieki ktorej strona bedzie dzialac duzo
                szybciej, pozwalajac na zapis danych po stronie klienta przy
                pierwszych wizytach. PWA pozwala takze na to by Panstwa
                Wirtualna Wizytowka dzialala nawet gdy nie bedzie polaczenia z
                internetem
              </p>
              <br />
              <p>
                <span className='bg-color-red'># Responsywnosc:</span>
                <br /> Strona w 100%, co do pixela (bedacego najmniejsza
                jednostka wymiarowa), bedzie idealnie dopasowana pod kazde
                urzadzenie i przegladarke internetowa
              </p>
              <br />
              <p>
                <span className='bg-color-red'>
                  # Instalacja i optymalizacja:
                </span>{' '}
                <br />
                Google Search console i Google Analytics - profesjonalne
                narzedzia do kontroli statystyk, pomagajace dotrzec do wiekszej
                ilosci klientow a takze zobrazowac co wplywa na wzrost a co na
                spadek zainteresowania serwisem
              </p>
              <p className='buttonGo buttonBlue'>
                <Link href='/steps'>Zobacz wszystkie kroki &rarr;</Link>
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className='offer__element'>
            <div className='element__left'>
              <Deal />
              <h3>Google My Business Page</h3>
            </div>
            <div className='element__right element__right-withPhoto'>
              <div className='googlePageText'>
                <h3 className='element__title'>Google My Business Page</h3>

                <p>
                  Bardzo wazna czesc informacyjna o firmie, widoczna z prawej
                  stronie ekranu, po wyszukaniu w przegladarce Google.
                </p>
                <p>
                  80% firm wykorzystuje to narzedzie{' '}
                  <span style={{ fontWeight: '700', color: '#fd2e41' }}>
                    tylko w 20%!
                  </span>{' '}
                  <br />
                </p>
                <br />
                <div style={{ width: '100%', textAlign: 'center' }}>
                  <p
                    style={{
                      fontSize: '1.6rem',
                      textAlign: 'center',
                      color: '#fff',
                      padding: '.1rem .3rem',
                      display: 'inline-block',
                    }}
                    className='bg-color-red'
                  >
                    My uzyjemy go w 100%.
                  </p>
                </div>
                <br />
                <p>Zadbamy o kazda mozliwa pozycje dla Google Moja Firma.</p>
                <p>
                  Dodatkowo damy Panstwu rady: <br />- jak dbac o to by strona
                  pozyskiwala pozytywne komentarze, <br />
                  - zlote gwiazdki <br />
                  - byla wysoko oceniana <br />
                </p>
                <br />
                <p>
                  &#40; Z prawej strony przyklad tego jak moze wygladac Google
                  Moja Firma &#41;
                </p>
              </div>

              <div className='googlePage'>
                <img src='./1gg.png' alt='' />
                <img src='./2gg.png' alt='' />
                <img src='./3gg.png' alt='' />
                <img src='./4gg.png' alt='' />
                <img src='./5gg.png' alt='' />
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className='offer__element'>
            <div className='element__left red'>
              <Free />
              <h3 className='element__title'>
                Darmowy <br /> e-book
              </h3>
            </div>
            <div className='element__right'>
              <div>
                <Typed
                  strings={['Content Marketing i Social Media']}
                  typeSpeed={50}
                  loop
                />
                <br />
                <p>Przygotowalismy dla Panstwa E-book. </p>
                <p>
                  Jest to pelen informacji zbior najlepszych zasad dotyczacych
                  tworzenia contentu
                </p>
                <p>
                  marketingowego, social media i sposobow na zdobycie wiekszej
                  ilosci klientow.
                </p>
              </div>
              <p style={{ fontWeight: '700' }}>E-book jest w 100% darmowy.</p>
              <p className='buttonGo buttonRed'>
                <Link href='/ebook'>Zobacz &rarr;</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='offer__elementy'>
        <span class='sport-icon flag-pl'></span>
        <span class='sport-icon flag-pl'></span>
        <span class='sport-icon flag-pl'></span>
        <span class='sport-icon flag-pl'></span>
        <span class='sport-icon flag-pl'></span>
        <span class='sport-icon flag-pl'></span>
        <span class='sport-icon flag-pl'></span>
      </div>
    </div>
  );
}

export default Offer;
