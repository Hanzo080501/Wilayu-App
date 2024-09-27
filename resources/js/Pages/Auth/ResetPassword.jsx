import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  });

  const submit = (e) => {
    e.preventDefault();

    post(route('password.store'), {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Reset Password" />

      <div className="flex flex-col w-full h-screen md:flex-row">
        {/* Bagian gambar */}
        <div className="relative w-full h-64 md:w-1/2 md:h-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87dOgSuR-1LXtn3PncN55HkBZefwktzTh0Q&s"
            alt="Reset Password"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-4 bg-black md:p-10 bg-opacity-30">
            <h1 className="text-2xl font-bold text-white md:text-4xl">Reset Your Password</h1>
            <p className="mt-2 text-sm font-light text-white md:text-xl">
              Enter your new password below.
            </p>
          </div>
        </div>

        {/* Bagian form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#f5f5f5] p-6 md:p-14">
          <h1 className="text-xl md:text-2xl text-[#060606] font-semibold text-center md:text-left mb-6 md:ml-[6.5rem]">
            Reset Password
          </h1>

          <form onSubmit={submit} className="w-full max-w-md mx-auto">
            <div>
              <InputLabel htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="w-full px-4 py-3 my-2 text-black rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                autoComplete="username"
                onChange={(e) => setData('email', e.target.value)}
              />
              <InputError message={errors.email} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel htmlFor="password" value="Password" />
              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="w-full px-4 py-3 my-2 text-black rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                autoComplete="new-password"
                isFocused={true}
                onChange={(e) => setData('password', e.target.value)}
              />
              <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
              <TextInput
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                value={data.password_confirmation}
                className="w-full px-4 py-3 my-2 text-black rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                autoComplete="new-password"
                onChange={(e) => setData('password_confirmation', e.target.value)}
              />
              <InputError message={errors.password_confirmation} className="mt-2" />
            </div>

            <div className="flex items-center justify-between mt-6">
              <PrimaryButton
                className="w-full py-3 text-white bg-[#060606] rounded-md font-semibold text-center"
                disabled={processing}>
                Reset Password
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
}
