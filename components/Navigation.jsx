import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

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
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[75%] bg-[#FAF9F6] h-screen p-10 ease-in duration-200">
          <div className="relative">
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/MD_Logo.png"
                alt="/"
                width="50"
                height="50"
              />
              <div className="rounded-full shadow-md shadow-gray-450 p-3 cursor-pointer">
                <IoClose size={20} color="#167bff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
