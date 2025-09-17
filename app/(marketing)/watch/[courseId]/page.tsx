'use client';
import React, { useEffect, useState } from 'react';
import useUserStore from '@/app/store/authStore';
import { useParams } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import Sidebar from './_components/sidebar';
import Navbar from './_components/navbar';
import ChapterDetails from './_components/chapter-details';
import axios from 'axios';
import { Chapter, Course } from '@/backend/models/Courses';
import { NullExpression } from 'mongoose';
import Loader from '@/components/loader';

const WatchPage = () => {

  const [ course, setCourse ] = useState<Course | NullExpression>(null);
  const [ chapters, setChapters ] = useState<Chapter[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [ loading, setLoading ] = useState(true); 

  const { courseId } = useParams<{courseId: string}>();

  const { toast } = useToast();
  const user = useUserStore((state) => state.user);
  const userId = user?.id; 
  
  const getChapterDetails = async () => { 
    try { 
      const response = await axios.get(`/api/dashboard/myCourses/${userId}/${courseId}`); 
      if (response.data.success) { 
        setCourse(response.data.course); 
        setChapters(response.data.course.chapters); 
        const defaultChapter = response.data.course.chapters.find(
          (chapter: Chapter) => chapter.position === 1
        );
        setSelectedChapter(defaultChapter || response.data.course.chapters[0]);
      } else {
        toast({ title: "Error", description: response.data.message, variant: "destructive" });
      }
    } catch (error) { 
      console.log("get chapter details error: ", error); 
      toast({ title: "Error", description: "Failed to load chapter details.", variant: "destructive" });
    } finally { 
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId && courseId) {
      getChapterDetails();
    }
    // eslint-disable-next-line
  }, [userId, courseId , toast]);

  const handleChapterSelect = (chapter: Chapter) => {
    setSelectedChapter(chapter);
  };

  if (loading) { 
    return <Loader />
  }

  return (
    <div className='h-screen w-screen bg-blue-200 flex items-center justify-center'>
      <div className='w-full relative max-w-[1400px] h-full lg:max-h-[700px] bg-white flex overflow-hidden'>
        <Sidebar chapters={chapters} onChapterSelect={handleChapterSelect} courseCategory={course?.category} selectedChapter={selectedChapter}/>
        <div className='w-full lg:w-[80vw] overflow-y-scroll no-scrollbar'>
          <Navbar courseName={course?.title} chapters={chapters} onChapterSelect={handleChapterSelect} courseCategory={course?.category} selectedChapter={selectedChapter}/>
          <div className='no-scrollbar'>
            <ChapterDetails chapter={selectedChapter} userId={userId} courseId={courseId} getChapterDetails={getChapterDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;