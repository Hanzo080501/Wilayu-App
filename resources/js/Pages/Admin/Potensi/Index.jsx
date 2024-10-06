import AdminLayout from '@/Layouts/AdminLayout'; // Layout admin
import { Head, Link } from '@inertiajs/react'; // Komponen Inertia.js untuk link dan SEO
import Title from '@/Components/Dashboard/Title'; // Komponen judul
import { FaEdit, FaTrash, FaInfoCircle, FaPlus } from 'react-icons/fa';

const potensiItems = [
  {
    id: 1,
    title: 'Potensi Ekonomi',
    description: 'Detail mengenai',
    image: 'https://source.unsplash.com/random/300x200?business',
  },
  {
    id: 2,
    title: 'Wisata Alam',
    description: 'Tempat wisata alam',
    image: 'https://source.unsplash.com/random/300x200?nature',
  },
  {
    id: 3,
    title: 'Produk Unggulan',
    description: 'Produk unggulan',
    image: 'https://source.unsplash.com/random/300x200?product',
  },
];

const Index = () => {
  return (
    <AdminLayout>
      <Head title="Kelola Potensi Padukuhan" />

      <div className="p-6 bg-white rounded-2xl dark:bg-gray-700 dark:text-gray-200">
        <div className="flex items-center justify-between mb-5">
          <Title>Kelola Potensi Padukuhan</Title>

          {/* Tombol Tambah Potensi */}
          <div>
            <Link
              href={route('potensi.create')}
              className="flex items-center gap-2 px-4 py-2 text-white transition-colors bg-green-500 rounded-full hover:bg-green-600">
              <FaPlus className="w-4 h-4" />
              <span className="hidden sm:inline">Tambah Potensi</span>
            </Link>
          </div>
        </div>

        {/* Tabel Daftar Potensi */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md dark:bg-gray-800">
            <thead>
              <tr className="text-gray-700 bg-gray-100 dark:bg-gray-900 dark:text-gray-300">
                <th className="p-4 px-6 text-sm font-semibold tracking-wider text-left">Judul</th>
                <th className="p-4 px-6 text-sm font-semibold tracking-wider text-left">
                  Deskripsi
                </th>
                <th className="p-4 px-6 text-sm font-semibold tracking-wider text-center">
                  Gambar
                </th>
                <th className="p-4 px-6 text-sm font-semibold tracking-wider text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-600">
              {potensiItems.length > 0 ? (
                potensiItems.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-200">
                        {item.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-cover w-16 h-16 rounded-lg"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 space-x-2 text-sm text-center whitespace-nowrap">
                      <Link
                        href={route('potensi.edit', item.id)}
                        className="px-3 py-2 mr-2 text-xs text-white bg-blue-500 rounded hover:bg-blue-600">
                        <FaEdit className="inline-block mr-1" /> Edit
                      </Link>
                      <Link
                        // href={route('potensi.destroy', item.id)}
                        href="#"
                        className="px-3 py-2 text-xs text-white bg-red-500 rounded hover:bg-red-600"
                        method="delete"
                        as="button"
                        onClick={() => confirm('Apakah kamu yakin ingin menghapus potensi ini?')}>
                        <FaTrash className="inline-block mr-1" /> Hapus
                      </Link>
                      <Link
                        href={route('potensi.show', item.id)}
                        className="px-3 py-2 mt-2 text-xs text-white bg-green-500 rounded hover:bg-green-600">
                        <FaInfoCircle className="inline-block mr-1" /> Detail
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                    Tidak ada data potensi yang ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Index;
