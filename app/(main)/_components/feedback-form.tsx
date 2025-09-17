"use client";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { ApiResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2, Star } from "lucide-react";
import useUserStore from "@/app/store/authStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const feedbackSchema = z.object({
  feedback: z.string().min(1, "Feedback cannot be empty."),
  stars: z.coerce.number().min(1, "Select at least 1 star").max(5),
});

const FeedbackForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const user = useUserStore((state) => state.user);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof feedbackSchema>>({
    defaultValues: {
      feedback: "",
      stars: 0,
    },
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = async (data: z.infer<typeof feedbackSchema>) => {
    if (!user?.username) {
      toast({
        title: "Please Login First",
        description: "You need to be logged in to submit feedback.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post<ApiResponse>("/api/addFeedback", {
        feedback: data.feedback,
        username: user.username,
        stars: data.stars,
      });

      if (response.data.success) {
        toast({
          title: "Feedback Submitted",
          description: response.data.message,
        });
        form.reset();
      } else {
        toast({
          title: "Submission Failed",
          description: response.data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast({
        title: "Error Occurred",
        description:
          axiosError.response?.data.message ||
          "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-blue-500 to-purple-500 text-white py-14 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-h2-clamp font-bold">Your Feedback Matters</h2>
        <p className="text-h5-clamp mt-2 max-w-2xl mx-auto">
          Help us improve by sharing your honest thoughts. It takes less than a minute!
        </p>

        {/* Motivational Line */}
        <p className="text-h6-clamp italic mt-1 text-slate-200">
          “We grow better with your voice.”
        </p>

        {/* Dialog Trigger */}
        <div className="mt-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="sm"
                className="bg-white text-blue-600 text-xs rounded-full px-6 hover:bg-slate-100 shadow-md transition"
              >
                Share Feedback
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-[90vw] md:max-w-md bg-white">
              <DialogHeader>
                <DialogTitle className="text-h4-clamp font-semibold text-slate-800">
                  Submit Feedback
                </DialogTitle>
                <DialogDescription className="text-sm text-slate-600">
                  We truly value your suggestions, comments, and ratings.
                </DialogDescription>
              </DialogHeader>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-2">
                  {/* Feedback Text */}
                  <FormField
                    name="feedback"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-slate-700">
                          Your Message
                        </FormLabel>
                        <Input
                          {...field}
                          placeholder="Type your feedback..."
                          className="bg-slate-100"
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Star Rating */}
                  <FormField
                    name="stars"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-slate-700">
                          Star Rating
                        </FormLabel>
                        <div className="flex gap-1 items-center">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star
                              key={i}
                              onClick={() => field.onChange(i)}
                              className={`h-5 w-5 cursor-pointer ${
                                i <= field.value
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-slate-300"
                              } transition-all`}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <DialogFooter>
                    <Button
                      type="submit"
                      size="sm"
                      disabled={isSubmitting}
                      className="text-xs"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Feedback"
                      )}
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
