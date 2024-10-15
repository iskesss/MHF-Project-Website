import React from "react";
import Navbar from "../components/Navbar";

const Team = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row lg:mx-auto max-w-[1500px] ">
        <div className="bg-gray-300 my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative h-40">
            <img
              className="absolute h-full w-full object-cover"
              src="mhf_banner.jpg"
            />
          </div>
          <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
            <img
              className="object-cover scale-150 w-full h-full"
              src="mahni.jpg"
            />
          </div>
          <div className="mt-12">
            <h1 className="text-2xl text-[#de4838] text-center font-semibold">
              Mahni Shayganfar, PhD, MBA
            </h1>
            <p className="text-xs text-gray-600 text-center">
              Chief AI Officer - Maternal Health Fund
            </p>
          </div>
          <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t border-gray-400 justify-evenly">
            {/* <!-- Github --> */}
            <a
              href="https://github.com/mshayganfar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#333" }}
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* <!-- Linkedin --> */}
            <a
              href="https://www.linkedin.com/in/mshayganfar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#0077b5" }}
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------------------------- */}
        <div className="bg-gray-200 my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative h-40">
            <img
              className="absolute h-full w-full object-cover"
              src="diwa_background.jpg"
            />
          </div>
          <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
            <img
              className="object-cover scale-150 w-full h-full"
              src="diwa.jpg"
            />
          </div>
          <div className="mt-12">
            <h1 className="text-2xl text-[#b6644c] text-center font-semibold">
              Dewa Khushzad
            </h1>
            <p className="text-xs text-gray-600 text-center">
              Computer Science Student @ SCU
            </p>
          </div>
          <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t border-gray-400 justify-evenly">
            {/* <!-- Github --> */}
            <a
              href="https://github.com/dekh20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#333" }}
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* <!-- Linkedin --> */}
            <a
              href="https://www.linkedin.com/in/dewa-khushzad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#0077b5" }}
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------------------------- */}
        <div className="bg-gray-200 my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative h-40">
            <img
              className="absolute h-full w-full object-cover"
              src="david_background.jpg"
            />
          </div>
          <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
            <img
              className="object-cover scale-150 w-full h-full"
              src="david.jpg"
            />
          </div>
          <div className="mt-12">
            <h1 className="text-2xl text-[#b6644c] text-center font-semibold">
              David Nguyen
            </h1>
            <p className="text-xs text-gray-600 text-center">
              CS Student @ Santa Clara University | Technical Intern @ Intel
            </p>
          </div>
          <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t border-gray-400 justify-evenly">
            {/* <!-- Github --> */}
            <a
              href="https://github.com/danguyenn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#333" }}
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* <!-- Linkedin --> */}
            <a
              href="https://www.linkedin.com/in/danguyenn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#0077b5" }}
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
