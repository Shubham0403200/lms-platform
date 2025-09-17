"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./navItems";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Logo } from "./logo";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseSheet = () => {
    setIsOpen(false);
  };

  return (
    <nav className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="align-middle">
          <MenuIcon className=" h-5 w-5 text-muted-foreground " />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-slate-200 md:hidden">
          <Logo location='mobileNav' />
          <Separator className="border border-gray-50" />
          <NavItems closeSheet={handleCloseSheet} />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
