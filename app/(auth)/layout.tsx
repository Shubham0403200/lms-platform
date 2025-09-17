import Image from "next/image";
import React, { useEffect } from "react";
import Logo from "@/public/logo.png";
import StudentFeedbacks from "./_components/student-feedbacks";
import { useRouter } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className=" h-screen w-screen bg-blue-200 flex items-center justify-center ">
      <div className="w-full md:w-[80vw] max-w-screen flex bg-white h-full md:h-[95vh] max-h-screen rounded-md">
        <div className="w-full md:w-1/2 border-r  relative">
          <Image
            src={Logo}
            width={40}
            height={40}
            alt="Logo"
            className="absolute top-4 left-4"
          />
          {children}
        </div>
        <div className="w-1/2 hidden md:flex p-2">
            <StudentFeedbacks />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
