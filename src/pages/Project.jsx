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
          <h2 className="text-xl font-bold">
            ✔ Phase 1, lead by David Oct 4 - Oct 11
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
          </p>
          <h2 className="text-xl font-bold">
            ✔ Phase 2, lead by Dewa: Oct 11 - Oct 16
          </h2>
          <p className="italic">"Select an Ultrasound Dataset"</p>
          <p className="my-1 mx-5">
            After thorough analysis of sections V-VII of the research paper, I
            presented my findings to the group, and engaged in a lengthy
            discussion of theirs. Although we're yet to decide which specific
            ultrasound-related problem to solve, we've decided our technical
            solution should involve an image segmentation model (see right image
            below). This offers us a vast range of problems to address without
            overcomplicating the project. We plan to brainstorm again on the
            16th, and each bring a viable dataset, the best of which we'll
            actually use to train our model.
            <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-4 items-center p-4">
              <img
                src="whiteboard.png"
                className="w-[45%] h-auto rounded-lg shadow-md border border-gray-200"
              ></img>
              <img
                src="segmentation.png"
                className="w-[45%] h-auto rounded-lg shadow-md border border-gray-200"
              ></img>
            </div>
            <p>
              UPDATE: During the Oct 16th meeting we decided to continue forward
              with the{" "}
              <a
                className="inline text-[#71c2c3]"
                href="https://paperswithcode.com/dataset/hc18"
                target="_blank"
                rel="noopener noreferrer"
              >
                HC18 Dataset
              </a>{" "}
              for reasons outlined in{" "}
              <a
                className="inline text-[#71c2c3]"
                href="https://docs.google.com/document/d/1eNBgMBNvjiSuMoIiptBFiWZ2oree6l7EVZ7ez8o6N7o/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                this document
              </a>{" "}
              .
            </p>
          </p>
          <h2 className="text-xl font-bold text-[#e37a59]">
            -&gt; Phase 3, lead by Me: Oct 16 — Nov 10
          </h2>
          <p className="italic">"Implement Solution"</p>
          <p className="my-1 mx-5">
            <p className="font-bold">Action Items after Oct 16th Meeting:</p>
            <ul>
              <li>
                - Prepare HC18 dataset for use - organize training/testing sets
                with images and corresponding segmentation masks
              </li>
              <li>
                - Research existing PyTorch implementations of U-Net or similar
                architectures for brain MRI segmentation
              </li>
              <li>
                - Draft email to Prof. Mahni, informing him of dataset choice
                (HC18) and segmentation approach
              </li>
              <li>
                - Search for additional brain MRI datasets compatible with
                PyTorch for potential use in project
              </li>
              <li>
                - We'll be meeting next Thursday (Oct 24th) to discuss coding
                foundations and strategies for prototyping and implementing our
                model with PyTorch
              </li>
            </ul>
            <p className="pt-5">
              <a
                className="inline italic text-[#71c2c3]"
                href="https://docs.google.com/document/d/1wSPy_4-SMZWxCUXtHaT_4B7Piav_lhtyml-MwT_Zzik/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Here's our most recent group reflection on the project as a
                whole
              </a>
              , which helped us clarify our goals and impact for the Maternal
              Health Foundation. It strengthened our understanding of the social
              significance of using AI in maternal healthcare, especially for
              underserved communities, and highlighted the importance of our
              partnership with Dr. Mahni. This process reinforced our commitment
              to creating a solution with meaningful real-world benefits.
            </p>
            <p className="pt-5">
              Below is our GitHub Kanban board and technical Gantt chart (as of
              Oct 29th), not to be confused with the broader project Gantt chart
              linked at the top of this page. We're currently comparing
              different YOLO models (e.g. v8, v9, v10) in hopes to find an
              effective balance between speed and accuracy.
              <span className="inline relative">
                {isVisible && (
                  <span className="absolute top-[-1] right-[-1] text-white">
                    _
                  </span>
                )}
              </span>
            </p>
            <div className="flex flex-col lg:justify-center items-center p-4">
              <img
                src="kanban.png"
                className="w-[85%] h-auto m-1 rounded-lg shadow-md border border-gray-200"
              ></img>
              <img
                src="roadmap.png"
                className="w-[85%] h-auto m-1 rounded-lg shadow-md border border-gray-200"
              ></img>
            </div>
          </p>
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
