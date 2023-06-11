import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

const Navigation = () => {
  const [sideMenu, setSideMenu] = useState(false);

  const handleSideMenu = () => {
    setSideMenu(!sideMenu);
  };

  return (
    <div className="fixed w-full h-20 z-[100]">
      {/* Nav Bar */}
      <div className="flex items-center w-full h-full px-2 2xl:px-18">
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-md uppercase hover:text-[#167BFF]">
              <Link href="#">About</Link>
            </li>
            <li className="ml-10 text-md uppercase hover:text-[#167BFF]">
              <Link href="#">Experience</Link>
            </li>
            <li className="ml-10 text-md uppercase hover:text-[#167BFF]">
              <Link href="#">Skills</Link>
            </li>
            <li className="ml-10 text-md uppercase hover:text-[#167BFF]">
              <Link href="#">Resume</Link>
            </li>
          </ul>
        </div>
        <div onClick={handleSideMenu} className="md:hidden cursor-pointer pl-2">
          <IoMenu size={50} color="#167BFF" />
        </div>
      </div>

      {/* Side Menu */}
      <div
        className={
          sideMenu ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50" : ""
        }
      >
        <div
          className={
            sideMenu
              ? "fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[35%] h-screen bg-[#FAF9F6] p-6 ease-in duration-200"
              : "fixed left-[-100%] top-0 p-6 ease-in duration-200"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div
                onClick={handleSideMenu}
                className="rounded-full shadow-md shadow-gray-450 p-3 cursor-pointer hover:bg-gray-200"
              >
                <IoClose size={20} color="#167BFF" />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col place-content-center">
            <ul className="py-14 text-center">
              <Link href="/">
                <li className="py-2 text-lg uppercase hover:text-[#167BFF]">
                  About
                </li>
              </Link>
              <Link href="/">
                <li className="py-2 text-lg uppercase hover:text-[#167BFF]">
                  Experience
                </li>
              </Link>
              <Link href="/">
                <li className="py-2 text-lg uppercase hover:text-[#167BFF]">
                  Skills
                </li>
              </Link>
              <Link href="/">
                <li className="py-2 text-lg uppercase hover:text-[#167BFF]">
                  Resume
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
