import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import SideNavItems from "./side-nav-items";
import Subscription from "./subscription";

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:w-[20vw] min-w-52 overflow-y-auto no-scrollbar flex-col border-r p-2 gap-2 items-start h-full">
      <div className="flex items-center gap-x-2 mb-2">
        <Image src={Logo} alt="Ielts-logo" width={24} height={24} />
        <h5 className="font-medium text-h5-clamp">101 Dashboard</h5>
      </div>
      <SideNavItems />
      <div className="flex-grow"></div> 
      <Subscription />
    </div>
  );
};

export default Sidebar;
