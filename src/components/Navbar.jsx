import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logoS from "../images/logo.png";
import { Link, useLocation } from "react-router-dom"; // Import Link for routing

const ROUTES = [
  { path: "/", label: "Home" }, // Home page route
  { path: "/about", label: "About" }, // Route to About page
  { path: "/#services", label: "Services" }, // Anchor link for Services section on Home page
  { path: "/#contact", label: "Contact" }, // Anchor link for Contact section on Home page
];

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { hash } = useLocation(); // Get hash from URL

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const scrollToSection = (sectionId) => {
    document.querySelector(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (hash) {
      scrollToSection(hash);
    }
  }, [hash]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-10 fixed top-0 w-full flex flex-wrap justify-between items-center lg:px-24 pb-4 ${
        isScrolled ? "bg-[#534998]" : "bg-[#EEF1F6]"
      } h-20 transition-all duration-100 ease-in-out`}
    >
      <div className="flex items-center justify-between w-full lg:w-auto lg:px-4">
        <div className="flex items-center justify-center lg:justify-start transition-all duration-100 ease-in-out">
          <img
            src={logoS}
            alt="STEP ON Logo"
            className="w-20 h-20 mr-4 lg:mr-6 transition-all duration-100 ease-in-out"
          />
          <h1
            className={`text-3xl font-main lg:text-2xl transition-all duration-100 ease-in-out ml-2 font-bold ${
              isScrolled ? "text-white" : "text-[#534998]"
            }`}
          >
            STEP ON
          </h1>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="focus:ring-2 focus:ring-gray-200 p-2 rounded-lg transition-all duration-100 ease-in-out"
          >
            <RxHamburgerMenu size={25} />
          </button>
        </div>
      </div>

      {/* Menu List */}
      <div
        className={`${
          !isMenuOpen && "hidden"
        } w-full lg:w-auto lg:block transition-all duration-100 ease-in-out`}
      >
        <ul
          className={`lg:space-x-10 lg:bg-transparent rounded-lg md:py-4 pt-14 flex flex-col lg:flex-row text-p md:font-700 w-full px-10 ${
            isScrolled ? "bg-[#534998]" : "bg-[#EEF1F6]"
          }`}
        >
          {ROUTES.map(({ path, label }, i) => (
            <li
              className={`lg:hover:bg-transparent hover:text-second py-2 cursor-pointer rounded ${
                isScrolled ? "bg-[#534998]" : "bg-[#EEF1F6]"
              } ${
                i === 0
                  ? "lg:bg-transparent text-white transition duration-100 ease-in-out"
                  : "hover:text-main transition duration-100 ease-in-out"
              }`}
              key={path}
            >
              <Link
                to={path}
                className={`${
                  isScrolled ? "text-white" : "text-[#534998]"
                } transition-colors duration-100 ease-in-out`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
