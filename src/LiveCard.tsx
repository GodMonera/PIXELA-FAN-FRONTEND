import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const LiveCard: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition-transform hover:scale-105">
      <img
        className="rounded-t-lg w-full h-32 object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default LiveCard;
