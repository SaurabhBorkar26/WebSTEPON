import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import heroImg from "../../images/home1.jpg"; // Import the image

export default function HomeTitle() {
  return (
    <>
      {/* Apply the background image using inline styles */}
      <div
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
        className="relative flex items-center justify-center bg-cover bg-center min-h-screen w-full"
      >
        <div className="w-full flex flex-col items-center justify-center lg:flex-row-reverse h-full lg:px-24">
          {/* Start header info */}
          <div className="flex flex-col text-center items-center py-10 px-4 md:px-6 w-full lg:w-9/12 lg:items-start lg:ml-10">
            <h1 className="text-[32px] text-white md:text-[40px] lg:text-[52px] font-abril leading-tight">
              Welcome to STEP ON
            </h1>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white text-opacity-110 font-default text-p py-3 max-w-[750px] text-center lg:text-left leading-relaxed">
              STEP ON aims to promote sustainable societal solutions through
              enhanced use of leading-edge technology.
            </p>
            <div className="flex justify-between py-3 w-full max-w-xs md:max-w-sm lg:max-w-md">
              {/* You can add buttons or additional content here */}
            </div>
          </div>
        </div>

        {/* Adjust the height of the wave */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-[100px] md:h-[112px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              {/* Only keep the darkest wave */}
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
