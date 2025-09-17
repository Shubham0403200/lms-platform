'use client'
import { Form,FormField,FormItem,FormLabel,FormMessage } from '@/components/ui/form'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { careerFormSchema } from "@/backend/schemas/NewsLettersSchema";
import { addNotification } from "@/lib/notify";
import FormInput from '@/components/main/form-input';
import FormSelect from '@/components/main/form-select';
import { Input } from "@/components/ui/input";

const CareerForm = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState('');
  const { toast } = useToast();

  const form = useForm<z.infer<typeof careerFormSchema>>({
    defaultValues: {
      name: "",
      email: "",
      subject: "IELTS",
      workType: "Online",
      department: "Demo Teacher",
      resume: { 
        public_id: "", 
        secure_url: "", 
      }
    },
    resolver: zodResolver(careerFormSchema),
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result as string); // Base64 string
      };
      reader.readAsDataURL(file);
    }
  };
  

  const onSubmit = async (data: z.infer<typeof careerFormSchema>) => {
    setIsSubmitting(true);

    try {
      const response = await axios.post<ApiResponse>(`/api/career/teachers`, {
        ...data,
        resume: file,
      });

      if (response.data.success) {
        form.reset();
        toast({
          title: "Job Application Submitted Successfully.",
          description: response.data.message,
        });
        await addNotification({
            notification: `${data.email} has submitted a request for job! Check out dashboard`, 
            label: "Jobs", 
            role: "Admin"
        })
        setFile(""); 
      } else {
        toast({
          title: "Application not Submitted",
          description: response.data.message,
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
    } catch (error) {
      console.log("Error during submitting your application:", error);
      const axiosError = error as AxiosError<ApiResponse>;

      let errorMessage =
        axiosError.response?.data.message ||
        "There was a problem with submitting your application. Please try again.";

      toast({
        title: "Commenting Failed!",
        description: errorMessage,
        variant: "destructive",
      });

      setIsSubmitting(false);
    }
  };

  return (
    <div className='h-[600px] bg-gradient-to-b from-blue-50 to-slate-50 p-6 md:p-12 rounded-md shadow-lg my-8'>
      <h2 className='text-h2-clamp text-center font-extrabold mb-2'>
        Join Our 
        <span className="text-blue-600"> Team</span>
      </h2>
      <p className='text-muted-foreground max-w-2xl w-full mx-auto text-center mb-6'>
        We are always looking for talented individuals to join our team. If you are passionate about education and want to make a difference, we would love to hear from you!
      </p>

      <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-6"
          >
            <div className="w-full flex flex-col md:flex-row items-center gap-4">
                <FormInput
                  title="name"
                  formTitle="Full Name"
                  placeholder="Eg. John"
                  type="text"
                  disabled={isSubmitting}
                  form={form}
                />
                <FormInput
                  title="email"
                  formTitle="Email Address"
                  placeholder="Eg. john@example.com"
                  type="email"
                  disabled={isSubmitting}
                  form={form}
                />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
                <FormSelect
                  title="department"
                  formTitle="Select Department"
                  form={form}
                  placeholder="Select Department"
                  options={[{name: "Demo Teacher"}, { name: "Trainer" }, { name: "Content Creator" }, { name: "Video Editor" }, { name: "Sales" }]}
                />
                <FormSelect
                  title="subject"
                  formTitle="Select Subject"
                  form={form}
                  placeholder="Select Subject"
                  options={[{name: "IELTS"}, { name: "TOEFL" }, { name: "English" }, { name: "PTE" }, { name: "DET" }, { name: "CELPIP" }, { name: "Others" }]}
                />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
                <FormSelect
                  title="workType"
                  formTitle="Work Type"
                  form={form}
                  placeholder="Select Work Type"
                  options={[{name: "Online"}, { name: "Offline" }]}
                />
                <FormField
                  name="resume"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel> Upload CV </FormLabel>
                      <Input {...field} type="file" value={undefined} onChange={handleFileChange} accept=".pdf" />
                      <FormMessage />
                    </FormItem>
                  )}
                />
            </div>
            <Button className="mt-2 w-full" disabled={isSubmitting} >
                { isSubmitting ? "Please Wait!" : "Submit Application" }
            </Button>
          </form>
      </Form>
    </div>
  )
}

export default CareerForm