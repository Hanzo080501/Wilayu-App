// resources/js/Pages/PotensiDesa.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MainLayout from '@/Layouts/MainLayout';

const PotensiPadukuhan = ({ auth }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const potensiItems = [
    {
      title: 'Potensi Ekonomi',
      description:
        'Detail mengenai potensi ekonomi di padukuhan, termasuk usaha kecil dan menengah.',
      image: 'https://source.unsplash.com/random/300x200?business',
    },
    {
      title: 'Wisata Alam',
      description: 'Tempat wisata alam yang menarik untuk dikunjungi di padukuhan.',
      image: 'https://source.unsplash.com/random/300x200?nature',
    },
    {
      title: 'Produk Unggulan',
      description: 'Produk unggulan dari padukuhan yang dapat meningkatkan ekonomi lokal.',
      image: 'https://source.unsplash.com/random/300x200?product',
    },
  ];

  return (
    <MainLayout auth={auth}>
      <div className="container p-4 pb-12 mx-auto md:pt-24">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-800 transition duration-500 transform dark:text-gray-100">
          Potensi Padukuhan
        </h1>
        <p className="mb-8 text-center text-gray-600 transition duration-500 transform dark:text-gray-400">
          Informasi tentang potensi ekonomi, wisata, dan produk unggulan di padukuhan.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {potensiItems.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden transition-shadow duration-500 transform bg-white rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800"
              data-aos="fade-up"
              data-aos-delay={index * 200}>
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-40 transition-transform duration-300 transform hover:scale-110"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {item.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

// PotensiPadukuhan.layout = (page) => <MainLayout auth={page.props.auth}>{page}</MainLayout>;

export default PotensiPadukuhan;
