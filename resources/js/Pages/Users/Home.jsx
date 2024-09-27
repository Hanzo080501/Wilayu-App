import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Head, Link } from '@inertiajs/react';
import { TypeAnimation } from 'react-type-animation';
import Cardmenu from '@/Components/Home/Cardmenu';
import Cardberita from '@/Components/Home/Cardberita';
import Mainlayout from '@/Layouts/Mainlayout';

export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head title="Home" />
      <div className="flex flex-col min-h-screen bg-gray-900 dark:bg-gray-900">
        <header>
          <div
            className="relative h-screen bg-center bg-cover"
            style={{ backgroundImage: `url(assets/img/padukuhan.jpg)` }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black to-transparent">
              <TypeAnimation
                className="px-4 mb-4 text-2xl font-bold text-center text-white md:text-6xl"
                sequence={[
                  'Selamat datang di website resmi padukuhan wilayu kelurahan pacarejo',
                  3000,
                  '',
                  1500,
                ]}
                typeSpeed={150}
                deletionSpeed={140}
                repeat={Infinity}
              />
              <p className="px-4 mb-4 text-lg text-center text-white md:text-2xl">
                Website ini dibuat untuk memudahkan para warga kelurahan pacarejo dalam proses
                pelayanan
              </p>
              <h3 className="px-4 text-lg text-center text-white md:text-2xl">
                Terima kasih sudah berkunjung
              </h3>
              <div className="mt-4">
                <Cardmenu />
              </div>
            </div>
          </div>
        </header>

        <div className="flex-grow">
          {/* Bagian berita */}
          <Cardberita />
        </div>
      </div>
    </>
  );
};

// Home.layout = (page) => <Mainlayout children={page} />;
Home.layout = (page) => <Mainlayout auth={page.props.auth}>{page}</Mainlayout>;

export default Home;
