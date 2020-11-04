import React, { useState } from 'react';
import { Bad } from '../svg/Svg';
import Email from 'react-email-autocomplete';

function Popup({ setPop }) {
  const [emailEbook, setEmailEbook] = useState('');

  const submitEbook = (e) => {
    e.preventDefault();

    // action
    fetch(`http://localhost:3000/api/ebook/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: emailEbook }),
    });

    // after action
    setEmailEbook('')
    // document.documentElement.style.overflowY = 'auto';
    setPop(false);
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
          <h2 style={{textAlign: 'center', color: '#fd2e41'}}>"Content Marketing i Social Media"</h2>
          <p>
            Zbior najlepszych zasad dotyczacych tworzenia contentu
            marketingowego, social media i sposobow na zdobycie wiekszej ilosci
            klientow. <br />
            Zapraszamy do pobrania!👋
          </p>
        </div>
        <div className='popup__getMeil'>
          <form onSubmit={(e) => submitEbook(e)}>
            <Email
              className='form-control'
              placeholder='Podaj swoj adres e-mail'
              domains={customDomains}
              onChange={(e) => setEmailEbook(e.target.value)}
            />
            <input type='submit' value='Zdobadz e-book' className='button' />
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
