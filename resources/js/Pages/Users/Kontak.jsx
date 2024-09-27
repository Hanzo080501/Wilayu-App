// resources/js/Pages/Kontak.jsx
import React, { useEffect } from 'react';
import Chat from '@/Components/Chat';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainLayout from '@/Layouts/MainLayout';

const Kontak = ({ auth }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <MainLayout auth={auth}>
      <div className="container p-4 mx-auto md:pt-24">
        <h1 className="my-6 text-3xl font-bold text-center transition duration-500 transform dark:text-gray-100">
          Kontak Pemerintah Padukuhan
        </h1>
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800" data-aos="fade-up">
            <h2 className="mb-4 text-xl font-semibold transition duration-500 transform dark:text-gray-100">
              Informasi Kontak
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Email:{' '}
              <a href="mailto:info@padukuhan.com" className="text-blue-500">
                info@padukuhan.com
              </a>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Telepon: <span className="text-blue-500">0812-3456-7890</span>
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800" data-aos="fade-up">
            <h2 className="mb-4 text-xl font-semibold transition duration-500 transform dark:text-gray-100">
              Alamat
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Jl. Contoh No.123, Padukuhan, Yogyakarta
            </p>
          </div>
        </div>
        <Chat /> {/* Komponen Chat */}
      </div>
    </MainLayout>
  );
};

export default Kontak;
