import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
  const { post, processing } = useForm({});

  const submit = (e) => {
    e.preventDefault();
    post(route('verification.send'));
  };

  return (
    <GuestLayout>
      <Head title="Email Verification" />

      <div className="flex flex-col w-full h-screen md:flex-row">
        {/* Bagian gambar */}
        <div className="relative w-full h-64 md:w-1/2 md:h-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6gqN1_EJSdgYtg99-31yODuuvkYeLjNPtg&s"
            alt="Email Verification"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-4 bg-black md:p-10 bg-opacity-30">
            <h1 className="text-2xl font-bold text-white md:text-4xl">Verify Your Email</h1>
            <p className="mt-2 text-sm font-light text-white md:text-xl">
              Please verify your email address to continue.
            </p>
          </div>
        </div>

        {/* Bagian form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#f5f5f5] p-6 md:p-14">
          <h1 className="text-xl md:text-2xl text-[#060606] font-semibold text-center md:text-left mb-6">
            Email Verification
          </h1>

          <div className="mb-4 text-sm text-gray-600">
            Terima kasih telah mendaftar! Sebelum memulai, harap verifikasi alamat email kamu dengan
            mengklik link yang baru saja kami kirim.
          </div>

          {status === 'verification-link-sent' && (
            <div className="mb-4 text-sm font-medium text-green-600">
              Link verifikasi baru telah dikirim ke email yang kamu daftarkan.
            </div>
          )}

          <form onSubmit={submit} className="flex flex-col w-full max-w-md mx-auto">
            <div className="flex flex-col items-center justify-between gap-5 mt-4">
              <PrimaryButton
                className="w-full py-3 text-white bg-[#060606] rounded-md font-semibold text-center"
                disabled={processing}>
                Kirim Ulang Email Verifikasi
              </PrimaryButton>

              <Link
                href={route('logout')}
                method="post"
                as="button"
                className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Keluar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
}
