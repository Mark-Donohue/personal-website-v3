import React from "react";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2">
      <Image src="/../public/assets/MD.png" alt="/" width="70" height="40" />
      </div>
    </div>
  );
};

export default Navigation;