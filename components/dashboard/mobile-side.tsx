"use client"
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import Logo from '@/public/logo.png'
import { MenuIcon } from "lucide-react"
import SideNavItems from './side-nav-items'
import Subscription from './subscription'

const MobileSide = () => {

  const [isOpen, setIsOpen] = useState(false); 

  const handleCloseSheet = () => {
    setIsOpen(false);
  };

  
  return (
    <div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="align-middle">
            <MenuIcon className=" h-5 w-5 text-muted-foreground " />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-2 bg-white md:hidden">
            <div className=" flex items-center gap-x-2 ">
              <Image src={Logo} alt="Ielts-logo" width={24} height={24} />
              <h5 className=" font-medium text-h4-clamp "> 101 Dashboard </h5>
            </div>
            <Separator className="border border-gray-50" />
            <SideNavItems closeSheet={handleCloseSheet} />
            <div className="flex-grow"></div>
            <Subscription />
          </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileSide