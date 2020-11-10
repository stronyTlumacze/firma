import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Team() {
  useEffect(() => {
    ScrollTrigger.batch('.t-main__two .mark__black', {
      start: 'top +645px',
      onEnter: (batch) =>
        gsap.to(batch, {
          scrollTrigger: {
            trigger: '.t-main__two .mark__black',
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
    <div className='team__container' id='team'>
      <div className='team__wrapper'>
        <div className='team__box'>
          <h2 className='main__two t-main__two'><span className='mark__black'></span>O nas</h2>
        </div>

        {/* <div className='team__numbers'>
          <div className='team_number'>
            <Hour />
            <p>33.000+</p>
            <h3>Godzin programujac</h3>
          </div>
          <div className='team_number'>
            <Keyboard />
            <p>1.546.864+</p>
            <h3>Linii kodu</h3>
          </div>
        </div> */}

        <div className='team__story'>
          <p>Historia firmy SDT sięga lat wczesnego dzieciństwa. </p>
          <p>
            Własciciele Marcin i Dawid znają się juz od ponad 20 lat a od 3 lat
            działają wspoólnie przy realizacji różnych projektów z zakresu IT w
            tym kryptowalut.
          </p>
          <p>
            Cały zamysł współpracy jak i pomysł stworzenia Wirtualnych
            Wizytówek okazał się strzałem w dziesiątkę, gdyż w idealnym momencie
            zaczał on zapełniać lukę na rynku, która powstała po wieloletniej
            złej praktyce tworzenia strony internetowych.
          </p>
          <br />
          <p>
            Nasze siedziby znajdują się w Poznaniu, Szczecinie, Glasgow
            (Szkocja) i Antwerpii (Belgia).
          </p>
          <p></p>
        </div>

        <div className='team__people'>
          <div className='team__person'>
            <img
              src='./people.png'
              alt='Marcin photo'
              className='team__photo '
            />
            <div className='team__info'>
              <h3 className='bg-color-red'>Marcin</h3>
              <p>
                Twórca pomysłu, programista z wieloletnim doświadczeniem,
                absolwent filologii angielskiej i zagorzały praktykant sportów
                walki.
              </p>
              <p>
                Zajmuje się UX/UI strony; w tym animacjami, dynamicznością i
                płynnością ruchu strony.
              </p>
              <p>
                Pomimo treningów każdego dnia, jest do Państwa dyspozycji
                24 godziny na dobę, 7 dni w tygodniu.
              </p>
            </div>
          </div>
          <div className='team__person team__person-right'>
            <img
              src='./people2.png'
              alt='Dawid photo'
              className='team__photo team__photo-right'
            />
            <div className='team__info team__info-right'>
              <h3 className='bg-color-red'>Dawid</h3>
              <p>
                Prawa ręka Marcina. Odpowiedzialny za strukturę kodu, bazy
                danych, poprawne SEO i narzędzia Google.
              </p>
              <p>
                Na swoim koncie ma juz 6 lat doświadczenia w pisaniu kodu. Zna
                ponad 10 różnych jezyków programowania.
              </p>
              <p>
                W wolnym czasie gra na perkusji i wzbogaca swoją wiedzę na temat
                kryptowalut.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='team__elementy'>
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

export default Team;

// const Keyboard = () => (
//   <svg
//     xmlns='http://www.w3.org/2000/svg'
//     className='team__icon'
//     viewBox='0 -63 512 512'
//   >
//     <path d='m85.777344 370.636719h-56.269532c-8 0-14.507812-6.507813-14.507812-14.507813v-172.5625c0-8 6.507812-14.511718 14.507812-14.511718h386.164063c4.140625 0 7.5-3.359376 7.5-7.5 0-4.140626-3.359375-7.5-7.5-7.5h-386.164063c-16.269531 0-29.507812 13.238281-29.507812 29.511718v172.5625c0 16.269532 13.238281 29.507813 29.507812 29.507813h56.269532c4.144531 0 7.5-3.355469 7.5-7.5 0-4.140625-3.355469-7.5-7.5-7.5zm0 0' />
//     <path d='m482.488281 154.054688h-37.261719c-4.140624 0-7.5 3.359374-7.5 7.5 0 4.140624 3.359376 7.5 7.5 7.5h37.261719c8.003907 0 14.511719 6.507812 14.511719 14.511718v172.5625c0 8-6.507812 14.507813-14.511719 14.507813h-366.476562c-4.140625 0-7.5 3.359375-7.5 7.5 0 4.144531 3.359375 7.5 7.5 7.5h366.476562c16.273438 0 29.511719-13.238281 29.511719-29.507813v-172.5625c0-16.273437-13.238281-29.511718-29.511719-29.511718zm0 0' />
//     <path d='m42.835938 189.390625c-4.140626 0-7.5 3.359375-7.5 7.5v145.910156c0 4.140625 3.359374 7.5 7.5 7.5h309.480468c4.144532 0 7.5-3.359375 7.5-7.5v-145.910156c0-4.140625-3.355468-7.5-7.5-7.5zm301.980468 48.636719h-31.660156v-33.636719h31.660156zm-294.480468 48.636718v-33.636718h15.289062v33.636718zm30.289062-33.636718h34.585938v33.636718h-34.585938zm179.527344-15v-33.636719h38.003906v33.636719zm-23.9375 48.636718v-33.636718h38.003906v33.636718zm-106.003906 0v-33.636718h38.003906v33.636718zm53.003906-33.636718h38v33.636718h-38zm61.9375-15h-38.003906v-33.636719h38.003906zm-53.003906 0h-38.003907v-33.636719h38.003907zm-53.003907 0h-38v-33.636719h38zm0 63.636718v33.636719h-38v-33.636719zm15 0h91.007813v33.636719h-91.007813zm106.007813 0h38.003906v33.636719h-38.003906zm29.066406-15v-33.636718h55.597656v33.636718zm-203.074219-82.273437v33.636719h-35.808593v-33.636719zm-35.808593 97.273437h35.808593v33.636719h-35.808593zm262.820312 33.636719v-33.636719h31.660156v33.636719zm0 0' />
//     <path d='m385.355469 196.890625v145.910156c0 4.140625 3.355469 7.5 7.5 7.5h76.308593c4.140626 0 7.5-3.359375 7.5-7.5v-145.910156c0-4.140625-3.359374-7.5-7.5-7.5h-76.308593c-4.144531 0-7.5 3.359375-7.5 7.5zm76.308593 56.136719v33.636718h-23.695312v-33.636718zm-38.695312 33.636718h-22.613281v-33.636718h22.613281zm-22.613281 15h22.613281v33.636719h-22.613281zm37.613281 33.636719v-33.636719h23.695312v33.636719zm23.695312-97.273437h-23.695312v-33.636719h23.695312zm-38.695312-33.636719v33.636719h-22.613281v-33.636719zm0 0' />
//     <path d='m91.933594 64.585938h314.601562c10.003906 0 18.144532 8.140624 18.144532 18.144531 0 10.007812-8.140626 18.148437-18.144532 18.148437h-309.472656c-18.277344 0-33.144531 14.867188-33.144531 33.144532v2c0 4.144531 3.355469 7.5 7.5 7.5 4.140625 0 7.5-3.355469 7.5-7.5v-2c0-10.003907 8.140625-18.144532 18.144531-18.144532h309.472656c18.277344 0 33.144532-14.871094 33.144532-33.148437 0-18.277344-14.867188-33.144531-33.144532-33.144531h-314.601562c-10.003906 0-18.144532-8.140626-18.144532-18.148438v-23.9375c0-4.140625-3.359374-7.5-7.5-7.5-4.144531 0-7.5 3.359375-7.5 7.5v23.9375c-.003906 18.277344 14.867188 33.148438 33.144532 33.148438zm0 0' />
//   </svg>
// );

// const Hour = () => (
//   <svg
//     xmlns='http://www.w3.org/2000/svg'
//     version='1.1'
//     id='Capa_1'
//     x='0px'
//     y='0px'
//     width='485.563px'
//     height='485.562px'
//     viewBox='0 0 485.563 485.562'
//     className='team__icon'
//   >
//     <g>
//       <g id='Layer_2_18_'>
//         <g>
//           <path d='M311.409,251.414c5.32-1.537,17.778-5.145,23.569-22.177l11.931-35.086l4.799,1.63c2.197,0.748,4.605-0.438,5.353-2.635     l6.401-18.824c0.748-2.197-0.438-4.604-2.637-5.351l-154.671-52.592c-2.196-0.747-4.606,0.44-5.353,2.636l-6.401,18.823     c-0.746,2.196,0.441,4.604,2.636,5.352l4.799,1.632l-12.145,35.725c-5.735,16.865-1.941,22.56,5.255,31.179l31.299,37.48     l-3.489,10.26c-11.976,2.599-43.272,9.418-47.485,10.635c-5.319,1.539-17.78,5.143-23.572,22.177l-10.271,30.21l-4.8-1.631     c-2.195-0.747-4.606,0.438-5.354,2.635l-6.398,18.823c-0.748,2.197,0.439,4.604,2.636,5.353l154.672,52.593     c2.194,0.746,4.604-0.44,5.352-2.638l6.397-18.82c0.749-2.197-0.437-4.606-2.636-5.354l-4.797-1.632l10.486-30.849     c5.735-16.863,1.944-22.561-5.254-31.176l-31.297-37.481l3.486-10.26C275.897,259.453,307.193,252.635,311.409,251.414z      M246.043,278.771l34.035,40.753c2.611,3.127,3.994,4.834,4.369,6.397c0.451,1.877-0.152,5.201-1.838,10.156l-10.488,30.851     l-116.316-39.55l10.269-30.209c3.243-9.535,9.122-11.237,13.413-12.479c3.356-0.97,32.146-7.282,50.679-11.291     c2.604-0.563,4.725-2.454,5.583-4.978l6.245-18.365c0.851-2.508,0.337-5.277-1.36-7.31l-33.932-40.631l-0.103-0.125     c-2.612-3.127-3.995-4.834-4.369-6.398c-0.45-1.877,0.15-5.198,1.837-10.156l12.146-35.725l116.319,39.55L320.6,224.348     c-3.241,9.537-9.118,11.237-13.41,12.479c-3.354,0.971-32.145,7.285-50.676,11.291c-2.605,0.564-4.728,2.453-5.587,4.979     l-6.243,18.363C243.831,273.969,244.348,276.736,246.043,278.771z' />
//           <path d='M337.935,423.581c-3.395,1.924-6.896,3.766-10.399,5.474c-0.567,0.277-1.114,0.58-1.643,0.907     c-0.562,0.195-1.121,0.422-1.676,0.68c-15.206,7.09-31.062,12.082-47.396,14.977c-0.209,0.03-0.418,0.042-0.629,0.08     c-3.851,0.681-7.77,1.248-11.646,1.692c-0.042,0.007-0.085,0.017-0.127,0.022c-7.118,0.785-14.316,1.186-21.589,1.186     c-83.862,0-155.381-53.81-181.88-128.71c-0.399-1.143-0.801-2.283-1.18-3.428c-6.352-19.101-9.802-39.515-9.802-60.722     c0-21.251,3.465-41.71,9.844-60.846c0.139-0.418,0.273-0.833,0.414-1.252c0.381-1.114,0.775-2.224,1.177-3.331     c0.187-0.52,0.376-1.037,0.568-1.553c22.02-59.268,72.388-104.863,134.541-120.242c0.039-0.009,0.079-0.012,0.118-0.021     c0.919-0.228,1.845-0.45,2.772-0.664c0.104-0.023,0.204-0.061,0.304-0.086c13.559-3.108,27.658-4.779,42.126-4.853l0.167,19.829     c0.051,6.156,3.938,7.934,8.632,3.955l41.886-35.504c4.693-3.979,4.643-10.43-0.123-14.33L249.92,2.045     c-4.762-3.899-8.616-2.056-8.564,4.099l0.167,19.79c-60.9,0.337-118.103,24.199-161.204,67.298     c-4.246,4.246-8.298,8.632-12.165,13.141c-0.023,0.026-0.047,0.047-0.071,0.075c-0.143,0.166-0.278,0.339-0.419,0.505     c-33.925,39.809-53.051,89.425-54.552,142.061c-0.037,0.409-0.081,0.815-0.091,1.233c-0.041,1.756-0.062,3.541-0.062,5.306     c0,2.894,0.059,5.827,0.168,8.72c0.012,0.339,0.056,0.67,0.089,1.003c1.944,47.958,18.527,93.3,47.621,130.856     c0.099,0.129,0.178,0.267,0.278,0.396c2.842,3.668,5.847,7.302,8.92,10.798c0.198,0.225,0.415,0.42,0.619,0.634     c3.111,3.508,6.323,6.944,9.666,10.286c34.123,34.124,77.088,56.187,123.726,64.068c0.142,0.026,0.285,0.054,0.427,0.08     c0.106,0.016,0.211,0.023,0.315,0.039c12.455,2.062,25.167,3.129,38.042,3.129c33.881,0,66.517-7.209,97.004-21.42     c0.657-0.306,1.281-0.657,1.882-1.028c0.683-0.235,1.354-0.514,2.016-0.837c4.183-2.042,8.361-4.236,12.412-6.529     c8.882-5.03,12.008-16.306,6.979-25.188C358.092,421.677,346.815,418.555,337.935,423.581z' />
//           <path d='M402.976,148.173c3.567,5.309,9.407,8.174,15.354,8.174c3.544,0,7.13-1.017,10.292-3.143     c8.471-5.693,10.723-17.174,5.03-25.646c-2.599-3.865-5.345-7.698-8.176-11.391c-6.2-8.108-17.798-9.65-25.905-3.45     c-8.106,6.202-9.65,17.802-3.446,25.907C398.496,141.725,400.801,144.938,402.976,148.173z' />
//           <path d='M426.446,196.708c1.188,3.711,2.279,7.516,3.247,11.311c2.131,8.36,9.648,13.921,17.896,13.921     c1.509,0,3.047-0.187,4.577-0.577c9.891-2.52,15.866-12.583,13.345-22.472c-1.15-4.513-2.45-9.04-3.866-13.456     c-3.11-9.72-13.514-15.079-23.233-11.965C428.69,176.584,423.333,186.988,426.446,196.708z' />
//           <path d='M414.674,380.14c-7.724-6.675-19.391-5.828-26.067,1.892c-2.556,2.956-5.232,5.869-7.958,8.657     c-7.134,7.301-6.998,19.001,0.304,26.136c3.595,3.513,8.257,5.263,12.913,5.263c4.803,0,9.602-1.862,13.221-5.566     c3.246-3.323,6.438-6.792,9.479-10.313C423.239,398.486,422.393,386.815,414.674,380.14z' />
//           <path d='M454.675,243.736c-10.219-0.307-18.722,7.719-19.024,17.92c-0.115,3.907-0.356,7.859-0.714,11.745     c-0.933,10.163,6.551,19.16,16.715,20.093c0.574,0.053,1.144,0.078,1.711,0.078c9.44,0,17.503-7.203,18.381-16.792     c0.426-4.639,0.714-9.354,0.852-14.019C472.897,252.562,464.878,244.041,454.675,243.736z' />
//           <path d='M446.456,315.401c-9.509-3.723-20.228,0.966-23.949,10.472c-1.423,3.635-2.978,7.28-4.623,10.828     c-4.29,9.26-0.261,20.244,9,24.535c2.517,1.166,5.157,1.717,7.758,1.717c6.978,0,13.654-3.97,16.78-10.716     c1.956-4.224,3.81-8.559,5.503-12.889C460.647,329.845,455.959,319.123,446.456,315.401z' />
//           <path d='M383.518,96.938c6.075-8.204,4.35-19.777-3.854-25.851c-3.735-2.767-7.608-5.454-11.51-7.992     c-8.557-5.563-20.004-3.139-25.567,5.418c-5.562,8.556-3.139,20.002,5.416,25.567c3.279,2.13,6.529,4.389,9.668,6.713     c3.306,2.447,7.161,3.629,10.984,3.629C374.311,104.422,379.895,101.833,383.518,96.938z' />
//         </g>
//       </g>
//     </g>
//     <g></g>
//     <g></g>
//     <g></g>
//     <g></g>
//     <g></g>
//     <g></g>
//     <g></g>
//     <g></g>
//     <g></g>
//     <g></g>
//     <g></g>
//     <g></g>
//     <g></g>
//     <g></g>
//     <g></g>
//   </svg>
// );
