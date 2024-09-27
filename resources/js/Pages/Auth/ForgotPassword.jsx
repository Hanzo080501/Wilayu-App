import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const submit = (e) => {
    e.preventDefault();

    post(route('password.email'));
  };

  return (
    <GuestLayout>
      <Head title="Forgot Password" />

      <div className="flex flex-col w-full h-screen md:flex-row">
        {/* Bagian gambar */}
        <div className="relative w-full h-64 md:w-1/2 md:h-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6gqN1_EJSdgYtg99-31yODuuvkYeLjNPtg&s"
            alt="Forgot Password"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-4 bg-black md:p-10 bg-opacity-30">
            <h1 className="text-2xl font-bold text-white md:text-4xl">Reset Your Password</h1>
            <p className="mt-2 text-sm font-light text-white md:text-xl">
              Enter your email to receive a reset link.
            </p>
          </div>
        </div>

        {/* Bagian form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#f5f5f5] p-6 md:p-14">
          <h1 className="text-xl md:text-2xl text-[#060606] font-semibold text-center md:text-left mb-6 md:ml-[6.5rem]">
            Forgot Password
          </h1>

          <div className="mb-4 text-sm text-gray-600">
            Forgot your password? No problem. Just let us know your email address and we will email
            you a password reset link that will allow you to choose a new one.
          </div>

          {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}

          <form onSubmit={submit} className="w-full max-w-md mx-auto">
            <TextInput
              id="email"
              type="email"
              name="email"
              value={data.email}
              placeholder="Enter your email"
              className="w-full px-4 py-3 my-2 text-black rounded-md focus:outline-none focus:ring focus:ring-gray-400"
              isFocused={true}
              onChange={(e) => setData('email', e.target.value)}
            />

            <InputError message={errors.email} className="mt-2" />

            <div className="flex items-center justify-between mt-4">
              <PrimaryButton
                className="w-full py-3 text-white bg-[#060606] rounded-md font-semibold text-center"
                disabled={processing}>
                Email Password Reset Link
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
}
