import React, { useEffect } from 'react';
import MainLayout from '@/Layouts/Mainlayout';
import { Head } from '@inertiajs/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sejarah = ({ auth }) => {
  // Inisialisasi AOS saat komponen dirender
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <MainLayout auth={auth}>
      <Head title="Sejarah" />
      <div className="container p-6 mx-auto space-y-8">
        {/* Section Header */}
        <div className="pt-20 text-center" data-aos="fade-up">
          <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-200">
            Sejarah Padukuhan
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Menelusuri jejak perjalanan dan perkembangan padukuhan dari masa ke masa.
          </p>
        </div>

        {/* Sejarah Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4" data-aos="fade-right">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Sejarah</h2>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              Padukuhan memiliki sejarah panjang yang mencerminkan tradisi, budaya, dan identitas
              masyarakat setempat... Padukuhan memiliki sejarah panjang yang mencerminkan tradisi,
              budaya, dan identitas masyarakat setempat... Padukuhan memiliki sejarah panjang yang
              mencerminkan tradisi, budaya, dan identitas masyarakat setempat... Padukuhan memiliki
              sejarah panjang yang mencerminkan tradisi, budaya, dan identitas masyarakat
              setempat... Padukuhan memiliki sejarah panjang yang mencerminkan tradisi, budaya, dan
              identitas masyarakat setempat... Padukuhan memiliki sejarah panjang yang mencerminkan
              tradisi, budaya, dan identitas masyarakat setempat... Padukuhan memiliki sejarah
              panjang yang mencerminkan tradisi, budaya, dan identitas masyarakat setempat...
              tradisi, budaya, dan identitas masyarakat setempat... Padukuhan memiliki sejarah
              panjang yang mencerminkan tradisi, budaya, dan identitas masyarakat setempat...
              tradisi, budaya, dan identitas masyarakat setempat... Padukuhan memiliki sejarah
              panjang yang mencerminkan tradisi, budaya, dan identitas masyarakat setempat...
              tradisi, budaya, dan identitas masyarakat setempat... Padukuhan memiliki sejarah
              panjang yang mencerminkan tradisi, budaya, dan identitas masyarakat setempat...
              tradisi, budaya, dan identitas masyarakat setempat... Padukuhan memiliki sejarah
              panjang yang mencerminkan tradisi, budaya, dan identitas masyarakat setempat...
            </p>
          </div>

          <div data-aos="fade-left">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLAi3gATsDQRKm8dFeIXZDPosSbMrhU6gwg&s"
              alt="Sejarah Padukuhan"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Perkembangan Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div data-aos="fade-right">
            <img
              src="https://kampungkb.bkkbn.go.id/storage/34/3403/340308/3403082003/12974/intervensi/2023/07/21/566929/16899485020.jpeg"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-4" data-aos="fade-left">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Perkembangan
            </h2>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
              Seiring dengan perkembangan zaman, padukuhan ini mengalami berbagai perubahan...
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center" data-aos="zoom-in">
          <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
            Ingin tahu lebih lanjut tentang sejarah dan perkembangan padukuhan? Kunjungi langsung
            atau hubungi kami untuk informasi lebih lengkap.
          </p>
          <button className="px-6 py-3 mt-4 text-white transition-colors bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500">
            Hubungi Kami
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Sejarah;
