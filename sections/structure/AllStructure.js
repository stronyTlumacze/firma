import React, { useEffect } from 'react';
import {
  WelcomeStructure,
  LogoStructure,
  SerwisStructure,
  StatsStructure,
  OgolnyStructure,
  TeamStructure,
  VideoStructure,
  CertyfikatyStructure,
  PrezentacjeStructure,
  PriceStructure,
  OpinionStructure,
  GiftStructure,
  MapStructure,
  MenuStructure,
} from '../../svg/Svg';
import { data } from './data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function AllStructure() {
  useEffect(() => {
    ScrollTrigger.batch('.str-main__two .mark__black', {
      start: 'top +645px',
      onEnter: (batch) =>
        gsap.to(batch, {
          scrollTrigger: {
            trigger: '.str-main__two .mark__black',
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
  }, []);

  return (
    <div className='allStructure__container'>
      <div className='allStructure__wrapper'>
        <div className='allStructure__box'>
          <h2 className='main__two str-main__two'><span className='mark__black'></span>Wszystkie selekcje</h2>
          <p>Ponizej obowiazkowe i opcjonalne sekcje</p>
        </div>

        <div className='allStructure__elements'>
          {/* 1 */}
          {data.map((el) => (
            <div className='allStructure__element' key={el.img}>
              <div className='allStructure__left'>
                {el.img === 'WelcomeStructure' && <WelcomeStructure />}
                {el.img === 'LogoStructure' && <LogoStructure />}
                {el.img === 'OgolnyStructure' && <OgolnyStructure />}
                {el.img === 'StatsStructure' && <StatsStructure />}
                {el.img === 'SerwisStructure' && <SerwisStructure />}
                {el.img === 'TeamStructure' && <TeamStructure />}
                {el.img === 'VideoStructure' && <VideoStructure />}
                {el.img === 'CertyfikatyStructure' && <CertyfikatyStructure />}
                {el.img === 'PrezentacjeStructure' && <PrezentacjeStructure />}
                {el.img === 'PriceStructure' && <PriceStructure />}
                {el.img === 'OpinionStructure' && <OpinionStructure />}
                {el.img === 'GiftStructure' && <GiftStructure />}
                {el.img === 'MapStructure' && <MapStructure />}
                {el.img === 'MenuStructure' && <MenuStructure />}
              </div>
              <div className='allStructure__right'>
                <h3 className='bg-color-red'>{el.h3}</h3>
                <p>{el.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllStructure;
