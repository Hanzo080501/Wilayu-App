import Title from '@/Components/Dashboard/Title';
import AdminLayout from '@/Layouts/AdminLayout';
import { FaEdit, FaTrash, FaInfoCircle, FaPlus } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Head, Link } from '@inertiajs/react';

const galleryItems = [
  {
    id: 1,
    image: 'https://i.ytimg.com/vi/JT0lWPUWM9s/maxresdefault.jpg',
    name: 'image1.jpg',
    date: '12-09-2024',
    size: '1.5 MB',
  },
  {
    id: 2,
    image: 'https://i.ytimg.com/vi/JT0lWPUWM9s/maxresdefault.jpg',
    name: 'image2.jpg',
    date: '12-09-2024',
    size: '1.5 MB',
  },
  {
    id: 3,
    image: 'https://i.ytimg.com/vi/JT0lWPUWM9s/maxresdefault.jpg',
    name: 'image3.jpg',
    date: '12-09-2024',
    size: '1.5 MB',
  },
  // Add more items as needed
];

const Index = () => {
  return (
    <AdminLayout>
      <Head title="Galeri" />
      <div className="flex flex-col p-5 bg-white rounded-2xl dark:bg-gray-600 dark:text-gray-300">
        <div className="flex items-center justify-between mb-5">
          <Title>Galeri</Title>
          <Link
            href={route('galeri.create')}
            className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-green-500 rounded-full hover:bg-green-600">
            <FaPlus className="w-4 h-4" />
            <span className="hidden sm:inline">Tambah Galeri</span>
          </Link>
        </div>

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
              {galleryItems.map((item) => (
                <tr key={item.id}>
                  <td className="p-4">
                    <LazyLoadImage
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-16 h-16 rounded-lg"
                    />
                  </td>
                  <td className="p-4 text-sm text-gray-800 dark:text-gray-200">{item.name}</td>
                  <td className="p-4 text-sm text-gray-800 dark:text-gray-200">{item.date}</td>
                  <td className="p-4 text-sm text-gray-800 dark:text-gray-200">{item.size}</td>
                  <td className="p-4 space-x-2 text-center flex justify-center">
                    <Link
                      href={route('galeri.edit', item.id)}
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
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Index;
