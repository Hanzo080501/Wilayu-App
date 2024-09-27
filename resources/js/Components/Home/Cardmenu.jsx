import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@inertiajs/react';
import { faImage, faLocationDot, faNewspaper, faShop } from '@fortawesome/free-solid-svg-icons';

const heroCard = [
  {
    name: 'Peta',
    icon: faLocationDot,
    href: '/peta',
  },
  {
    name: 'Album galeri',
    icon: faImage,
    href: '/galeri',
  },
  {
    name: 'Pengumuman',
    icon: faNewspaper,
    href: '/pengumuman',
  },
  {
    name: 'Umkm',
    icon: faShop,
    href: '/umkm',
  },
];

const Cardmenu = () => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <ul className="grid grid-cols-2 gap-4 transition duration-500 md:flex md:w-full md:flex-wrap md:justify-center">
        {heroCard.map((menu, i) => (
          <li
            key={i}
            className="flex-grow p-4 transition duration-500 bg-gray-100 rounded-lg shadow-md hover:shadow-lg md:flex-shrink-0 md:w-1/4 dark:bg-gray-800"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="600"
            data-aos-delay={`${i * 300}`}>
            <Link href={menu.href} className="flex flex-col items-center text-center">
              <FontAwesomeIcon
                icon={menu.icon}
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                data-aos-delay={`${i * 400}`}
                className="mb-2 text-3xl text-gray-500 dark:text-gray-300"
              />
              <p className="text-gray-500 dark:text-gray-300">{menu.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cardmenu;
