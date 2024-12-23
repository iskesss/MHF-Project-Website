import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingShape from "../components/FloatingShape";
import { useState, useEffect } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(!isVisible);
    }, 500);

    return () => clearInterval(intervalId);
  }, [isVisible]);
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row max-w-[1200px] mx-auto px-4 text-gray-200 relative">
        <div className="lg:m-4">
          <h1 className="text-xl mb-3">
            Welcome 🤙 I'm{" "}
            <span className="inline-block relative">
              <a
                href="https://www.linkedin.com/in/jordan-bouret/"
                className="text-[#e37a59]"
              >
                Jordan Bouret
              </a>
              {isVisible && (
                <span className="absolute top-0 right-[-1] text-[#e37a59]">
                  _
                </span>
              )}
            </span>
          </h1>

          <p className="text-lg mb-3 pb-3 border-b border-gray-300">
            I built this site to share the impactful Deep Learning work I'm
            doing for the{" "}
            <a
              href="https://maternalhealthfoundation.org/"
              className="text-[#71c2c3]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maternal Health Foundation
            </a>{" "}
            (MHF), an organization dedicated to preventing and treating
            childbirth-related injuries in underdeveloped regions. Our world has
            the technology to solve these problems, we just need to apply it.
          </p>

          <div className="flex">
            <ul>
              <p className="text-xl mb-2 text-[#e37a59]">
                My Efforts in Contributing to this Project
              </p>
              <li className="mb-1">
                - Self-taught the fundamentals of Deep Learning (shoutout
                3Blue1Brown)
              </li>
              <li className="mb-1">
                - Studied{" "}
                <a
                  className="inline italic text-[#71c2c3]"
                  href="https://arxiv.org/abs/2201.12260"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  A Review on Deep-Learning Algorithms for Fetal
                  Ultrasound-Image Analysis
                </a>
                , self-teaching wherever necessary
              </li>
              <li className="mb-1">
                - Acquired an open-source ultrasound image dataset for training
                and testing of our Deep Learning model
              </li>
              <li className="mb-1">
                - Orchestrated the research and selection of an ML tech stack
                which best suited our application (PyTorch, Roboflow,
                Ultralytics YOLOv11, SAM)
              </li>
              <li>
                - Served as project manager and repository/codebase admin during
                our prototyping and development phase, managing version control
                & code integrity
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-200 my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto transition-transform duration-300 sm:hover:scale-105 sm:hover:shadow-2xl">
          <div className="relative h-40">
            <img
              className="absolute h-full w-full object-cover"
              src="SCU.jpg"
            />
          </div>
          <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
            <img
              className="object-cover scale-150 w-full h-full"
              src="jordy.jpg"
              alt="A devilishly handsome young man out in nature"
            />
          </div>
          <div className="mt-12">
            <h1 className="text-2xl text-[#b6644c] text-center font-semibold">
              Jordan Bouret
            </h1>
            <p className="text-xs text-gray-600 text-center">
              Honors CS @ SCU | SWE Intern @ Polycade | Prev AI @ RRSSI
            </p>
          </div>
          <div className="mt-6 pt-3 flex flex-wrap mx-6 border-t border-gray-400 justify-evenly">
            {/* <!-- Github --> */}
            <a
              href="https://github.com/iskesss"
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
              href="https://www.linkedin.com/in/jordan-bouret/"
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
            {/* <!-- Instagram --> */}
            <a
              href="https://www.instagram.com/jordan_bouret/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#c13584" }}
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* <!-- Youtube --> */}
            <a
              href="https://www.youtube.com/@iskess2134"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#ff0000" }}
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>
        <FloatingShape
          shape="rounded-md"
          color="bg-[#0081FB]"
          size="w-40 h-10"
          animationDelay={0}
          text="☆ Meta SAM"
          className="z-10 outline absolute lg:bottom-0 lg:right-32 bottom-80 right-auto"
        />
        <FloatingShape
          shape="rounded-lg"
          color="bg-[#e37a59]"
          size="w-40 h-10"
          text="☆ Pytorch"
          animationDelay={1}
          className="outline absolute lg:bottom-0 lg:right-64 bottom-64 right-44"
        />
        <FloatingShape
          shape="rounded-lg"
          color="bg-green-600"
          size="w-40 h-10"
          text="☆ YOLOv11"
          animationDelay={2}
          className="outline absolute lg:bottom-0 lg:right-0 bottom-72 right-5"
        />
      </div>

      <Footer />
    </>
  );
};

export default Home;
