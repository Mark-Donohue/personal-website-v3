import React from "react";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100">
      <div className="flex justify-between items-center w-full h-full px-2"></div>
      <Image src="../public/assets/MD.png" alt="/" />
    </div>
  );
};

export default Navigation;
