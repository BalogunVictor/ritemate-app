import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

const Motion = ({ children }: Props) => {
  const variants = {
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
    hidden: { opacity: 0, x: -200, y: 0 },
  };
  return (
    <>
      <motion.main
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        initial="hidden" // Set the initial state to variants.hidden
        transition={{ type: 'linear' }} // Set the transition to linear
        variants={variants} // Pass the variant object into Framer Motion
      >
        {children}
      </motion.main>
    </>
  );
};

export default Motion;
