import React, { useEffect } from 'react';
import App from 'next/app';
import NoPage from './404';
import { useRouter } from 'next/router';
// Components
import Layout from '../component/Layout';
// Libraries
import { AnimatePresence } from 'framer-motion';
// import { appWithTranslation } from '../i18n';
// Styles
import '../styles/styles.scss';
// Analytics
import * as gtag from '../lib/gtag';
// NProgress
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Router } from 'next/dist/client/router';

NProgress.configure({
  showSpinner: false,
  trickleRate: 0.1,
  trickleSpeed: 300,
});

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  // Google analytics start
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  // Google analytics end

  useEffect(() => {
    localStorage.removeItem('initialOpen')
    localStorage.removeItem('popup')
  }, [])

  if (router.pathname === '/404') {
    return <NoPage />;
  } else {
    return (
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    );
  }
}

// MyApp.getInitialProps = async (appContext) => ({
//   ...(await App.getInitialProps(appContext)),
// });

// export default appWithTranslation(MyApp);
export default MyApp;
