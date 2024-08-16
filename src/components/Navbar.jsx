import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logoS from "../images/logo.png";

const ROUTES = [
  { path: "#home", label: "Home" },
  { path: "#about", label: "About" },
  { path: "#services", label: "Services" },
  { path: "#portfolio", label: "Portfolio" },
  { path: "#team", label: "Team" },
  { path: "#blog", label: "Blog" },
  { path: "#contact", label: "Contact" },
];

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-10 fixed top-0 w-full flex flex-wrap justify-between items-center lg:px-24 pb-4 ${
        isScrolled ? "bg-transparent" : "bg-[#063970]"
      } h-20 transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between w-full lg:w-auto lg:px-4">
        <div className="flex items-center justify-center lg:justify-start transition-all duration-300 ease-in-out">
          <img
            src={logoS}
            alt="Impact Logo"
            className="w-20 h-20 mr-4 lg:mr-6 transition-all duration-300 ease-in-out"
          />
          <h1
            className={`text-3xl font-main lg:text-2xl transition-all duration-300 ease-in-out ml-4 ${
              isScrolled ? "text-[#063970]" : "text-white"
            }`}
          >
            STEP ON
          </h1>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="focus:ring-2 focus:ring-gray-200 p-2 rounded-lg transition-all duration-300 ease-in-out"
          >
            <RxHamburgerMenu size={25} />
          </button>
        </div>
      </div>

      {/* Menu List */}
      <div
        className={`${
          !isMenuOpen && "hidden"
        } w-full lg:w-auto lg:block transition-all duration-300 ease-in-out`}
      >
        <ul
          className={`lg:space-x-10 lg:bg-transparent rounded-lg md:py-4 pt-14 flex flex-col lg:flex-row text-p md:font-700 w-full px-10 ${
            isScrolled ? "bg-transparent" : "bg-[#063970]"
          }`}
        >
          {ROUTES.map(({ path, label }, i) => (
            <li
              className={`lg:hover:bg-transparent hover:text-second py-2 cursor-pointer rounded ${
                isScrolled ? "bg-transparent" : "bg-[#063970]"
              } ${
                i === 0
                  ? " lg:bg-transparent text-[#063970] transition duration-1000 ease-in-out"
                  : "hover:text-main transition duration-1000 ease-in-out"
              }`}
              key={path}
            >
              <a
                href={path}
                style={{
                  backgroundColor: "transparent",
                  color: isScrolled ? "#063970" : "#ffffff99",
                  transition: "color 1000ms ease-in-out",
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;