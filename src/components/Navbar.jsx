import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logoS from "../images/logo.png";
import { Link, useLocation } from "react-router-dom";

const ROUTES = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/#services", label: "Services" },
  { path: "/#contact", label: "Contact" },
];

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { hash } = useLocation();

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
      className={`z-10 fixed top-0 w-full flex flex-col lg:flex-row justify-between items-center lg:px-24 pb-4 ${
        isScrolled ? "bg-[#534998]" : "bg-transparent"
      } h-24 transition-all duration-100 ease-in-out`}
    >
      <div className="flex items-center justify-between w-full lg:w-auto lg:px-4">
        <div className="flex items-center justify-center lg:justify-start transition-all duration-100 ease-in-out">
          <img
            src={logoS}
            alt="STEP ON Logo"
            className="w-24 h-24 mr-4 lg:mr-6 transition-all duration-100 ease-in-out" // Increased logo size
          />
          <div className="flex flex-col items-center lg:items-start">
            <h1
              className={`text-3xl font-bold lg:text-2xl transition-all duration-100 ease-in-out ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              STEP ON
            </h1>
            <p
              className={`text-sm lg:text-xs text-gray-200 ${
                isScrolled ? "text-gray-300" : "text-gray-300"
              }`}
            >
              Sustainable Societal Solutions
            </p>
          </div>
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
            isScrolled ? "bg-[#534998]" : "bg-transparent"
          }`}
        >
          {ROUTES.map(({ path, label }, i) => (
            <li
              className={`lg:hover:bg-transparent  hover:text-second py-2 cursor-pointer rounded ${
                isScrolled ? "bg-[#534998]" : "bg-transparent"
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
                  isScrolled ? "text-white" : "text-white"
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
