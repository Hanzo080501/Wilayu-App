import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import Title from '@/Components/Dashboard/Title';

const Detail = ({ potensi }) => {
  return (
    <AdminLayout>
      <Head title={`Detail Potensi: ${potensi.title}`} />

      <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-700 dark:text-gray-200">
        {/* Judul Halaman */}
        <Title>Detail Potensi: {potensi.title}</Title>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Deskripsi</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{potensi.description}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Gambar</h2>
          <img
            src={potensi.image}
            alt={potensi.title}
            className="object-cover w-64 h-64 mt-2 rounded-lg"
          />
        </div>

        <div className="mt-6">
          <Link
            href={route('potensi.index')}
            className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600">
            Kembali ke Daftar
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Detail;
