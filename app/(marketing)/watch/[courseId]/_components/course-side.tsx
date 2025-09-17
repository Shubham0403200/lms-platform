"use client"
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Logo from '@/public/logo.png'
import { MenuIcon } from "lucide-react"
import { Chapter } from '@/backend/models/Courses'
import ChapterNames from './chapter-names'

interface NavbarProps { 
    chapters: Chapter[]; 
    courseCategory: string | undefined;
    selectedChapter: Chapter | null;
    onChapterSelect: (chapter: Chapter) => void;
}

const CourseSide:React.FC<NavbarProps> = ({ chapters, courseCategory, onChapterSelect, selectedChapter }) => {

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
          <SheetContent className="flex flex-col gap-2 bg-white lg:hidden">
            <div className=" flex items-center gap-x-2 ">
              <Image src={Logo} alt="Ielts-logo" width={24} height={24} />
              <h5 className=" font-medium text-h4-clamp "> 101 {courseCategory} </h5>
            </div>
            <ChapterNames chapters={chapters} closeSheet={handleCloseSheet} onChapterSelect={onChapterSelect} selectedChapter={selectedChapter} />
            <div className="flex-grow"></div>
          </SheetContent>
        </Sheet>
    </div>
  )
}

export default CourseSide