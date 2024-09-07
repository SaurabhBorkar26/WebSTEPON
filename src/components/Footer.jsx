import React from 'react';
import {  FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-[#534998] text-[#ffffff] py-10 md:px-12">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        {/* About Section */}
        <div className="px-4 lg:px-0 lg:col-span-1">
          <h2 className="font-main text-h2">STEP ON</h2>
          <p className="mt-2">
            STEP ON aims to promote sustainable societal solutions through enhanced use of leading-edge technology.
          </p>
          <div className="mt-4">
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/stepon.tech/"
                className="bg-main border border-gray-400 rounded-full h-10 w-10 flex justify-center items-center text-gray-300 hover:border-white hover:text-[#ffffff] transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/103721359"
                className="bg-main border border-gray-400 rounded-full h-10 w-10 flex justify-center items-center text-gray-300 hover:border-white hover:text-[#ffffff] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="px-4 lg:px-0 lg:col-span-1">
          <h3 className="text-lg font-bold mb-3">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-main">Android Development</li>
            <li className="hover:text-main">Web Development</li>
            <li className="hover:text-main">UI/UX Design</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="px-4 lg:px-0 lg:col-span-1 flex flex-col items-center lg:items-start lg:mt-0 mt-6">
          <h3 className="text-lg font-bold mb-3">Contact Us</h3>
          <p className="text-center lg:text-left">
            528 Mascarenhas Wado, Goa Velha,<br />
            Tiswadi, Goa 403108<br />
            India
          </p>
          <div className="mt-4">
            <p><strong>Phone:</strong> +91 8390930610</p>
            <p><strong>Email:</strong> info@stepontech.in</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>
          © Copyright STEP ON. All Rights Reserved<br />
          Designed by STEP ON
        </p>
      </div>
    </footer>
  );
}

export default Footer;
