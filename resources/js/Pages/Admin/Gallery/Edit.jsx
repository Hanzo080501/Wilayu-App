import AdminLayout from '@/Layouts/AdminLayout';
import Title from '@/Components/Dashboard/Title';
import { Link, usePage, useForm, Head } from '@inertiajs/react';

const Edit = () => {
  const { galery } = usePage().props;
  console.log(galery);

  const { data, setData, post, errors } = useForm({
    title: galery.title || '',
    fileImage: galery.image || '',
    _method: 'PUT',
  });

  const handleChange = (e) => {
    setData(e.target.name, e.target.type === 'file' ? e.target.files[0] : e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route('galery.update', galery.id), {
      forceFormData: true,
      onSuccess: () => {
        setData('title', '');
        setData('fileImage', null);
      },
    });
  };
  return (
    <AdminLayout>
      <Head title="Galeri Edit" />
      <div className="p-5 bg-white rounded-2xl dark:bg-gray-600 dark:text-gray-300">
        <Title>
          <Link href={route('galery.index')} className="text-blue-500 hover:underline">
            Galery
          </Link>
          {' / '}Edit
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
              defaultValue={data.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan nama file"
              required
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
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
            {errors.image && <p className="text-red-500">{errors.image}</p>}
            {/* Optional: Show existing image thumbnail */}
            {data.image && (
              <img
                src={data.image} // URL of the existing image
                alt={data.title || 'Preview'}
                className="object-cover w-32 h-32 mt-2 rounded-md"
              />
            )}
          </div>

          <div>
            <button
              type="submit"
              className="px-4 py-2 text-white transition-colors bg-green-500 rounded-lg hover:bg-green-600">
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Edit;
