import React from 'react';
import Mainlayout from '@/Layouts/Mainlayout';
import Location from '@/Components/Location';
import { Head } from '@inertiajs/react';

const LokasiPadukuhan = () => {
  return (
    <div>
      <Head title="Lokasi" />
      <div className="container z-0 flex-grow px-4 mx-auto transition duration-500 bg-gray-100 dark:text-gray-300 dark:bg-gray-900">
        <div className="mb-4 text-center pt-28">
          <p className="mb-5 text-lg">
            Ini adalah peta lokasi padukuhan yang menunjukkan tempat penting dalam komunitas.
          </p>
          <img
            src="https://i.ytimg.com/vi/V6TqV5GO_bU/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGFkgZShIMA8=&rs=AOn4CLCtnlngS29dPNX3Gr3chzPnKu14_w"
            alt="Deskripsi gambar"
            className="mx-auto transition-transform transform rounded-lg shadow-lg hover:scale-105"
          />
        </div>
        <div className="pt-5 pb-8">
          <Location />
        </div>
      </div>
    </div>
  );
};

// Peta.layout = (page) => <Mainlayout children={page} />;
LokasiPadukuhan.layout = (page) => <Mainlayout auth={page.props.auth}>{page}</Mainlayout>;

export default LokasiPadukuhan;
