import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { Chapter } from "@/backend/models/Courses";
import ChapterNames from "./chapter-names";

interface SidebarProps { 
    chapters: Chapter[]; 
    courseCategory: string | undefined;
    selectedChapter: Chapter | null;
    onChapterSelect: (chapter: Chapter) => void;
}

const Sidebar:React.FC<SidebarProps> = ({ chapters, courseCategory, onChapterSelect, selectedChapter }) => {
  return (
    <div className="hidden lg:flex lg:w-[20vw] min-w-52 overflow-y-auto no-scrollbar flex-col border-r p-2 gap-2 items-start h-full">
      <div className="flex items-center gap-x-2 mb-2 ml-4">
        <Image src={Logo} alt="Ielts-logo" width={24} height={24} />
        <h5 className="font-medium text-h5-clamp">101 {courseCategory}</h5>
      </div>
      <ChapterNames chapters={chapters} onChapterSelect={onChapterSelect} selectedChapter={selectedChapter} />
    </div>
  );
};

export default Sidebar;