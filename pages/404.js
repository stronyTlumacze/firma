import React from 'react';
import Link from 'next/link';
// import { useContext } from 'react'
// import { I18nContext } from 'next-i18next'

function NoPage() {
  //     const { i18n: { language } } = useContext(I18nContext)

  //     const msg = (lg) => {
  //         if(lg === 'en'){
  //             return <p>This is the 404 page</p>
  //         } else if (lg === 'pl') {
  //             return <p>Nie ma takiej strony</p>
  //         }
  //     }
  //   return <div>{msg(language)}</div>;
  return (
    <div>
      <div className='center404'>
        <div className='error404'>
          <div className='number404'>4</div>
          <div className='illustration404'>
            <div className='circle404'></div>
            <div className='clip404'>
              <div className='paper404'>
                <div className='face404'>
                  <div className='eyes404'>
                    <div className='eye404 eye404-left'></div>
                    <div className='eye404 eye404-right'></div>
                  </div>
                  <div className='rosyCheeks404 rosyCheeks404-left'></div>
                  <div className='rosyCheeks404 rosyCheeks404-right'></div>
                  <div className='mouth404'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='number404'>4</div>
        </div>

        <div className='text404'>Oops. The page you're looking for doesn't exist.</div>
        <Link href='/'>Back home</Link>
      </div>

    </div>
  );
}

export default NoPage;
