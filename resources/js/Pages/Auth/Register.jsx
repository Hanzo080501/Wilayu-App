import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const submit = (e) => {
    e.preventDefault();

    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <GuestLayout>
      <Head title="Register" />

      <div className="flex flex-col w-full h-screen md:flex-row">
        {/* Bagian gambar */}
        <div className="relative w-full h-64 md:w-1/2 md:h-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6gqN1_EJSdgYtg99-31yODuuvkYeLjNPtg&s"
            alt="Banner"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-4 bg-black md:p-10 bg-opacity-30">
            <h1 className="text-2xl font-bold text-white md:text-4xl">Join Us Today!</h1>
            <p className="mt-2 text-sm font-light text-white md:text-xl">
              Become part of our awesome community.
            </p>
          </div>
        </div>

        {/* Bagian form register */}
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#f5f5f5] p-6 md:p-14">
          <h1 className="text-xl md:text-2xl text-[#060606] font-semibold text-center md:text-left mb-6 md:ml-[6.5rem]">
            Register
          </h1>

          <div className="w-full max-w-md mx-auto">
            <form onSubmit={submit}>
              <div className="mb-6">
                <InputLabel htmlFor="name" value="Name" />
                <TextInput
                  id="name"
                  name="name"
                  value={data.name}
                  placeholder="Name"
                  className="w-full px-4 py-3 my-2 text-black rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                  autoComplete="name"
                  isFocused={true}
                  onChange={(e) => setData('name', e.target.value)}
                  required
                />
                <InputError message={errors.name} className="mt-2" />
              </div>

              <div className="mb-6">
                <InputLabel htmlFor="email" value="Email" />
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  placeholder="Email"
                  className="w-full px-4 py-3 my-2 text-black rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                  autoComplete="username"
                  onChange={(e) => setData('email', e.target.value)}
                  required
                />
                <InputError message={errors.email} className="mt-2" />
              </div>

              <div className="mb-6">
                <InputLabel htmlFor="password" value="Password" />
                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  placeholder="Password"
                  className="w-full px-4 py-3 my-2 text-black rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                  autoComplete="new-password"
                  onChange={(e) => setData('password', e.target.value)}
                  required
                />
                <InputError message={errors.password} className="mt-2" />
              </div>

              <div className="mb-6">
                <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                <TextInput
                  id="password_confirmation"
                  type="password"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 my-2 text-black rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                  autoComplete="new-password"
                  onChange={(e) => setData('password_confirmation', e.target.value)}
                  required
                />
                <InputError message={errors.password_confirmation} className="mt-2" />
              </div>

              <div className="flex items-center justify-between mb-6">
                <Link href={route('login')} className="text-sm font-medium text-gray-600 underline">
                  Already registered?
                </Link>
              </div>

              <div className="flex flex-col space-y-4">
                <PrimaryButton
                  className="w-full py-3 text-white bg-[#060606] rounded-md font-semibold text-center"
                  disabled={processing}>
                  Register
                </PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}
