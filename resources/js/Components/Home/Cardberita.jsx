import React from 'react';
import { Link } from '@inertiajs/react';

const Cardberita = () => {
  return (
    <div className="py-12 transition duration-500 bg-gray-100 rounded-t-lg dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h3 className="mb-8 text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
          Berita
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
            className="overflow-hidden transition-transform transform bg-white rounded-lg shadow-md cursor-pointer dark:bg-gray-800 dark:text-gray-100 hover:scale-105 hover:shadow-xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlT9gYrJc-RrdAG6PIdGcaufyDSQnDAnOwFA&s"
              alt="berita-image"
              className="object-cover w-full h-48 transition duration-300 transform hover:scale-110"
            />
            <div className="p-4">
              <h4 className="mb-2 text-xl font-bold">title</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Tanggal: 01 Januari 2024</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Tag: Berita, Penting</p>
              <p className="text-gray-600 dark:text-gray-400">description</p>
              <div className="flex mt-4">
                <Link
                  href="/berita"
                  className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600">
                  Baca Berita Lainnya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardberita;
