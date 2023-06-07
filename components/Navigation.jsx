import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { SiLinkedin, SiGithub, SiAngellist } from "react-icons/si";

const Navigation = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      {/* Nav Bar */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-18">
        <Image
          src="/../public/assets/MD_Logo.png"
          alt="/"
          width="60"
          height="60"
          style={{ width: "auto", height: "auto" }}
        />
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-md uppercase">
              <Link href="#">About</Link>
            </li>
            <li className="ml-10 text-md uppercase">
              <Link href="#">Experience</Link>
            </li>
            <li className="ml-10 text-md uppercase">
              <Link href="#">Skills</Link>
            </li>
            <li className="ml-10 text-md uppercase">
              <Link href="#">Resume</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <IoMenu size={50} color="#167bff" />
        </div>
      </div>
      {/* Side Menu */}
      <div className="fixed left-0 top-0 w-full h-screen bg-black/50">
        <div className="fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[35%] h-screen bg-[#FAF9F6] p-6 ease-in duration-200">
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/MD_Logo.png"
                alt="/"
                width="50"
                height="50"
              />
              <div className="rounded-full shadow-md shadow-gray-450 p-3 cursor-pointer hover:bg-gray-200">
                <IoClose size={20} color="#167BFF" />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col" dir="ltr">
            <ul className="py-6">
              <Link href="/">
                <li className="py-2 text-lg uppercase hover:font-bold">About</li>
              </Link>
              <Link href="/">
                <li className="py-2 text-lg uppercase hover:font-bold">Experience</li>
              </Link>
              <Link href="/">
                <li className="py-2 text-lg uppercase hover:font-bold">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-2 text-lg uppercase hover:font-bold">Resume</li>
              </Link>
            </ul>
            <div className="pt-30">
              <div className="flex items-center justify-between my-2 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/donohuem/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-450 p-3 cursor-pointer hover:bg-gray-200">
                    <SiLinkedin size={30} />
                  </div>
                </a>
                <a
                  href="https://github.com/Mark-Donohue"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-450 p-3 cursor-pointer hover:bg-gray-200">
                    <SiGithub size={30} />
                  </div>
                </a>
                <a
                  href="https://wellfound.com/u/mark-donohue-11"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-450 p-3 cursor-pointer hover:bg-gray-200">
                    <SiAngellist size={30} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
