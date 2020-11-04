import React, { useState } from 'react';

function GetEbook() {
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
    setEmailEbook('');
  };
  return (
    <div className='getBook__container'>
      <div className='getBook__wrapper'>
        <div className='getBook__box'>
          <form onSubmit={(e) => submitEbook(e)}>
            <input
              type='email'
              onChange={(e) => setEmailEbook(e.target.value)}
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
