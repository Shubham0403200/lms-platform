'use client';
import React from 'react';
import CourseSide from './course-side';
import { Chapter } from '@/backend/models/Courses';
import { Button } from '@/components/ui/button';

interface NavbarProps { 
    courseName: string | undefined; 
    chapters: Chapter[]; 
    courseCategory: string | undefined;
    selectedChapter: Chapter | null;
    onChapterSelect: (chapter: Chapter) => void;
}

const Navbar:React.FC<NavbarProps> = ({ courseName, chapters, courseCategory, onChapterSelect, selectedChapter }) => {

  return (
    <div className="relative flex items-center p-3 border-b bg-white justify-between">
      <div className="absolute top-3 left-4 flex lg:hidden">
        <CourseSide chapters={chapters} onChapterSelect={onChapterSelect} courseCategory={courseCategory} selectedChapter={selectedChapter} />
      </div>
      <h5 className="ml-8 lg:ml-0 text-h4-clamp font-semibold capitalize">
        {courseName}
      </h5>
    </div>
  );
};

export default Navbar;