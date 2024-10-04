import React from 'react';
import User from './User';
import DonutChart from './DonutChart';
import { usePage } from '@inertiajs/react';
import ShortCut from './ShortCut';

const Profile = () => {
  const { auth } = usePage().props;
  console.log(auth);
  return (
    <div className="flex flex-col justify-between w-full gap-4 px-2 py-4 mt-2 bg-gray-200 rounded-lg dark:bg-gray-700 lg:w-60 xl:w-80">
      <User auth={auth.user} />
      <ShortCut />
      <DonutChart />
    </div>
  );
};

export default Profile;
