import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { HiOutlineSparkles } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { GoTools } from "react-icons/go";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <div className="flex align-bottom">
        <h1 className="text-3xl font-bold text-[#e37a59]">
          AI for Maternal Health
        </h1>
        <HiOutlineSparkles className="inline ml-1 size-6 text-[#71c2c3]" />
      </div>
      <ul className="hidden md:flex">
        <Link to="/home" draggable="false">
          <li className="flex items-center p-4 hover:bg-[#222222] hover:text-[#e37a59] transition duration-300 cursor-default rounded-xl">
            <FaHome className="text-xl mr-2" />
            <span className="underline">Home</span>
          </li>
        </Link>
        <Link to="/team" draggable="false">
          <li className="flex items-center p-4 hover:bg-[#222222] hover:text-[#e37a59] transition duration-300 cursor-default rounded-xl">
            <ImProfile className="text-xl mr-2" />
            <span className="underline">Meet my Team</span>
          </li>
        </Link>
        <Link to="/project" draggable="false">
          <li className="flex items-center p-4 hover:bg-[#222222] hover:text-[#e37a59] transition duration-300 cursor-default rounded-xl">
            <GoTools className="text-xl mr-2" />
            <span className="underline">About Our Efforts</span>
          </li>
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[85%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-20"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#e37a59] m-4">
          AI for Maternal Health
        </h1>
        <Link to="/home" draggable="false">
          <li className="p-4 h-16 border-b border-gray-600 align-middle">
            <FaHome className="inline mr-2 size-5" />
            <span className="text-xl">Home</span>
          </li>
        </Link>
        <Link to="/team" draggable="false">
          <li className="p-4 h-16 border-b border-gray-600">
            <ImProfile className="inline mr-2 size-5" />
            <span className="text-xl">Meet my Team</span>
          </li>
        </Link>
        <Link to="/project" draggable="false">
          <li className="p-4 h-16 border-b border-gray-600">
            <GoTools className="inline mr-2 size-5" />
            <span className="text-xl">About Our Efforts</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
