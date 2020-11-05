import React, { useContext } from 'react';
import StructureInfo from '../../sections/structure/StructureInfo';
import AllStructure from '../../sections/structure/AllStructure';
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
        <SEO title='SDT - Struktura strony' description='Strony dla tlumaczy. Struktura strony.' />
      <StructureInfo />
      <AllStructure />
      <Contact />
    </motion.div>
  );
}

export default index;
