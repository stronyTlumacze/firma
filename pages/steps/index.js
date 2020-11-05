import React, { useContext } from 'react';
import StepsInfo from '../../sections/steps/StepsInfo';
import AllSteps from '../../sections/steps/AllSteps';
import Contact from '../../sections/Contact';
import { motion } from 'framer-motion';
import { NewContext } from '../../context/index'
import SEO from '../../component/Seo';

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

function index() {
  const { firstEnter } = useContext(NewContext);

  return (
    <motion.div
      initial='initial'
      animate={firstEnter ? 'enterInitial' : 'enterNext'}
      exit='exit'
      variants={fade}
    >
        <SEO title='SDT - 60 krokow' description='Strony dla tlumaczy. 60 krokow.' />
      <StepsInfo />
      <AllSteps />
      <Contact />
    </motion.div>
  );
}

export default index;
