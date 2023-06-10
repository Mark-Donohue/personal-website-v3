import React from "react";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4">
            Hi, I&apos;m <span className="text-[#167BFF]">Mark</span>
          </h1>
          <h1 className="py-2">I&apos;m a Software Engineer</h1>
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
        </div>
      </div>
    </div>
  );
};

export default Main;
