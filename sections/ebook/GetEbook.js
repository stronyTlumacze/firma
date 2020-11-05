import React, { useState } from 'react';
import fileDownload from 'js-file-download';

function GetEbook() {
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
    fetch(`http://localhost:3000/api/ebook/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: emailEbook }),
    }).then(() => {
      fileDownload('', './E-book Content Marketing i Social Media.pdf');
      // after action
      setEmailEbook('');

      setOk(true)
      setTimeout(() => {
        setOk(false);
      }, 2000);
    });
  };
  return (
    <div className='getBook__container'>
      <div className='getBook__wrapper'>
        <div className='getBook__box'>
          <form onSubmit={(e) => submitEbook(e)}>
            {error && (
              <p className='getBook__error' style={{ color: 'red' }}>Prosze podaj poprawny e-mail.</p>
            )}
            {ok && (
              <p className='getBook__ok' style={{ color: 'green' }}>E-book pobrany. Dziekujemy.</p>
            )}
            <input
              type='text'
              onChange={(e) => {
                setEmailEbook(e.target.value),
                setError(false);
              }}
              value={emailEbook}
              placeholder='Podaj swoj adres e-mail'
            />
            <input type='submit' value='Zdobadz e-book' className='button' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetEbook;
