import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import useDarkMode from '@/useDarkMode'; // Import hook dark mode
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const navMenu = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Peta', href: '/peta' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'Berita', href: '/berita' },
  { name: 'Sejarah', href: '/sejarah' },
  { name: 'Pamong', href: '/pemerintahan' },
];

const Navbar = ({ auth }) => {
  const [theme, setTheme] = useDarkMode(); // Hook untuk dark mode
  const [dropdownOpen, setDropdownOpen] = useState(false); // State untuk melacak dropdown

  // Menutup dropdown ketika klik di luar elemen dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Toggle state dropdown
  };

  return (
    <nav className="fixed left-0 right-0 z-50 hidden m-4 transition duration-500 bg-white rounded-md shadow-lg dark:bg-gray-900 md:block">
      <div className="container flex items-center justify-between h-16 px-4">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">wilayu</h3>
        <div className="flex items-center space-x-4 text-sm font-bold">
          {navMenu.map((menu, i) => (
            <Link
              key={i}
              href={menu.href}
              className="px-6 py-2 text-base duration-300 hover:bg-gray-600 dark:hover:bg-gray-700 hover:text-white hover:rounded-md dark:text-gray-300">
              {menu.name}
            </Link>
          ))}

          {/* Button untuk dropdown */}
          <div className="relative dropdown-container">
            <button
              onClick={toggleDropdown}
              className="px-6 py-2 text-base duration-300 hover:bg-gray-600 dark:hover:bg-gray-700 hover:text-white hover:rounded-md dark:text-gray-300">
              Lainnya <FontAwesomeIcon icon={faCaretDown} />
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute left-0 w-40 mt-2 bg-white rounded-md shadow-lg dark:bg-gray-800">
                <Link
                  href="/layanan"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-600 dark:text-gray-300 hover:text-white">
                  Layanan
                </Link>
                <Link
                  href="/potensi"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-600 dark:text-gray-300 hover:text-white">
                  Potensi
                </Link>
                <Link
                  href="/kontak"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-600 dark:text-gray-300 hover:text-white">
                  Kontak
                </Link>
              </div>
            )}
          </div>

          {auth && auth.user ? (
            <>
              <Link
                href={route('profile.edit')}
                className="px-6 py-2 text-base duration-300 hover:bg-gray-600 dark:hover:bg-gray-700 hover:text-white hover:rounded-md dark:text-gray-300">
                Profile
              </Link>
              <Link
                as="button"
                href={route('logout')}
                method="post"
                className="px-6 py-2 text-base duration-300 hover:bg-gray-600 dark:hover:bg-gray-700 hover:text-white hover:rounded-md dark:text-gray-300">
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-6 py-2 text-base duration-300 hover:bg-gray-600 dark:hover:bg-gray-700 hover:text-white hover:rounded-md dark:text-gray-300">
                Login
              </Link>
              <Link
                href="/register"
                className="px-6 py-2 text-base duration-300 hover:bg-gray-600 dark:hover:bg-gray-700 hover:text-white hover:rounded-md dark:text-gray-300">
                Register
              </Link>
            </>
          )}

          {/* Tombol untuk toggle dark mode */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex items-center justify-center p-2 text-base text-black dark:text-white">
            <span
              className={`transition-transform duration-500 transform ${
                theme === 'dark' ? 'rotate-180' : ''
              }`}
              style={{ display: 'inline-block' }}>
              <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
