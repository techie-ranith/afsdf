import React from 'react';
import { motion } from 'framer-motion';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Container from './Container';

const QandA = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Container>
      <motion.div
        className='flex items-start justify-center'
        initial='hidden'
        animate='visible'
        variants={containerVariants}
      >
        <motion.div className='flex flex-col gap-4' variants={itemVariants}>
          <div className='text-primary-800 font-bold text-xl'>support</div>
          <div className=''>FAQ</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequuntur omnis fugiat aliquid nobis? Amet laboriosam non fugit aliquid quidem. Perspiciatis, reiciendis neque nisi reprehenderit at maxime cum rerum quasi?</div>
        </motion.div>
        <motion.div className='flex flex-col gap-4' variants={itemVariants}>
          {[...Array(7)].map((_, index) => (
            <motion.div key={index} className='flex items-center justify-center flex-col' variants={itemVariants}>
              <div className='flex items-center justify-between w-full'>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                <AddCircleOutlineIcon />
              </div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default QandA;
