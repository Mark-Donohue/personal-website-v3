import React from "react";
import { GrMail } from "react-icons/gr";
import { SiLinkedin, SiGithub, SiAngellist } from "react-icons/si";

const Main = () => {
  return (
    <div className="w-full h-screen text-center pt-16">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 pt-2 flex justify-center items-center">
        <div>
          <h1 className="py-2">
            Hi, I&apos;m <span className="text-[#167BFF]">Mark</span>
          </h1>
          <h1>I&apos;m a Software Engineer</h1>
          <p className="py-4 max-w-[70%] m-auto">
            I specialize in back-end API development but have experience with
            front-end technologies as well. Currently, I&apos;m focused on
            designing and building efficient and secure APIs at{" "}
            <a
              href="https://www.mediaocean.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#167BFF]"
            >
              Mediaocean
            </a>
            .
          </p>
          <div className="flex items-center justify-between max-w-[265px] m-auto py-4">
            <div className="rounded-lg shadow-lg shadow-gray-300 p-3 cursor-pointer hover:bg-gray-200">
              <SiLinkedin size={30} />
            </div>
            <div className="rounded-lg shadow-lg shadow-gray-300 p-3 cursor-pointer hover:bg-gray-200">
              <SiGithub size={30} />
            </div>
            <div className="rounded-lg shadow-lg shadow-gray-300 p-3 cursor-pointer hover:bg-gray-200">
              <SiAngellist size={30} />
            </div>
            <div className="rounded-lg shadow-lg shadow-gray-300 p-3 cursor-pointer hover:bg-gray-200">
              <GrMail size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
