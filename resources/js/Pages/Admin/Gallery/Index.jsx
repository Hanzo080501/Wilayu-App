import { useEffect, useState } from 'react';
import Title from '@/Components/Dashboard/Title';
import AdminLayout from '@/Layouts/AdminLayout';
import { FaEdit, FaTrash, FaInfoCircle, FaPlus, FaSpinner } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Head, Link, usePage } from '@inertiajs/react';

const Index = () => {
  const { galery } = usePage().props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (galery) {
      setLoading(false);
    }
  }, [galery]);

  // useEffect(() => {
  //   // Simulasi loading selama 3 detik
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  //   // Membersihkan timer saat komponen unmount
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <AdminLayout>
      <Head title="Galeri" />
      <div className="flex flex-col p-5 bg-white rounded-2xl dark:bg-gray-600 dark:text-gray-300">
        <div className="flex items-center justify-between mb-5">
          <Title>Galeri</Title>
          <Link
            href={route('galery.create')}
            className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-green-500 rounded-full hover:bg-green-600">
            <FaPlus className="w-4 h-4" />
            <span className="hidden sm:inline">Tambah Galeri</span>
          </Link>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-48">
            <FaSpinner className="w-8 h-8 text-gray-500 animate-spin" />
            <span className="ml-2 text-gray-500">Loading...</span>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md dark:bg-gray-800">
              <thead>
                <tr className="text-gray-700 bg-gray-100 dark:bg-gray-900 dark:text-gray-300">
                  <th className="p-4 text-sm font-semibold text-left">Gambar</th>
                  <th className="p-4 text-sm font-semibold text-left">Nama File</th>
                  <th className="p-4 text-sm font-semibold text-left">Tanggal Upload</th>
                  <th className="p-4 text-sm font-semibold text-left">Ukuran File</th>
                  <th className="p-4 text-sm font-semibold text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {galery.data.length > 0 ? (
                  galery.data.map((item, i) => (
                    <tr key={i}>
                      <td className="p-4">
                        <LazyLoadImage
                          src={item.image}
                          alt={item.title}
                          className="object-cover w-16 h-16 rounded-lg"
                        />
                      </td>
                      <td className="p-4 text-sm text-gray-800 dark:text-gray-200">{item.title}</td>
                      <td className="p-4 text-sm text-gray-800 dark:text-gray-200">
                        {new Date(item.created_at).toLocaleDateString()}
                      </td>
                      <td className="p-4 text-sm text-gray-800 dark:text-gray-200">
                        {item.file_size}
                      </td>
                      <td className="flex justify-center p-4 space-x-2 text-center">
                        <Link
                          href={route('galery.edit', item.id)}
                          className="flex items-center px-3 py-2 text-sm text-white transition duration-200 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
                          title="Edit">
                          <FaEdit className="mr-1" /> Edit
                        </Link>
                        <Link
                          href={route('galery.destroy', item.id)}
                          className="flex items-center px-3 py-2 text-sm text-white transition duration-200 ease-in-out bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none"
                          title="Hapus">
                          <FaTrash className="mr-1" /> Hapus
                        </Link>
                        <Link
                          href={route('galery.show', item.id)}
                          className="flex items-center px-3 py-2 text-sm text-white transition duration-200 ease-in-out bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none"
                          title="Detail">
                          <FaInfoCircle className="mr-1" /> Detail
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      Data Galeri Kosong
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Index;
