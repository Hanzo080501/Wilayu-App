// resources/js/Pages/Layanan.jsx
import React, { useEffect } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Head } from '@inertiajs/react';

const Layanan = () => {
  // Inisialisasi AOS saat komponen dirender
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container p-4 mx-auto md:pt-24">
      <Head title="Layanan Publik Padukuhan" />
      <h1
        className="mb-8 text-3xl font-bold text-center transition duration-500 transform dark:text-gray-100"
        data-aos="fade-up">
        Layanan Publik Padukuhan
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Kartu Layanan */}
        <div
          className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105"
          data-aos="fade-up">
          <img
            src="https://img.icons8.com/ios/50/4A90E2/health-check.png"
            alt="Posyandu"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold text-center">Posyandu</h2>
        </div>

        <div
          className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105"
          data-aos="fade-up">
          <img
            src="https://img.icons8.com/ios/50/4A90E2/hospital-room.png"
            alt="Puskesmas"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold text-center">Puskesmas</h2>
        </div>

        <div
          className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105"
          data-aos="fade-up">
          <img
            src="https://img.icons8.com/ios/50/4A90E2/document.png"
            alt="Pelayanan Administrasi"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold text-center">Pelayanan Administrasi</h2>
        </div>

        <div
          className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105"
          data-aos="fade-up">
          <img
            src="https://img.icons8.com/ios/50/4A90E2/business-report.png"
            alt="Pelayanan Kesehatan"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold text-center">Pelayanan Kesehatan</h2>
        </div>

        <div
          className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105"
          data-aos="fade-up">
          <img
            src="https://img.icons8.com/ios/50/4A90E2/help.png"
            alt="Konsultasi"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold text-center">Konsultasi</h2>
        </div>
      </div>
    </div>
  );
};

Layanan.layout = (page) => <MainLayout auth={page.props.auth}>{page}</MainLayout>;

export default Layanan;
