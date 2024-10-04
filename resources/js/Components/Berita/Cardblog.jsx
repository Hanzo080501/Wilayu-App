import { Head, Link } from '@inertiajs/react';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

const Cardblog = () => {
  return (
    <div className="container px-4 py-12 mx-auto transition-colors duration-500 bg-gray-100 rounded-t-lg dark:bg-gray-900">
      {/* Layout grid utama dengan konten di kiri dan sidebar di kanan */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Kolom Kiri: Kartu Blog */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link href={route('detailberita')}>
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
                className="max-w-sm overflow-hidden transition duration-500 transform bg-white rounded shadow-lg dark:bg-gray-800 hover:scale-105">
                <LazyLoadImage
                  className="object-cover w-full h-48 transition-transform duration-500"
                  src="https://i.ytimg.com/vi/JT0lWPUWM9s/maxresdefault.jpg"
                  alt="news-image"
                  loading="lazy"
                />
                <div className="p-4 transition-colors duration-500">
                  <h2 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-500 dark:text-white">
                    Title 1
                  </h2>
                  <p className="mb-4 text-base text-gray-700 transition-colors duration-500 dark:text-gray-300">
                    Description for news 1.
                  </p>
                  <p className="text-xs text-gray-500 transition-colors duration-500 dark:text-gray-400">
                    Last update: Today
                  </p>
                </div>
              </div>
            </Link>
            {/* Tambahkan lebih banyak kartu sesuai kebutuhan */}
          </div>
        </div>

        {/* Kolom Kanan: Sidebar */}
        <div className="md:col-span-1">
          <div className="sticky space-y-6 top-10">
            <div
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-delay="300"
              className="p-4 transition-colors duration-500 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <h3 className="mb-4 text-lg font-bold text-gray-800 transition-colors duration-500 dark:text-white">
                Berita Terkini
              </h3>
              <ul className="text-gray-700 dark:text-gray-300">
                <li className="mb-2">
                  <Link href="/" className="hover:underline">
                    Breaking News 1
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:underline">
                    Breaking News 2
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:underline">
                    Breaking News 3
                  </Link>
                </li>
              </ul>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-delay="300"
              className="p-4 transition-colors duration-500 bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <h3 className="mb-4 text-lg font-bold text-gray-800 transition-colors duration-500 dark:text-white">
                Topik Populer
              </h3>
              <ul className="text-gray-700 dark:text-gray-300">
                <li className="mb-2">
                  <Link href="/" className="hover:underline">
                    Topik 1
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:underline">
                    Topik 2
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:underline">
                    Topik 3
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardblog;
