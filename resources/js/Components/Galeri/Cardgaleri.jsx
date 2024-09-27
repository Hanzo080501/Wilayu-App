import React from 'react';

const Cardgaleri = () => {
  return (
    <div className="container px-4 py-12 mx-auto transition duration-500 bg-gray-100 rounded-t-lg dark:bg-gray-900">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
          className="overflow-hidden rounded-lg shadow-md cursor-pointer">
          <div>
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjli-bbP5wZvuI_tCnkTB95hN0Gg-yQcbRFQ2Igx6ayy1XmgQ3Gyn7uRoUbPnlUrLG_gfDdlSSqDMoirGZsjj_rwx2piIfYkMb2skrZdIQqexeE19qwgeG37eBAPWON6A0KrYPPyvPIrA4E22p-1Yq4MBh-yqhmFqHiF3dS4RiSMWmkZxdEw7WsSYGEGc/s1500/KKN-PPM-UMBY.jpg"
              alt=""
              className="object-cover w-full h-full transition duration-300 transform hover:scale-110"
            />
            <div className="p-4 bg-white dark:bg-gray-800">
              <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">title</h4>
              <p className="text-gray-600 dark:text-gray-400">description</p>
            </div>
          </div>
        </div>
        {/* Tambahkan div berikut sesuai dengan jumlah item */}
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
          className="overflow-hidden rounded-lg shadow-md cursor-pointer">
          <div>
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjli-bbP5wZvuI_tCnkTB95hN0Gg-yQcbRFQ2Igx6ayy1XmgQ3Gyn7uRoUbPnlUrLG_gfDdlSSqDMoirGZsjj_rwx2piIfYkMb2skrZdIQqexeE19qwgeG37eBAPWON6A0KrYPPyvPIrA4E22p-1Yq4MBh-yqhmFqHiF3dS4RiSMWmkZxdEw7WsSYGEGc/s1500/KKN-PPM-UMBY.jpg"
              alt=""
              className="object-cover w-full h-full transition duration-300 transform hover:scale-110"
            />
            <div className="p-4 bg-white dark:bg-gray-800">
              <h4 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">title</h4>
              <p className="text-gray-600 dark:text-gray-400">description</p>
            </div>
          </div>
        </div>
        {/* ... */}
      </div>
    </div>
  );
};

export default Cardgaleri;
