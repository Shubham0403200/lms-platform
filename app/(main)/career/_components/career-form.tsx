'use client'

import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from '@/components/main/form-input';
import FormSelect from '@/components/main/form-select';
import { Input } from "@/components/ui/input";

// ---------------- TEMP FORM SCHEMA ----------------
export const careerFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(1, "Subject is required"),
  workType: z.string().min(1, "Work type is required"),
  department: z.string().min(1, "Department is required"),
  resume: z.object({
    public_id: z.string().optional(),
    secure_url: z.string().optional(),
  }),
});

type CareerFormValues = z.infer<typeof careerFormSchema>;

// ---------------- COMPONENT ----------------
const CareerForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState('');
  const { toast } = useToast();

  const form = useForm<CareerFormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "IELTS",
      workType: "Online",
      department: "Demo Teacher",
      resume: { public_id: "", secure_url: "" }
    },
    resolver: zodResolver(careerFormSchema),
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result as string); // Base64 string
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const onSubmit = (data: CareerFormValues) => {
    setIsSubmitting(true);

    // ---------------- TEMP SUBMISSION ----------------
    setTimeout(() => {
      console.log("Submitted Data:", { ...data, resume: file });
      toast({
        title: "Application Submitted Successfully",
        description: `${data.name} has submitted a job application for ${data.department}!`,
      });
      form.reset({
        name: "",
        email: "",
        subject: "IELTS",
        workType: "Online",
        department: "Demo Teacher",
        resume: { public_id: "", secure_url: "" },
      });
      setFile('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className='h-auto bg-gradient-to-b from-blue-50 to-slate-50 p-6 md:p-12 rounded-md shadow-lg my-8'>
      <h2 className='text-h2-clamp text-center font-extrabold mb-2'>
        Join Our <span className="text-blue-600">Team</span>
      </h2>
      <p className='text-muted-foreground max-w-2xl w-full mx-auto text-center mb-6'>
        We are always looking for talented individuals to join our team. If you are passionate about education and want to make a difference, we would love to hear from you!
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
          {/* Name & Email */}
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

          {/* Department & Subject */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <FormSelect
              title="department"
              formTitle="Select Department"
              form={form}
              placeholder="Select Department"
              options={[
                { name: "Demo Teacher" },
                { name: "Trainer" },
                { name: "Content Creator" },
                { name: "Video Editor" },
                { name: "Sales" },
              ]}
            />
            <FormSelect
              title="subject"
              formTitle="Select Subject"
              form={form}
              placeholder="Select Subject"
              options={[
                { name: "IELTS" },
                { name: "TOEFL" },
                { name: "English" },
                { name: "PTE" },
                { name: "DET" },
                { name: "CELPIP" },
                { name: "Others" },
              ]}
            />
          </div>

          {/* Work Type & Resume */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <FormSelect
              title="workType"
              formTitle="Work Type"
              form={form}
              placeholder="Select Work Type"
              options={[{ name: "Online" }, { name: "Offline" }]}
            />
            <FormField
              name="resume"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Upload CV</FormLabel>
                  <Input
                    {...field}
                    type="file"
                    value={undefined}
                    onChange={handleFileChange}
                    accept=".pdf"
                    disabled={isSubmitting}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button className="mt-2 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Please Wait!" : "Submit Application"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CareerForm;
