import React, { useEffect } from 'react';
import Mainlayout from '@/Layouts/Mainlayout';
import { TypeAnimation } from 'react-type-animation';
import Cardblog from '@/Components/Berita/Cardblog';
import Cardmenu from '@/Components/Home/Cardmenu';
import { Head } from '@inertiajs/react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Berita = ({ auth }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Mainlayout auth={auth}>
      <Head title="Berita" />
      <div className="flex flex-col min-h-screen transition duration-500 bg-gray-900 dark:bg-gray-100">
        <div
          className="relative h-screen bg-center bg-cover"
          style={{ backgroundImage: `url(assets/img/padukuhan.jpg)` }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black to-transparent">
            <TypeAnimation
              className="px-4 mb-4 text-2xl font-bold text-center text-white md:text-6xl dark:text-gray-300"
              sequence={['Berita Wilayu', 3000, '', 1500]}
              typeSpeed={150}
              deletionSpeed={140}
              repeat={Infinity}
            />
            <div className="mx-auto mt-4 max-w-7xl">
              <Cardmenu />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900">
          <Cardblog />
        </div>
      </div>
    </Mainlayout>
  );
};

// Berita.layout = (page) => <Mainlayout children={page} />;
// Berita.layout = (page) => <Mainlayout auth={page.props.auth}>{page}</Mainlayout>;

export default Berita;
