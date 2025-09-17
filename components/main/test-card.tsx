"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type TestCardProps = {
  title: string;
  description: string;
  details: string;
  rules: string[];
  buttonText: string;
  onStart: () => void;
};

export const TestCard = ({
  title,
  description,
  details,
  rules,
  buttonText,
  onStart,
}: TestCardProps) => {
  return (
    <Card className="shadow-lg w-full border border-blue-200 hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-h2-clamp text-blue-600">{title}</CardTitle>
        <CardDescription className="text-h7-clamp italic text-slate-600 ">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 text-h6-clamp">{details}</p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="sm">
              {buttonText}
            </Button>
          </DialogTrigger>
          <DialogContent className="p-3 md:p-4 sm:mx-4 w-[90vw] rounded-md sm:max-w-[425px] max-h-[85vh] md:max-w-xl overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-blue-600 font-semibold">
                Test Rules & Regulations
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 text-gray-700">
              <p className="text-h7-clamp">{details}</p>
              <ul className="list-decimal text-h6-clamp ml-4">
                {rules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>
            <DialogFooter>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                size="sm"
                onClick={onStart}
              >
                {buttonText}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};
