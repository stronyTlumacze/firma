import React, { useEffect, useContext } from 'react';
import gsap from 'gsap';

import { NewContext } from '../context/index'

const time = gsap.timeline();
function Intro() {
  const { setFirstEnter } = useContext(NewContext);

  useEffect(() => {
    time
      .to('.intro4__line', {
        duration: 0.7,
        width: '100vw',
        ease: 'Power3.easeOut',
        delay: 0.4,
      })
      .to('.intro4__one', {
        height: '0vh',
        duration: 0.7,
        ease: 'Power3.easeOut',
        delay: 0.4,
      })
      .to('.intro4__two', {
        height: 0,
        duration: 0.7,
        ease: 'Power3.easeOut',
        delay: -0.7,
      })
      .to('.intro4__line', {
        opacity: 0,
        duration: 0.4,
        delay: -0.4,
        ease: 'Power3.easeOut',
      })
      .to(document.body, {
        overflow: 'auto',
        onComplete: () => {
          document
            .querySelector('.layout__container')
            .removeChild(document.querySelector('.intro4'));
            // document.getElementsByTagName('html')[0].style.overflow = "auto";
            // document.body.style.overflowY = 'auto'
            setFirstEnter(false)
        },
      });
  }, []);

  return (
    <div className='intro4'>
      <div className='intro4__one'>
        <p className='intro4__line'></p>
      </div>
      <div className='intro4__two'></div>
    </div>
  );
}

export default Intro;
