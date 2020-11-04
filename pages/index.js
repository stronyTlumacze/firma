import React, { useContext  } from 'react';
// import Link from 'next/link';
// import { Link } from '../i18n'
import SEO from '../component/Seo';
// import { withTranslation } from '../i18n';
import gsap from 'gsap';
import { motion } from 'framer-motion';

import Welcome from '../sections/Welcome';
import GeneralInfo from '../sections/GeneralInfo';
import Offer from '../sections/Offer';
import Price from '../sections/Price';
import Team from '../sections/Team';
import Contact from '../sections/Contact';

import { NewContext } from '../context/index'

const timeline = gsap.timeline();

const fade = {
  initial: {
    opacity: 0,
  },
  enterInitial: {
    opacity: 1,
    transition: { duration: 1, delay: 1.5 },
  },
  enterNext: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1 },
  },
};

// const Home = ({ t }) => {
const Home = () => {
  const { firstEnter } = useContext(NewContext);

  return (
    <motion.div
      initial='initial'
      animate={firstEnter ? 'enterInitial' : 'enterNext'}
      exit='exit'
      variants={fade}
      // onAnimationComplete={() => console.log('tak')}
    >
      <SEO title='Page one' description='Description' />
      <Welcome />
      <GeneralInfo />
      <Offer />
      <Price />
      <Team />
      <Contact />
    </motion.div>
  );
};

// Home.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'footer'],
// });

// export default withTranslation('common')(Home);
export default Home;
