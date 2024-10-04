import Title from '@/Components/Dashboard/Title';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, Head } from '@inertiajs/react';
import { FaEdit, FaTrash, FaInfoCircle, FaPlus } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Index = () => {
  // Contoh data artikel, ganti dengan data dari backend
  const articles = [
    {
      id: 1,
      title: 'Artikel Pertama',
      date: '12-09-2024',
      imageUrl: 'https://via.placeholder.com/100', // URL gambar artikel
    },
    {
      id: 2,
      title: 'Artikel Kedua',
      date: '10-09-2024',
      imageUrl: 'https://via.placeholder.com/100', // URL gambar artikel
    },
    // Tambahkan artikel lainnya di sini
  ];

  return (
    <AdminLayout>
      <Head title="Artikel" />
      <div className="flex flex-col p-5 bg-white rounded-2xl dark:bg-gray-600 dark:text-gray-300">
        <div className="flex items-center justify-between mb-5">
          <Title>Artikel</Title>
          <div>
            <Link
              href={route('articles.create')}
              className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-green-500 rounded-full hover:bg-green-600">
              <FaPlus className="w-4 h-4" />
              <span className="hidden sm:inline">Tambah Artikel</span>
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md dark:bg-gray-800">
            <thead>
              <tr className="text-gray-700 bg-gray-100 dark:bg-gray-900 dark:text-gray-300">
                <th className="p-4 text-sm font-semibold tracking-wider text-left">Gambar</th>
                <th className="p-4 text-sm font-semibold tracking-wider text-left">Judul</th>
                <th className="p-4 text-sm font-semibold tracking-wider text-left">Tanggal</th>
                <th className="p-4 text-sm font-semibold tracking-wider text-left">Penulis</th>
                <th className="p-4 text-sm font-semibold tracking-wider text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-600">
              {articles.map((article, i) => (
                <tr key={i} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  <td className="p-4">
                    <LazyLoadImage
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-16 h-16 rounded-md"
                    />
                  </td>
                  <td className="p-4 text-sm text-gray-800 dark:text-gray-200">{article.title}</td>
                  <td className="p-4 text-sm text-gray-800 dark:text-gray-200">{article.date}</td>
                  <td className="p-4 text-sm text-gray-800 dark:text-gray-200">{article.author}</td>
                  <td className="flex justify-center py-4 space-x-2 text-center">
                    <Link
                      href={route('articles.edit', { id: article.id })} // Ganti id sesuai dengan id artikel
                      className="flex items-center px-3 py-2 text-sm text-white transition duration-200 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
                      title="Edit">
                      <FaEdit className="mr-1" /> Edit
                    </Link>
                    <button
                      className="flex items-center px-3 py-2 text-sm text-white transition duration-200 ease-in-out bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none"
                      title="Hapus">
                      <FaTrash className="mr-1" /> Hapus
                    </button>
                    <button
                      className="flex items-center px-3 py-2 text-sm text-white transition duration-200 ease-in-out bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none"
                      title="Detail">
                      <FaInfoCircle className="mr-1" /> Detail
                    </button>
                  </td>
                </tr>
              ))}
              {/* Tambahkan lebih banyak baris artikel di sini */}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Index;
