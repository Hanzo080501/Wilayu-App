import React, { useEffect } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import ProfileCard from '@/Components/ProfileCard';
import { Head } from '@inertiajs/react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import file CSS AOS

const Pemerintahan = ({ auth }) => {
  const pamongAtas = [
    {
      name: 'Kepala Dukuh',
      position: 'Kepala Desa',
      image:
        'https://news.uad.ac.id/wp-content/uploads/Nona-Carolina-mahasiswa-Universitas-Ahmad-Dahlan-UAD-Duta-Pelajar-Anti-Narkoba-Daerah-Istimewa-Yogyakarta-Foto-Istimewa-1030x701.jpg',
    },
    {
      name: 'RW',
      position: 'Ketua RW',
      image:
        'https://news.uad.ac.id/wp-content/uploads/Nona-Carolina-mahasiswa-Universitas-Ahmad-Dahlan-UAD-Duta-Pelajar-Anti-Narkoba-Daerah-Istimewa-Yogyakarta-Foto-Istimewa-1030x701.jpg',
    },
  ];

  const pamongBawah = [
    {
      name: 'RT 1',
      position: 'Ketua RT 1',
      image:
        'https://news.uad.ac.id/wp-content/uploads/Nona-Carolina-mahasiswa-Universitas-Ahmad-Dahlan-UAD-Duta-Pelajar-Anti-Narkoba-Daerah-Istimewa-Yogyakarta-Foto-Istimewa-1030x701.jpg',
    },
    {
      name: 'RT 2',
      position: 'Ketua RT 2',
      image:
        'https://news.uad.ac.id/wp-content/uploads/Nona-Carolina-mahasiswa-Universitas-Ahmad-Dahlan-UAD-Duta-Pelajar-Anti-Narkoba-Daerah-Istimewa-Yogyakarta-Foto-Istimewa-1030x701.jpg',
    },
    {
      name: 'RT 3',
      position: 'Ketua RT 3',
      image:
        'https://news.uad.ac.id/wp-content/uploads/Nona-Carolina-mahasiswa-Universitas-Ahmad-Dahlan-UAD-Duta-Pelajar-Anti-Narkoba-Daerah-Istimewa-Yogyakarta-Foto-Istimewa-1030x701.jpg',
    },
    {
      name: 'RT 4',
      position: 'Ketua RT 4',
      image:
        'https://news.uad.ac.id/wp-content/uploads/Nona-Carolina-mahasiswa-Universitas-Ahmad-Dahlan-UAD-Duta-Pelajar-Anti-Narkoba-Daerah-Istimewa-Yogyakarta-Foto-Istimewa-1030x701.jpg',
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <MainLayout auth={auth}>
      <Head title="Pamong" />
      <div className="container p-6 pb-12 mx-auto space-y-8 md:pt-24">
        {/* Header Section */}
        <div className="text-center">
          <h1
            className="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-200"
            data-aos="fade-down">
            Profil Pamong Padukuhan
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400" data-aos="fade-up">
            Perkenalkan jajaran perangkat desa yang berdedikasi melayani masyarakat.
          </p>
        </div>

        {/* Grid untuk 2 pamong (Kepala Dukuh dan RW) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {pamongAtas.map((profile, index) => (
            <div data-aos="fade-right" key={index}>
              <ProfileCard
                name={profile.name}
                position={profile.position}
                image={profile.image} // Gunakan gambar untuk tiap perangkat desa
              />
            </div>
          ))}
        </div>

        {/* Grid untuk 4 pamong (RT1 - RT4) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pamongBawah.map((profile, index) => (
            <div data-aos="fade-left" key={index}>
              <ProfileCard
                name={profile.name}
                position={profile.position}
                image={profile.image} // Gambar untuk tiap RT
              />
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Pemerintahan;
