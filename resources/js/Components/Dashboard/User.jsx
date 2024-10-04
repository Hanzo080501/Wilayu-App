import { Link } from '@inertiajs/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const User = ({ auth }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-full dark:bg-gray-600 dark:text-gray-300">
      <Link href={route('profile.edit')}>
        <LazyLoadImage
          src="https://i.ytimg.com/vi/JT0lWPUWM9s/maxresdefault.jpg"
          alt="profile"
          className="rounded-full w-14 h-14"
        />
      </Link>
      <div>
        <h3 className="text-2xl font-semibold" title={auth.name}>
          {auth.name}
        </h3>
        <p className="text-sm" title={auth.role}>
          {auth.role}
        </p>
        <p className="text-sm" title={auth.email}>
          {auth.email}
        </p>
      </div>
    </div>
  );
};

export default User;
