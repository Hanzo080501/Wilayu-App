import Title from '@/Components/Dashboard/Title';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Detail = ({ pamong }) => {
  return (
    <AdminLayout>
      <Head title={`Detail Pamong - ${pamong.name}`} />
      <div className="p-5 bg-white rounded-2xl dark:bg-gray-600 dark:text-gray-300">
        <div className="mb-5">
          <Title>Detail Pamong</Title>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <LazyLoadImage
            src={pamong.image}
            alt={pamong.name}
            className="w-32 h-32 rounded-lg object-cover"
          />
          <div className="space-y-3">
            <div>
              <span className="font-semibold">Nama:</span> {pamong.name}
            </div>
            <div>
              <span className="font-semibold">Jabatan:</span> {pamong.position}
            </div>
            <div>
              <span className="font-semibold">Nomor Telepon:</span> {pamong.phone}
            </div>
            <div>
              <span className="font-semibold">Email:</span> {pamong.email}
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <Link
            href={route('pamong.index')}
            className="px-5 py-3 text-white bg-gray-500 rounded-lg hover:bg-gray-600">
            Kembali
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Detail;
