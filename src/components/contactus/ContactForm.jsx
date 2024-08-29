/* eslint-disable */
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BsClock, BsPhone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

function ContactForm() {
  return (
    <div className="lg:flex lg:w-full lg:space-x-0 lg:px-16">
      <div className="bg-[#534998] space-y-4 py-4 text-main font-secondary m-4 md:m-12 lg:m-0 rounded-xl lg:w-[30%]">
        <div className="bg-[#534998] mx-4 flex p-4 space-x-3 rounded-xl h-24 shadow-lg transform hover:translate-y-[-2px] transition-transform duration-200 ease-in-out">
          <div className="bg-[#a6a1ce] rounded-full flex items-center justify-center h-12 w-12 hover:bg-white hover:text-green-600 lg:w-16 lg:h-16">
            <IoLocationOutline size={25} />
          </div>
          <div>
            <p className="text-white">
              <span className="font-semibold text-lg">Location:</span>
              <br />
              528 Mascarenhas Wado, Goa Velha, Goa 403108
            </p>
          </div>
        </div>
        <div className="bg-[#534998] mx-4 flex p-4 space-x-3 rounded-xl h-24 shadow-lg transform hover:translate-y-[-2px] transition-transform duration-200 ease-in-out">
          <div className="bg-[#a6a1ce] rounded-full flex items-center justify-center h-12 w-12 hover:bg-white hover:text-green-600">
            <MdOutlineMail size={25} />
          </div>
          <div>
            <p className="text-white">
              <span className="font-semibold text-lg">Email:</span>
              <br />
              info@stepontech.in
            </p>
          </div>
        </div>
        <div className="bg-[#534998] mx-4 flex p-4 space-x-3 rounded-xl h-24 shadow-lg transform hover:translate-y-[-2px] transition-transform duration-200 ease-in-out">
          <div className="bg-[#a6a1ce] rounded-full flex items-center justify-center h-12 w-12 hover:bg-white hover:text-green-600">
            <BsPhone size={25} />
          </div>
          <div>
            <p className="text-white">
              <span className="font-semibold text-lg">Call:</span>
              <br />
              +918390930610
            </p>
          </div>
        </div>
        <div className="bg-[#534998] mx-4 flex p-4 space-x-3 rounded-xl h-24 shadow-lg transform hover:translate-y-[-2px] transition-transform duration-200 ease-in-out">
          <div className="bg-[#a6a1ce] rounded-full flex items-center justify-center h-12 w-12 hover:bg-white hover:text-green-600">
            <BsClock size={25} />
          </div>
          <div>
            <p className="text-white">
              <span className="font-semibold text-lg">Open Hours:</span>
              <br />
              Mon-Sat: 10:00AM - 16:00PM
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#a6a1ce] mx-4 px-8 pt-6 pb-10 space-y-6 md:mx-12 lg:w-[70%] shadow-xl transform hover:translate-y-[-2px] transition-transform duration-200 ease-in-out rounded-xl">
        <div className="md:flex md:space-x-5 space-y-6">
          <input
            type="text"
            className="w-full h-12 px-3 border rounded-md focus:outline-none focus:border-green-500 md:mt-6 shadow-inner"
            placeholder="Your name"
          />
          <input
            type="email"
            className="w-full h-12 mt-2 px-3 border rounded-md focus:outline-none focus:border-green-500 shadow-inner"
            placeholder="Your email"
          />
        </div>
        <input
          type="text"
          className="w-full h-12 mt-2 px-3 border rounded-md focus:outline-none focus:border-green-500 shadow-inner"
          placeholder="Subject"
        />
        <textarea
          className="w-full h-40 mt-2 px-3 border rounded-md focus:outline-none focus:border-green-500 shadow-inner resize-none"
          placeholder="Your message"
        />
        <button
          type="button"
          className="bg-[#534998] text-white rounded-md px-4 py-2 hover:bg-[#2da074] shadow-lg transform hover:translate-y-[-2px] transition-transform duration-200 ease-in-out"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
