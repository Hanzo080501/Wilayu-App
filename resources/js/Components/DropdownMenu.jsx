import { Link } from '@inertiajs/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import useDarkMode from '@/useDarkMode';

const Menus = [
  {
    name: 'Products',
    href: '/link1',
  },
  {
    name: 'Umkm',
    href: '/link2',
  },
  {
    name: 'Petah',
    href: '/link3',
  },
  {
    name: 'Berita',
    href: '/berita',
  },
];

const DropdownMenu = ({ isOpen, closeDropdown }) => {
  const [theme, setTheme] = useDarkMode();

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 shadow-lg transform transition-transform duration-300 z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } ${
        theme === 'dark'
          ? 'bg-gray-800 text-white transition-colors duration-500'
          : 'bg-gray-100 text-gray-700 transition-colors duration-500'
      }`}>
      <div className="p-4">
        <h2 className="text-lg font-semibold">Menu</h2>
        <ul>
          {Menus.map((menu, i) => (
            <li key={i}>
              <Link href={menu.href} className="block py-2 hover:bg-gray-200">
                <span className="ml-2">{menu.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* Button untuk menutup dropdown */}
        <button
          onClick={closeDropdown}
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md">
          Tutup
        </button>

        {/* Button untuk mengubah tema */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`flex items-center px-4 py-2 mt-2 rounded-md text-white transition duration-500 
    ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'}`}>
          <span
            className={`transition-transform duration-500 transform origin-center ${
              theme === 'dark' ? 'rotate-180' : ''
            }`}>
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
          </span>
          <span className="ml-2">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </div>
  );
};

export default DropdownMenu;
