import React, { useEffect } from 'react';
import { general, seo, media, special, effects, recommendation } from './data';
import { Good, Bad } from '../../svg/Svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function AllSteps() {
  useEffect(() => {
    ScrollTrigger.batch('.gi-main__two .mark__black', {
      start: 'top +645px',
      onEnter: (batch) =>
        gsap.to(batch, {
          scrollTrigger: {
            trigger: '.gi-main__two .mark__black',
          },
          x: '-100%',
          duration: 1,
          overwrite: true,
        }),
      onLeave: (batch) =>
        gsap.to(batch, {
          x: '0%',
          duration: 1,
          overwrite: true,
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          x: '-100%',
          duration: 1,
          overwrite: true,
        }),
      onLeaveBack: (batch) =>
        gsap.to(batch, {
          x: '0%',
          duration: 1,
          overwrite: true,
        }),
    });

    let allGeneralBoxes = document.querySelectorAll('.g-step__wrapper .steps_box');

    ScrollTrigger.batch(allGeneralBoxes, {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, stagger: 0.15, overwrite: true }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, overwrite: true }),
    });
    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set(allGeneralBoxes, { opacity: 0 })
    );

    
    let allEOBoxes = document.querySelectorAll('.s-step__wrapper .steps_box');

    ScrollTrigger.batch(allEOBoxes, {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, stagger: 0.15, overwrite: true }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, overwrite: true }),
    });
    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set(allEOBoxes, { opacity: 0 })
    );

    
    let allMediaBoxes = document.querySelectorAll('.m-step__wrapper .steps_box');

    ScrollTrigger.batch(allMediaBoxes, {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, stagger: 0.15, overwrite: true }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, overwrite: true }),
    });
    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set(allMediaBoxes, { opacity: 0 })
    );

    
    let allPecialBoxes = document.querySelectorAll('.ss-step__wrapper .steps_box');

    ScrollTrigger.batch(allPecialBoxes, {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, stagger: 0.15, overwrite: true }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, overwrite: true }),
    });
    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set(allPecialBoxes, { opacity: 0 })
    );

    
    let allEffBoxes = document.querySelectorAll('.e-step__wrapper .steps_box');

    ScrollTrigger.batch(allEffBoxes, {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, stagger: 0.15, overwrite: true }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, overwrite: true }),
    });
    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set(allEffBoxes, { opacity: 0 })
    );

        
    let allRecomBoxes = document.querySelectorAll('.r-step__wrapper .steps_box');

    ScrollTrigger.batch(allRecomBoxes, {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, stagger: 0.15, overwrite: true }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, overwrite: true }),
    });
    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set(allRecomBoxes, { opacity: 0 })
    );
  }, []);

  return (
    <div className='allSteps__container'>
      <div className='allSteps__wrapper'>
        <div className='allSteps__box'>
          <h2 className='main__two gi-main__two'>
            <span className='mark__black'></span>Wszystkie kroki
          </h2>
          <p>Ponizej za i przeciw kazdej opcji</p>
        </div>
      </div>

      <div className='allSteps__info'>
        <div className='step__container'>
          {/* Info */}
          <div className='step__wrapper'>
            <p className='step__title'>Podstawa</p>
            <div className='step g-step__wrapper'>
              {general.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 1}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img src={`./svg/${el.svg}.svg`} alt={`photo_${i + 1}`} />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* End of Info */}

          {/* SEO */}
          <div className='step__wrapper'>
            <p className='step__title'>SEO</p>
            <div className='step s-step__wrapper'>
              {seo.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 12}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img
                        src={`./svg/${el.svg}.svg`}
                        alt={`photo_${i + 12}`}
                      />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* media */}
          <div className='step__wrapper'>
            <p className='step__title'>Media</p>
            <div className='step m-step__wrapper'>
              {media.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 21}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img
                        src={`./svg/${el.svg}.svg`}
                        alt={`photo_${i + 21}`}
                      />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* special */}
          <div className='step__wrapper'>
            <p className='step__title'>Specjaly</p>
            <div className='step ss-step__wrapper'>
              {special.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 27}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img
                        src={`./svg/${el.svg}.svg`}
                        alt={`photo_${i + 27}`}
                      />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* effects */}
          <div className='step__wrapper'>
            <p className='step__title'>Efekty</p>
            <div className='step e-step__wrapper'>
              {effects.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 33}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img
                        src={`./svg/${el.svg}.svg`}
                        alt={`photo_${i + 33}`}
                      />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* recommendation */}
          <div className='step__wrapper'>
            <p className='step__title'>Nasza Rekomendacja</p>
            <div className='step r-step__wrapper'>
              {recommendation.map((el, i) => {
                return (
                  <div className='steps_box' key={i}>
                    <span>{i + 58}#</span>
                    <div className='box_title'>
                      <h3>{el.title}</h3>
                      <img
                        src={`./svg/${el.svg}.svg`}
                        alt={`photo_${i + 58}`}
                      />
                    </div>
                    <p>
                      <span>
                        <Bad />
                      </span>
                      {el.bad}
                    </p>
                    <p>
                      <span>
                        <Good /> Nasz serwis -{' '}
                      </span>
                      {el.good}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllSteps;
