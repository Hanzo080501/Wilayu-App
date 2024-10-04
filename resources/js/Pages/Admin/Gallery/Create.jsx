import AdminLayout from '@/Layouts/AdminLayout';
import Title from '@/Components/Dashboard/Title';
import { Head, Link } from '@inertiajs/react';

const Create = () => {
  return (
    <AdminLayout>
      <Head title="Galeri create" />
      <div className="p-5 bg-white rounded-2xl dark:bg-gray-600 dark:text-gray-300">
        <Title>
          <Link href={route('galeri.dashboard')} className="text-blue-500 hover:underline">
            Galeri
          </Link>
          {' / '}Create
        </Title>
        <form className="mt-5 space-y-5">
          <div>
            <label htmlFor="fileName" className="block text-sm font-semibold">
              Nama File
            </label>
            <input
              type="text"
              id="fileName"
              name="fileName"
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan nama file"
              required
            />
          </div>

          <div>
            <label htmlFor="fileImage" className="block text-sm font-semibold">
              Unggah Gambar
            </label>
            <input
              type="file"
              id="fileImage"
              name="fileImage"
              accept="image/*"
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="px-4 py-2 text-white transition-colors bg-green-500 rounded-lg hover:bg-green-600">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Create;
