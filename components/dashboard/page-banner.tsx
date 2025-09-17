import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "@/public/work.svg";
import Link from "next/link";

interface PageBannerProps {
  username: string | null;
  label: string;
  comment: string;
  route: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  username,
  label,
  comment,
  route,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-100 px-6 md:px-10 py-6 md:py-10 rounded-2xl shadow-sm">
      <div className="flex flex-col items-start space-y-2 md:space-y-4 text-center md:text-left">
        <h4 className="text-h2-clamp font-semibold text-slate-900">
          Hello{username ? `, ${username}` : ""} 👋
        </h4>
        <h5 className="text-h5-clamp text-slate-700">{label}</h5>
        <Link href={route}>
          <Button
            size="sm"
            variant="destructive"
            className="mt-2 md:mt-4 px-6 rounded-full text-sm transition-all hover:scale-[1.02]"
          >
            {comment}
          </Button>
        </Link>
      </div>

      <div className="mt-6 md:mt-0 md:flex hidden">
        <Image
          src={Logo}
          alt="Banner_Logo"
          width={220}
          height={180}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default PageBanner;
