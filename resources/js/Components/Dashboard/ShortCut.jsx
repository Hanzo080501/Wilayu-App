import { Link } from '@inertiajs/react';
import Title from './Title';
import { Links } from './Links';
import { IoIosArrowForward } from 'react-icons/io';

const ShortCut = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg dark:bg-gray-600">
      <Title>ShortCut</Title>

      {Links.map((link, i) => (
        <div key={i} className="flex items-center justify-between rounded-sm cursor-pointer">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-8 h-8 p-2 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-gray-300">
              <link.icon />
            </span>
            {/* {console.log(link.icon)} */}
            <Link href={link.href}>
              <h3 className="font-medium dark:text-gray-300">{link.name}</h3>
            </Link>
          </div>
          <span className="p-2 transition-all duration-500 bg-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-300 hover:mr-3">
            <IoIosArrowForward />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ShortCut;
