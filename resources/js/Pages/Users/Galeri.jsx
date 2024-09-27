import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Cardgaleri from '@/Components/galeri/Cardgaleri';
import { Head } from '@inertiajs/react';
import Mainlayout from '@/Layouts/Mainlayout';
import Cardmenu from '@/Components/Home/Cardmenu';

const Galeri = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head title="Galeri" />
      <div className="flex flex-col min-h-screen transition duration-500 bg-gray-900 dark:bg-gray-100">
        <div
          className="relative h-screen bg-center bg-cover"
          style={{ backgroundImage: `url(assets/img/padukuhan.jpg)` }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-black to-transparent">
            <TypeAnimation
              className="px-4 mb-4 text-2xl font-bold text-center text-white md:text-6xl dark:text-gray-300"
              sequence={['Galeri', 3000, '', 1500]}
              typeSpeed={150}
              deletionSpeed={140}
              repeat={Infinity}
            />
            <div className="mt-4">
              <Cardmenu />
            </div>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900">
          <Cardgaleri />
        </div>
      </div>
    </>
  );
};

// Galeri.layout = (page) => <Mainlayout children={page} />;
Galeri.layout = (page) => <Mainlayout auth={page.props.auth}>{page}</Mainlayout>;

export default Galeri;
