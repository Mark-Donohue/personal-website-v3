import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { MdMenu } from "react-icons/md"

const Navigation = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-18">
        <Image src="/../public/assets/MDLogo2.png" alt="/" width="65" height="70" />
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
        <div className="md:hidden hover:b">
          <IoMenu size={65} color="#167bff"/>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
