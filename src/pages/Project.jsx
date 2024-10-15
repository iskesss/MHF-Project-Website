import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

const Project = () => {
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
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 text-gray-200">
        <div>
          <h1 className="text-2xl mb-3 italic">
            The timeline below has been determined by{" "}
            <a
              className="inline text-[#71c2c3]"
              href="https://docs.google.com/spreadsheets/d/1opVHsUjXMfV4cx-k-cq1U-1XAIddeZzvp4up_54tyBM/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              this Gantt Chart
            </a>
            .
          </h1>
          <h2 className="text-xl text-[#e37a59]">
            —&gt; Phase 1, lead by David Oct 4 — Oct 11
          </h2>
          <p className="italic text-gray-300">
            "Research. Brainstorm. Chart Course."
          </p>
          <p className="my-1 mx-5">
            During our meeting with Dr. Mahni, we chose a general direction to
            pursue: Deep Learning for Ultrasound Imaging. This requires ML
            knowledge that neither me, David, nor Dewa currently possess, and so
            we each committed to reading one third of the research paper{" "}
            <a
              className="inline italic text-[#71c2c3]"
              href="https://arxiv.org/abs/2201.12260"
              target="_blank"
              rel="noopener noreferrer"
            >
              A Review on Deep-Learning Algorithms for Fetal Ultrasound-Image
              Analysis
            </a>
            , and self-teaching wherever necessary. We're each preparing to
            present our understanding to Dr. Mahni on Friday, Oct 11th. For me
            personally, the YouTube channel 3Blue1Brown has been instrumental in
            offering an intuitive understanding of the mechanisms and
            mathematics which underlie Deep Learning. I'm thrilled to apply this
            knowledge to future endeavors!
            <span className="inline relative">
              {isVisible && (
                <span className="absolute top-[-1] right-[-1] text-white">
                  _
                </span>
              )}
            </span>
          </p>
          <h2 className="text-xl text-gray-400">
            Phase 2, lead by Dewa: Oct 11 - Oct 16
          </h2>
          <p className="italic text-gray-400">"Select an Ultrasound Dataset"</p>
          <p className="my-1 mx-5"></p>
          <h2 className="text-xl text-gray-400">
            Phase 3, lead by Me: Oct 16 - Nov 10
          </h2>
          <p className="italic text-gray-400">"Implement Solution"</p>
          <p className="my-1 mx-5"></p>
          <h2 className="text-xl text-gray-400">
            Phase 4, lead by Dewa: Nov 10 - Nov 19
          </h2>
          <p className="italic text-gray-400">
            "Finalize the Product & Share Findings"
          </p>
          <p className="my-1 mx-5"></p>
        </div>
      </div>
    </>
  );
};

export default Project;