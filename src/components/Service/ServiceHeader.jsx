import React from 'react';

const TeamHeader = ({ title, description }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold mb-4 text-[#534998]">{title}</h2>
      <p className="text-lg leading-relaxed max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default TeamHeader;
