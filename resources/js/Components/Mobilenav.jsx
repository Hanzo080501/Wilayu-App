import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faInfoCircle,
  faBars,
  faSignInAlt,
  faUserPlus,
  faImages,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import DropdownMenu from './DropdownMenu';

const Mobilenav = ({ auth }) => {
  const Menu = [
    {
      name: 'Home',
      icon: faHome,
      dis: 'translate-x-0',
      Link: '/home',
    },
    {
      name: 'About',
      icon: faInfoCircle,
      dis: 'translate-x-16',
      Link: '/about',
    },
    {
      name: 'Menu',
      icon: faBars,
      dis: 'translate-x-32',
      Link: '#',
    },
    // Menambahkan kondisi untuk Login/Register atau Logout/Album
    auth.user
      ? {
          name: 'Album',
          icon: faImages,
          dis: 'translate-x-48',
          Link: '/galeri',
        }
      : {
          name: 'Login',
          icon: faSignInAlt,
          dis: 'translate-x-48',
          Link: '/login',
        },
    auth.user
      ? {
          name: 'Petah',
          icon: faLocationDot,
          dis: 'translate-x-64',
          Link: '/peta',
        }
      : {
          name: 'Register',
          icon: faUserPlus,
          dis: 'translate-x-64',
          Link: '/register',
        },
  ].filter(Boolean); // Menghapus item yang tidak valid jika ada

  const [active, setActive] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="bg-gray-400 max-h[4.4rem] px-6 rounded-t-xl bottom-0 fixed w-full justify-center items-center flex z-50">
        <ul className="relative flex">
          <span
            className={`absolute z-0 w-16 h-16 duration-500 ${Menu[active].dis} border-4 ${
              isDropdownOpen
                ? 'border-white dark:border-gray-900'
                : 'border-gray-100 dark:border-gray-700'
            } rounded-full bg-gray-900 -top-5`}>
            {/* <span
              className={`w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] ${
                isDropdownOpen ? 'shadow-myshadow3' : 'shadow-myshadow1'
              }`}></span>
            <span
              className={`w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] ${
                isDropdownOpen ? 'shadow-myshadow4' : 'shadow-myshadow2'
              }`}></span> */}
          </span>
          {Menu.map((item, i) => (
            <li key={i} className="w-16">
              <Link
                href={item.name === 'Menu' ? '#' : item.Link}
                className="flex flex-col pt-6 text-center"
                onClick={(event) => {
                  setActive(i);
                  if (item.name === 'Menu') {
                    event.preventDefault();
                    toggleDropdown();
                  } else {
                    setIsDropdownOpen(false);
                  }
                }}>
                <span
                  className={`text-xl cursor-pointer duration-500 z-10 ${
                    i === active && '-mt-6 text-white'
                  }`}>
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span
                  className={` ${
                    active === i
                      ? 'translate-y-4 duration-700 opacity-100'
                      : 'opacity-0 translate-y-10'
                  } `}>
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <DropdownMenu isOpen={isDropdownOpen} closeDropdown={toggleDropdown} />
    </>
  );
};

export default Mobilenav;
