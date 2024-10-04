import Title from '@/Components/Dashboard/Title';
import AdminLayout from '@/Layouts/AdminLayout';
import { FaEdit, FaTrash, FaInfoCircle, FaPlus } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Head, Link } from '@inertiajs/react';

const pamongItems = [
  {
    id: 1,
    image: 'https://i.pravatar.cc/100?img=1',
    name: 'Pak Budi',
    position: 'Ketua Dukuh',
    phone: '08123456789',
    email: 'budi@example.com',
  },
  {
    id: 2,
    image: 'https://i.pravatar.cc/100?img=2',
    name: 'Ibu Ani',
    position: 'Ketua RW 01',
    phone: '08123456788',
    email: 'ani@example.com',
  },
  {
    id: 3,
    image: 'https://i.pravatar.cc/100?img=3',
    name: 'Pak Tono',
    position: 'Ketua RT 02',
    phone: '08123456787',
    email: 'tono@example.com',
  },
];

const Index = () => {
  return (
    <AdminLayout>
      <Head title="Pamong Desa" />
      <div className="flex flex-col p-5 bg-white rounded-2xl dark:bg-gray-600 dark:text-gray-300">
        <div className="flex items-center justify-between mb-5">
          <Title>Pamong Desa</Title>
          <Link
            href={route('pamong.create')}
            className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-green-500 rounded-full hover:bg-green-600">
            <FaPlus className="w-4 h-4" />
            <span className="hidden sm:inline">Tambah Pamong</span>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md dark:bg-gray-800">
            <thead>
              <tr className="text-gray-700 bg-gray-100 dark:bg-gray-900 dark:text-gray-300">
                <th className="p-4 text-sm font-semibold text-left">Gambar</th>
                <th className="p-4 text-sm font-semibold text-left">Nama</th>
                <th className="p-4 text-sm font-semibold text-left">Jabatan</th>
                <th className="p-4 text-sm font-semibold text-left">Nomor Telepon</th>
                <th className="p-4 text-sm font-semibold text-left">Email</th>
                <th className="p-4 text-sm font-semibold text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {pamongItems.map((item) => (
                <tr key={item.id}>
                  <td className="p-4">
                    <LazyLoadImage
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-16 h-16 rounded-lg"
                    />
                  </td>
                  <td className="p-4 text-sm text-gray-800 dark:text-gray-200">{item.name}</td>
                  <td className="p-4 text-sm text-gray-800 dark:text-gray-200">{item.position}</td>
                  <td className="p-4 text-sm text-gray-800 dark:text-gray-200">{item.phone}</td>
                  <td className="p-4 text-sm text-gray-800 dark:text-gray-200">{item.email}</td>
                  <td className="p-4 space-x-2 text-center flex justify-center">
                    <Link
                      href={route('pamong.edit', item.id)}
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
