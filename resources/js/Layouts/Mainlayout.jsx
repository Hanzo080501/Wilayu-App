import React from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Mobilenav from '@/Components/Mobilenav';
import PageLayout from '@/Components/PageLayout';
import { AnimatePresence } from 'framer-motion';

const Mainlayout = ({ auth, children }) => {
  console.log(auth);
  return (
    <div>
      <Navbar auth={auth} />
      <AnimatePresence>
        <main
          key={window.location.pathname} // Menambahkan key untuk transisi
          className="transition duration-500 transform bg-gray-100 dark:bg-gray-900">
          <PageLayout>{children}</PageLayout>
        </main>
      </AnimatePresence>
      <Footer />
      <div className="flex-grow">
        <div className="block md:hidden">
          {/* Hanya muncul di layar mobile */}
          <Mobilenav auth={auth} />
        </div>
      </div>
    </div>
  );
};

export default Mainlayout;
