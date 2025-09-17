
import React from 'react';
import { Chapter } from '@/backend/models/Courses';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ChapterNamesProps {
  closeSheet?: () => void;  
  chapters: Chapter[];
  onChapterSelect: (chapter: Chapter) => void;
  selectedChapter: Chapter | null;
}

const ChapterNames: React.FC<ChapterNamesProps> = ({ closeSheet, chapters, onChapterSelect, selectedChapter }) => {

  const sortedChapters = chapters.sort((a, b) => a.position - b.position);

  return (
    <>    
      <ul className="flex w-full flex-col items-start">
        {sortedChapters.map((chapter) => {
          const isActive = chapter.chapterTitle === selectedChapter?.chapterTitle;
          
          return (
            <>          
              <div
                key={chapter.position}
                onClick={() => {onChapterSelect(chapter); closeSheet?.(); }}
                className={`${
                  isActive ? 'bg-slate-200 text-slate-900 rounded-md ' : 'text-slate-700'
                } font-medium whitespace-nowrap flex items-center text-normal capitalize hover:bg-slate-200 hover:rounded-md w-full py-[0.26rem] overflow-hidden px-4 transition-colors duration-100 cursor-pointer`}
              >
                <span className='text-[0.9rem] line-clamp-1'>{chapter.position}. {chapter.chapterTitle}</span>
              </div>
            </>
          );
        })}
      </ul>
      <Link href='/dashboard' className='font-medium whitespace-nowrap flex items-center text-normal capitalize hover:bg-slate-200 hover:rounded-md w-full py-[0.23rem] overflow-hidden px-4 transition-colors duration-100 cursor-pointer' >
          <ArrowLeft className='w-4 h-4 mr-2' />
          <span className='text-[0.9rem] line-clamp-1'>Back to Dashboard</span>
      </Link>
    </>
  );
};

export default ChapterNames;
