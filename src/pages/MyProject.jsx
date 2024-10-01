import React from "react";
import Navbar from "../components/Navbar";

const MyProject = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 text-gray-200">
        <p className="text-xl">
          Leveraging Artificial Intelligence under the guidance of{" "}
          <a
            href="https://www.linkedin.com/in/mshayganfar/"
            className="text-[#71c2c3]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dr. Mahni Shayganfar
          </a>
          . Specifics to be revealed at a later time.
        </p>
      </div>
    </>
  );
};

export default MyProject;
