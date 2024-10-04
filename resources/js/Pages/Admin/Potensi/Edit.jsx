import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import Title from '@/Components/Dashboard/Title';

const Edit = ({ potensi }) => {
  const { data, setData, put, errors } = useForm({
    title: potensi.title || '',
    description: potensi.description || '',
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('potensi.update', potensi.id));
  };

  return (
    <AdminLayout>
      <Head title="Edit Potensi Padukuhan" />

      <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-700 dark:text-gray-200">
        {/* Judul Halaman */}
        <Title>Edit Potensi: {potensi.title}</Title>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Judul
            </label>
            <input
              type="text"
              className="w-full p-2 mt-1 border rounded-lg dark:bg-gray-800 dark:text-gray-200"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
            />
            {errors.title && <p className="text-xs text-red-500">{errors.title}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Deskripsi
            </label>
            <textarea
              className="w-full p-2 mt-1 border rounded-lg dark:bg-gray-800 dark:text-gray-200"
              rows="4"
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
            />
            {errors.description && <p className="text-xs text-red-500">{errors.description}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Gambar
            </label>
            <input
              type="file"
              className="w-full p-2 mt-1 border rounded-lg dark:bg-gray-800 dark:text-gray-200"
              onChange={(e) => setData('image', e.target.files[0])}
            />
            {errors.image && <p className="text-xs text-red-500">{errors.image}</p>}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              Perbarui Potensi
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Edit;
