import React from 'react';

const ServiceCard = ({ title, description, image, link }) => {
  return (
    <a href={link} className="block max-w-md mx-auto mb-3 shadow-lg border border-gray-200 rounded-lg bg-[#534998] hover:shadow-xl transition-shadow duration-200">
      {/* The entire card is now wrapped in an anchor tag */}
      <div className="w-full h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h5 className="text-lg font-bold text-white">{title}</h5>
        <p className="text-white">{description}</p>
        <p className="text-gray-400 text-sm">
          <small>Last updated 3 mins ago</small>
        </p>
      </div>
    </a>
  );
};

export default ServiceCard;
