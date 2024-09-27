import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('login'), {
      onFinish: () => reset('password'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Log in" />
      <div className="flex flex-col w-full h-screen md:flex-row">
        {/* Bagian gambar */}
        <div className="relative w-full h-64 md:w-1/2 md:h-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6gqN1_EJSdgYtg99-31yODuuvkYeLjNPtg&s"
            alt="Banner"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-4 bg-black md:p-10 bg-opacity-30">
            <h1 className="text-2xl font-bold text-white md:text-4xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque!
            </h1>
            <p className="mt-2 text-sm font-light text-white md:text-xl">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        {/* Bagian form login */}
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#f5f5f5] p-6 md:p-14">
          <h1 className="text-xl md:mx-auto md:text-2xl text-[#060606] font-semibold text-center md:text-left mb-6">
            {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}
            Padukuhan Wilayu
          </h1>

          <div className="w-full max-w-md mx-auto">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold">Login</h3>
              <p className="mt-2 text-sm">Welcome Back! Please enter your details</p>
            </div>

            <form onSubmit={submit}>
              <div className="mb-6">
                <InputLabel htmlFor="email" />
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  placeholder="Email"
                  className="w-full px-4 py-3 my-2 text-black rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                  autoComplete="username"
                  isFocused={true}
                  onChange={(e) => setData('email', e.target.value)}
                />
                <InputError message={errors.email} className="mt-2" />
              </div>

              <div className="mb-6">
                <InputLabel htmlFor="password" />
                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  placeholder="Password"
                  className="w-full px-4 py-3 my-2 text-black rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                  autoComplete="current-password"
                  onChange={(e) => setData('password', e.target.value)}
                />
                <InputError message={errors.password} className="mt-2" />
              </div>

              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center">
                  <Checkbox
                    name="remember"
                    checked={data.remember}
                    className="w-4 h-4 mr-2"
                    onChange={(e) => setData('remember', e.target.checked)}
                  />
                  <span className="text-sm">Remember me</span>
                </label>
                {canResetPassword && (
                  <Link
                    href={route('password.request')}
                    className="text-sm font-medium text-gray-600 underline">
                    Forgot your password?
                  </Link>
                )}
              </div>

              <div className="flex flex-col space-y-4">
                <PrimaryButton
                  className="w-full py-3 text-white bg-[#060606] rounded-md font-semibold text-center"
                  disabled={processing}>
                  Log in
                </PrimaryButton>
                <Link
                  href={route('register')}
                  className="w-full py-3 text-black bg-gray-100 border border-[#060606] rounded-md text-center font-semibold">
                  Sign up
                </Link>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm">
                Don't have an account?{' '}
                <Link href={route('register')} className="font-semibold text-black underline">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}
