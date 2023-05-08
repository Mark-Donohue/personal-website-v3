import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

const Navigation = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/../public/assets/MD.png" alt="/" width="70" height="40" />
      </div>
      <div>
        <ul className="hidden md:flex">
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href="#">About</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href="#">Experience</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href="#">Skills</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href="#">Resume</Link>
          </li>
        </ul>
        <div className="md:hidden">
          <HiMenu/>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
