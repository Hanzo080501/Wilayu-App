import React from 'react';

const ProfileCard = ({ name, position, image }) => {
  return (
    <div className="overflow-hidden transition duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl dark:bg-gray-800 dark:hover:bg-gray-700">
      <img src={image} alt={name} className="object-cover w-full h-48 md:h-56 lg:h-64" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">{name}</h2>
        <p className="text-gray-600 dark:text-gray-400">{position}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
