import Image from "next/image";
import React from "react";
import Headshot from "../public/assets/Headshot.jpg";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        {/* About Text */}
        <div className="col-span-2">
          <h2>About</h2>
          <p>I started programming my sophomore year of college. </p>
          <p>TODO - Fill out this blurb</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {/* About Image */}
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-300 rounded-xl flex items-center justify-center p-2">
          <Image src={Headshot} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
