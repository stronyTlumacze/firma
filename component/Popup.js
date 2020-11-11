import React, { useState } from 'react';
import { Bad } from '../svg/Svg';

function Popup({ setPop }) {
  const [emailEbook, setEmailEbook] = useState('');
  const [error, setError] = useState('');
  const [ok, setOk] = useState('');

  const submitEbook = (e) => {
    e.preventDefault();

    if (emailEbook === '' || emailEbook.length === 0) return;

    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(emailEbook)) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }

    // action
    fetch(`/api/ebook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: emailEbook }),
    }).then(() => {
      // after action
      setEmailEbook('');

      setOk(true);
      setTimeout(() => {
        setOk(false);
        setPop(false);
      }, 2000);
    });

    localStorage.setItem('popup', 'true');
  };

  const confirmPopup = () => {
    document.documentElement.style.overflowY = 'auto';
    setPop(false);
    localStorage.setItem('popup', 'true');
  };

  const customDomains = [
    'gmail.com',
    'yahoo.com',
    'outlook.com',
    'interia.pl',
    'wp.pl',
  ];

  return (
    <div className='popup__container'>
      <div className='popup'>
        <div className='popup__info'>
          <h2>Czy widzieliscie juz nasz E-book ? 😎 </h2>
          <h2 style={{ textAlign: 'center', color: '#fd2e41' }}>
            "Content Marketing i Social Media"
          </h2>
          <p>
            Zbior najlepszych zasad dotyczacych tworzenia contentu
            marketingowego, social media i sposobow na zdobycie wiekszej ilosci
            klientow. <br />
            Zapraszamy do pobrania!👋
          </p>
        </div>
        <div className='popup__getMeil'>
          <form onSubmit={(e) => submitEbook(e)}>
            <div className='popup__getMeil-join'>
              {error && (
                <p className='getBook__error' style={{ color: 'red' }}>
                  Proszę podaj poprawny e-mail.
                </p>
              )}
              {ok && (
                <p className='getBook__ok' style={{ color: 'green' }}>
                  E-book pobrany. Dziękujemy.
                </p>
              )}
              <input
                type='text'
                onChange={(e) => {
                  setEmailEbook(e.target.value), setError(false);
                }}
                value={emailEbook}
                placeholder='Podaj swoj adres e-mail'
              />
              <input type='submit' value='Zdobadz e-book' className='button' />
            </div>
          </form>
        </div>
        <p className='closePopup' onClick={() => confirmPopup()}>
          <Bad />
        </p>
      </div>
    </div>
  );
}

export default Popup;
