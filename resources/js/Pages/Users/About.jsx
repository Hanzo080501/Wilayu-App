import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Head } from '@inertiajs/react';
import Mainlayout from '@/Layouts/Mainlayout';
import Cardmenu from '@/Components/Home/Cardmenu';

const About = () => {
  return (
    <>
      <Head title="Tentang Kami" />
      <div className="transition duration-500 bg-gray-100 dark:bg-gray-900">
        <div
          className="relative h-screen bg-center bg-cover"
          style={{ backgroundImage: `url(assets/img/padukuhan.jpg)` }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 dark:bg-opacity-70">
            <TypeAnimation
              className="px-4 mb-4 text-2xl font-bold text-center text-white md:text-6xl dark:text-gray-300"
              sequence={['Tentang Kami', 3000, '', 1500]}
              typeSpeed={150}
              deletionSpeed={140}
              repeat={Infinity}
            />
            <div className="mt-4">
              <Cardmenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// About.layout = (page) => <Mainlayout children={page} />;
About.layout = (page) => <Mainlayout auth={page.props.auth}>{page}</Mainlayout>;

export default About;
