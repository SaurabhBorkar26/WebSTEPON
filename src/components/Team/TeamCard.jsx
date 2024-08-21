/*eslint-disable*/
import React from 'react';

import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function TeamCard({ name, position, image }) {
  return (
    <div className="border border-gray-300 p-8 w-full max-w-sm mx-auto shadow-lg rounded-xl mt-6">
      <img
        className="w-40 h-40 object-cover rounded-full mx-auto"
        src={image}
        alt={`${name}'s photo`}
      />
      <h1 className="font-main text-2xl mt-4 text-center">{name}</h1>
      <p className="font-secondary italic text-[#6c757d] tracking-tighter text-center text-lg">
        {position}
      </p>
      <div className="w-full flex justify-center mt-4 text-2xl text-[#6c757d]">
        <a href="#" className="p-2 border border-gray-500 rounded-full mx-2 hover:bg-gray-100">
          <FaTwitter />
        </a>
        <a href="#" className="p-2 border border-gray-500 rounded-full mx-2 hover:bg-gray-100">
          <FaFacebook />
        </a>
        <a href="#" className="p-2 border border-gray-500 rounded-full mx-2 hover:bg-gray-100">
          <FaInstagram />
        </a>
        <a href="#" className="p-2 border border-gray-500 rounded-full mx-2 hover:bg-gray-100">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default TeamCard;
