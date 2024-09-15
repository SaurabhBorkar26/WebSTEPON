/*eslint-disable*/
import React from 'react';
import {  FaLinkedin } from "react-icons/fa";
import { FaInstagram,FaXTwitter } from "react-icons/fa6";

function TeamCard({ name, position, image, socialLinks }) {
  return (
    <div className="border border-gray-300 p-6 sm:p-8 w-full max-w-sm mx-auto shadow-lg rounded-xl mt-6">
      <img
        className="w-24 h-24 sm:w-40 sm:h-40 object-cover rounded-full mx-auto"
        src={image}
        alt={`${name}'s photo`}
      />
      <h1 className="font-main text-xl sm:text-2xl mt-4 text-center">{name}</h1>
      <p className="font-secondary italic text-[#6c757d] tracking-tighter text-center text-base sm:text-lg">
        {position}
      </p>
      <div className="w-full flex justify-center mt-4 text-xl sm:text-2xl text-[#6c757d]">
        {socialLinks.twitter && (
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 border border-gray-500 rounded-full mx-1 sm:mx-2 hover:bg-gray-100">
            <FaXTwitter />
          </a>
        )}
       
        {socialLinks.instagram && (
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 border border-gray-500 rounded-full mx-1 sm:mx-2 hover:bg-gray-100">
            <FaInstagram />
          </a>
        )}
        {socialLinks.linkedin && (
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 border border-gray-500 rounded-full mx-1 sm:mx-2 hover:bg-gray-100">
            <FaLinkedin />
          </a>
        )}
      </div>
    </div>
  );
}

export default TeamCard;
