"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "@/components/loader";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Image from "next/image";
import { IModule } from "@/backend/models/mockTest";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TestPage = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const title = pathSegments[2];
  const moduleName = pathSegments[3];

  const [loading, setLoading] = useState(false);
  const [moduleData, setModuleData] = useState<IModule | null>(null);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/mockTest/getMockTest/${title}/${moduleName}`);
      const data = await response.json();

      if (data.success) {
        setModuleData(data.module);
      } else {
        console.log("No module data found");
      }
    } catch (error) {
      console.log("Error fetching module data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (title && moduleName) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, moduleName]);

  if (loading || !moduleName || !title) {
    return <Loader />;
  }

  return (
    <div className="w-full h-full p-3 no-scrollbar">
      <h4 className="text-h4-clamp font-semibold text-slate-950"> Hello, Shubham </h4>
      <h5 className="text-h5-clamp font-medium text-slate-700 mb-2"> Welcome to the IELTS {moduleName} Test </h5>
      {moduleData?.sections?.map((section: any, index: any) => (
        <Card key={index} className="w-full h-full p-2 mb-4">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={40}>
              <div className="p-2 m-1">
                <div className="space-y-4 overflow-x-hidden">
                  <h4 className="text-h4-clamp font-semibold"> Section {index + 1} </h4>
                  {section.audio?.public_id && (
                    <audio controls>
                      <source src={section.audio.secure_url} type="audio/mp3" />
                    </audio>
                  )}
                </div>
                {section?.image?.public_id && (
                  <div className="relative w-full rounded-md p-2 h-full m-1">
                    <Image
                      alt="alt-image"
                      src={section?.image?.secure_url}
                      width={500}
                      height={500}
                      className="object-cover rounded-md w-full h-full"
                      quality={100}
                      layout="responsive"
                    />
                  </div>
                )}
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={60}>
              {section?.questions?.map((question: any, qIndex : any) => (
                <div key={qIndex} className="p-2 space-y-2">
                  <h5 className="text-h5-clamp font-medium text-slate-900">
                    {qIndex + 1}. {question.questionText}
                  </h5>
                  {question.options.map((option : any) => (
                    <div className="flex items-center" key={option}>
                      <Input
                        type={question.questionType}
                        className={cn(
                          "w-4 h-4 mr-2",
                          question.questionType === "text" && "w-full h-6 p-2 outline-1"
                        )}
                      />
                      <span className="text-h6-clamp font-normal">{option}</span>
                    </div>
                  ))}
                </div>
              ))}
            </ResizablePanel>
          </ResizablePanelGroup>
        </Card>
      ))}
      <Button size='sm' className="text-xs" >Submit Answers</Button>
    </div>
  );
};

export default TestPage;
