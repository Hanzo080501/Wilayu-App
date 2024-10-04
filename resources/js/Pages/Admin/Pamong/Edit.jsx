import AdminLayout from '@/Layouts/AdminLayout';
import Title from '@/Components/Dashboard/Title';
import { Link } from '@inertiajs/react';

const Edit = ({ pamong }) => {
  return (
    <AdminLayout>
      <div className="p-5 bg-white rounded-2xl dark:bg-gray-600 dark:text-gray-300">
        <Title>
          <Link href={route('pamong.index')} className="text-blue-500 hover:underline">
            Pamong
          </Link>
          {' / '}Edit
        </Title>
        <form className="mt-5 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold">
              Nama Pamong
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={pamong.name}
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan nama pamong"
              required
            />
          </div>

          <div>
            <label htmlFor="position" className="block text-sm font-semibold">
              Jabatan
            </label>
            <input
              type="text"
              id="position"
              name="position"
              defaultValue={pamong.position}
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan jabatan pamong"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold">
              Nomor Telepon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              defaultValue={pamong.phone}
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan nomor telepon"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={pamong.email}
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan email"
              required
            />
          </div>

          <div>
            <label htmlFor="photo" className="block text-sm font-semibold">
              Unggah Foto
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {pamong.photo && (
              <img
                src={pamong.photo}
                alt="Foto pamong saat ini"
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
