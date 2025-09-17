"use client";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { ApiResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";

const contactFormSchema = z.object({
  name: z.string().min(1, "Please enter your name."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(1, "Please enter your message."),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post<ApiResponse>("/api/contact", data);

      if (response.data.success) {
        toast({
          title: "Message Sent ✅",
          description: response.data.message,
        });
        form.reset();
      } else {
        toast({
          title: "Failed",
          description: response.data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast({
        title: "Something went wrong!",
        description:
          axiosError.response?.data.message ||
          "Unable to submit the message. Try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

        {/* Contact Form Section */}
        <Card className="col-span-1 md:col-span-4 p-4 md:p-6 rounded-xl shadow-lg">
          <CardHeader className="p-0 mb-4">
            <h2 className="text-h2-clamp font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Got Something In Mind?
            </h2>
            <p className="text-h5-clamp font-medium text-muted-foreground">
              Reach out to us directly and we’ll get back to you shortly.
            </p>
          </CardHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <Input
                        {...field}
                        placeholder="E.g. John Doe"
                        className="bg-slate-50"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <Input
                        {...field}
                        placeholder="E.g. john@example.com"
                        className="bg-slate-50"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                name="message"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <Textarea
                      {...field}
                      rows={6}
                      placeholder="Type your message here..."
                      className="bg-slate-50"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="text-xs rounded-full w-full md:w-fit "
                size="sm"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Form>
        </Card>

        {/* Contact Info Section */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          <Card className="p-5 rounded-xl shadow-md">
            <CardHeader className="text-h4-clamp font-semibold text-slate-900 mb-2 p-0">
              Contact Numbers
            </CardHeader>
            <CardDescription className="text-h6-clamp text-slate-700 font-medium flex flex-col space-y-1">
              <span>📞 +91 9619203646</span>
              <span>📞 +91 8369722010</span>
            </CardDescription>
          </Card>

          <Card className="p-5 rounded-xl shadow-md">
            <CardHeader className="text-h4-clamp font-semibold text-slate-900 mb-2 p-0">
              Email Us
            </CardHeader>
            <CardDescription className="text-h6-clamp text-slate-700 font-medium">
              📧 ieltsstrategies101@gmail.com
            </CardDescription>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
