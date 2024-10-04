// PageLayout.js
import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 40, // Mulai dari posisi bawah
  },
  in: {
    opacity: 1,
    y: 0, // Akhir di posisi normal
  },
  out: {
    opacity: 0,
    y: -50, // Bergerak ke atas saat keluar
  },
};

const PageLayout = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Atur durasi transisi di sini
    >
      {children}
    </motion.div>
  );
};

export default PageLayout;
