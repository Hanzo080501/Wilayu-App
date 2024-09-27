import React from 'react';
import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="p-6 text-white transition duration-500 bg-gray-800 dark:bg-black">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Section Wilayu */}
          <div>
            <h2 className="mb-4 text-2xl font-bold">Wilayu</h2>
            <p className="mb-4 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, tempore.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:items-center">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col mt-4 space-y-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
            <div className="flex mb-4 space-x-4">
              <a href="https://facebook.com" aria-label="Facebook">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-2xl text-blue-500 hover:text-blue-600"
                />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl text-pink-500 hover:text-pink-600"
                />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-2xl text-blue-400 hover:text-blue-500"
                />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-2xl text-blue-500 hover:text-blue-600"
                />
              </a>
              <a href="https://youtube.com" aria-label="YouTube">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-2xl text-red-500 hover:text-red-600"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between pt-4 mt-8 border-t border-gray-700 mb-14 md:flex-row">
          <p className="text-gray-400">&copy; 2023 Wilayu</p>
          <div className="flex mt-4 space-x-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
