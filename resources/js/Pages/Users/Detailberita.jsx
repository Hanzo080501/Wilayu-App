import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import Mainlayout from '@/Layouts/Mainlayout';
import { useForm } from '@inertiajs/react';

const Detailberita = ({ berita, auth }) => {
  //   const { data, setData, post } = useForm({
  //     komentar: '',
  //     berita_id: berita.id,
  //   });

  //   const handleCommentSubmit = (e) => {
  //     e.preventDefault();
  //     post('/komentar');
  //   };

  //   const handleLike = (is_like) => {
  //     post('/like', { is_like, berita_id: berita.id });
  //   };

  return (
    <div className="container flex flex-col items-center justify-center py-12 pt-32 transition duration-500 transform bg-gray-100 dark:bg-gray-900">
      <Head title="Detail Berita" />
      <h1 className="text-3xl font-bold transition duration-500 transform dark:text-gray-100">
        Detail Berita
      </h1>
      <div className="flex flex-col items-center justify-center w-full mt-8">
        <div className="grid items-center justify-center w-full grid-cols-1 px-8 md:grid-cols-2">
          <img
            // src={berita.image}
            // alt={berita.title}
            className="object-cover w-full h-full md:h-96"
          />
          <div className="w-full p-4 overflow-scroll transition duration-500 transform bg-gray-300 h-60 dark:bg-gray-800 md:p-4 md:h-96 scrollbar-hidden">
            <h2 className="mt-4 text-2xl font-bold text-gray-800 transition duration-500 transform md:mt-0 dark:text-gray-100">
              {/* {berita.title} */}
            </h2>
            <p className="mt-2 text-gray-600 transition duration-500 transform dark:text-gray-400">
              {/* {berita.description} */}
            </p>
          </div>
        </div>

        {/* Like/Dislike */}
        <div className="flex justify-between mt-4">
          <button
            // onClick={() => handleLike(true)}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
            Like
          </button>
          <button
            // onClick={() => handleLike(false)}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700">
            Dislike
          </button>
        </div>

        {/* Form Komentar */}
        <form onSubmit={`/* handleCommentSubmit */`} className="mt-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
            placeholder="Tulis komentar..."
            // value={data.komentar}
            // onChange={(e) => setData('komentar', e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 mt-2 text-white bg-green-500 rounded hover:bg-green-700">
            Submit Komentar
          </button>
        </form>
      </div>
    </div>
  );
};

Detailberita.layout = (page) => <Mainlayout auth={page.props.auth}>{page}</Mainlayout>;

export default Detailberita;
