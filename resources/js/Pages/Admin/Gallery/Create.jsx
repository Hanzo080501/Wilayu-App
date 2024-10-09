import AdminLayout from '@/Layouts/AdminLayout';
import Title from '@/Components/Dashboard/Title';
import { Head, Link, useForm } from '@inertiajs/react';

const Create = () => {
  // Menggunakan useForm untuk menangani form
  const { data, setData, post, errors } = useForm({
    title: '',
    fileImage: '',
    _method: 'POST',
  });

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    setData(e.target.name, e.target.type === 'file' ? e.target.files[0] : e.target.value);
  };

  // Fungsi untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Mengirimkan data menggunakan Inertia post
    post(route('galery.store'), {
      forceFormData: true, // Penting untuk mengirimkan file
      onSuccess: () => {
        setData('title', '');
        setData('fileImage', null);
      },
    });
  };

  return (
    <AdminLayout>
      <Head title="Galeri Create" />
      <div className="p-5 bg-white rounded-2xl dark:bg-gray-600 dark:text-gray-300">
        <Title>
          <Link href={route('galery.index')} className="text-blue-500 hover:underline">
            Galeri
          </Link>
          {' / '}Create
        </Title>
        <form onSubmit={handleSubmit} className="mt-5 space-y-5" encType="multipart/form-data">
          <div>
            <label htmlFor="fileName" className="block text-sm font-semibold">
              Nama File
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={data.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan nama file"
            />
            {errors.title && <div className="text-sm text-red-500">{errors.title}</div>}
          </div>

          <div>
            <label htmlFor="fileImage" className="block text-sm font-semibold">
              Unggah Gambar
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.image && <div className="text-sm text-red-500">{errors.image}</div>}
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
