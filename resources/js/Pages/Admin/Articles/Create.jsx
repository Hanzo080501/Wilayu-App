import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import Title from '@/Components/Dashboard/Title';

const Create = () => {
  return (
    <AdminLayout>
      <Head title="Artikel create" />
      <div className="p-5 bg-white rounded-2xl dark:bg-gray-600 dark:text-gray-300">
        <Title>
          <Link href={route('articles.dashboard')} className="text-blue-500 hover:underline">
            Artikel
          </Link>
          {' / '}Buat
        </Title>
        <form className="mt-5 space-y-5">
          <div>
            <label htmlFor="title" className="block text-sm font-semibold">
              Judul Artikel
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan judul artikel"
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-semibold">
              Konten Artikel
            </label>
            <textarea
              id="content"
              name="content"
              rows="5"
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan konten artikel"
              required></textarea>
          </div>

          <div>
            <label htmlFor="thumbnail" className="block text-sm font-semibold">
              Unggah Gambar Thumbnail
            </label>
            <input
              type="file"
              id="thumbnail"
              name="thumbnail"
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
