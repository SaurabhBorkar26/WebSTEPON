import React from 'react';

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="max-w-md mx-auto mb-3 shadow-lg border border-gray-200 rounded-lg bg-[#534998]">
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
        <div className="row-span-1 col-span-1">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg" />
        </div>
        <div className="row-span-1 col-span-1 p-4">
          <h5 className="text-lg font-bold text-white">{title}</h5>
          <p className="text-white">{description}</p>
          <p className="text-gray-400 text-sm"><small>Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
