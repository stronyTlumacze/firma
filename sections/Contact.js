import React, { useState } from 'react';
import { MalyTriangle, Krezka, Krezka2, InnyTriangle } from '../svg/Svg';
import Email from 'react-email-autocomplete';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const submit = (e) => {
    e.preventDefault();
    console.log('1 ok')
    fetch(`http://localhost:3000/api/email/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, name: name, msg: msg }),
    }).then(() => {
      console.log('ok 2');
      setName('')
      setEmail('')
      setMsg('')
    });
  };

  const customDomains = [
    'gmail.com',
    'yahoo.com',
    'outlook.com',
    'interia.pl',
    'wp.pl',
  ];

  return (
    <div className='contact__container' id='contact'>
      <div className='contact__wrapper'>
        <div className='contact__box'>
          <form onSubmit={(e) => submit(e)}>
            <input
              placeholder='Imie'
              type='text'
              onChange={(e) => setName(e.target.value)}
              name='name'
            />
            <Email
              className='form-control'
              placeholder='Podaj swoj adres e-mail'
              domains={customDomains}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder='Wiadomosc'
              type='text'
              rows='8'
              onChange={(e) => setMsg(e.target.value)}
              name='msg'
            />
            <input type='submit' value='Wyślij' className='button' />
            {/* <button onSubmit={(e) => submit(e)}>Wyslij</button> */}
          </form>
          <div className='contact__text'>
            <h2>Zyski zaczynają się od kontaktu</h2>
            <p>Dokładnie omówimy cały plan i ustalimy wszystkie szczegóły.</p>
            <br />
            <p>
              Wspólnie uda nam się osiągnąć cel a Twoja firma pozyska świetną
              stronę.
            </p>
            <br />
            <p>Pierwszy krok należy do Ciebie.</p>
            <p>My zajmiemy się resztą.</p>
            <h3>strony.dla.tlumaczy@gmail.com</h3>
          </div>
        </div>
      </div>

      {/* Elementy */}
      <div className='contact__elementy'>
        <MalyTriangle />
        <Krezka />
        <Krezka2 />
        <InnyTriangle />
      </div>
    </div>
  );
}

export default Contact;
