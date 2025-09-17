"use client";
import { Button } from "@/components/ui/button";
import {Dialog,DialogContent,DialogDescription,DialogFooter,DialogHeader,DialogTitle,DialogTrigger} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { ApiResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import useUserStore from "@/app/store/authStore";
import { bookingFormSchema } from "@/backend/schemas/bookingFormSchema";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select";

const BookSession = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const user = useUserStore((state) => state.user);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof bookingFormSchema>>({
    defaultValues: {
      weakness: "listening",
      strength: "listening",
      targetedBand: "",
      targetedCountry: "",
      slotDate: new Date(),
      slot: "",
      username: "",
      email: "",
    },
    resolver: zodResolver(bookingFormSchema),
  });

  useEffect(() => {
    async function fetchData() {
      const endpoint = "/api/slots";
      const body = { date: selectedDate };

      try {
        const response = await axios.post(endpoint, body, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setAvailableSlots(response.data.slots);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();
  }, [selectedDate]);

  const onSubmit = async (data: z.infer<typeof bookingFormSchema>) => {
    setIsSubmitting(true);

    if (!user?.username || !user?.email) {
      toast({
        title: "Failed",
        description: " Please Login to continue",
        variant: "destructive",
      });
      return;
    }

    const slotDate = new Date(data.slotDate);
    
    try {
      const response = await axios.post<ApiResponse>(`/api/bookSlot`, {
        ...data,
        username: user?.username,
        email: user?.email,
        slotDate: slotDate,
      });

      if (response.data.success) {
        form.reset();
        toast({
          title: "Success",
          description: response.data.message,
        });
      } else {
        toast({
          title: "Booking Failed",
          description: response.data.message,
          variant: "destructive",
        });
      }
      setIsSubmitting(false);

    } catch (error) {
      console.log("Error during booking:", error);
      const axiosError = error as AxiosError<ApiResponse>;

      let errorMessage =
        axiosError.response?.data.message ||
        "There was a problem with booking demo. Please try again.";

      toast({
        title: "Commenting Failed!",
        description: errorMessage,
        variant: "destructive",
      });

      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="rounded-full px-6 text-xs">
          ▶️ Book Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="p-3 md:p-4 sm:mx-4 w-[90vw] rounded-md sm:max-w-[425px] max-h-[85vh] md:max-w-xl overflow-y-auto">
        <DialogHeader className="items-start">
          <DialogTitle>Book Now</DialogTitle>
          <DialogDescription className="text-justify text-h6-clamp text-slate-700 ">
            Reserve your spot now to experience our demo session. Kindly Login First to book your demo session. 
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel> User Name </FormLabel>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Eg. John"
                    value={user?.username}
                    disabled
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
                  <FormLabel> Email </FormLabel>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Eg. Johndoe@gmail.com"
                    value={user?.email}
                    disabled
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="targetedBand"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Band Targeted </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={String(field.value)}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your targeted Band" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((band) => (
                        <SelectItem key={band} value={String(band)}>
                          {band}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="strength"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Strength </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your strength!" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="listening">Listening</SelectItem>
                      <SelectItem value="reading">Reading</SelectItem>
                      <SelectItem value="writing">Writing</SelectItem>
                      <SelectItem value="speaking">Speaking</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="weakness"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Weakness </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your Weakness!" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="listening">Listening</SelectItem>
                      <SelectItem value="reading">Reading</SelectItem>
                      <SelectItem value="writing">Writing</SelectItem>
                      <SelectItem value="speaking">Speaking</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="targetedCountry"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Targeted Country </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your Country you have targeted!" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[
                        "Australia",
                        "Canada",
                        "USA",
                        "New Zealand",
                        "Others",
                      ].map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="slotDate"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col items-start">
                  <FormLabel> Slot Date </FormLabel>
                  <input
                    type="date"
                    {...field}
                    value={
                      field.value
                        ? field.value.toISOString().substring(0, 10)
                        : ""
                    }
                    onChange={(e) => {
                      const date = e.target.value
                        ? new Date(e.target.value)
                        : new Date();
                      field.onChange(date);
                      setSelectedDate(date);
                    }}
                    className="w-full outline-none border text-h6-clamp p-2 rounded-md"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="slot"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Select Slot </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your slot!" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {availableSlots?.map((slot, index) => (
                        <SelectItem key={index} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              {/* <DialogClose asChild > */}
              <Button
                type="submit"
                className="text-xs"
                size="sm"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Please Wait!
                  </>
                ) : (
                  "Book Now!"
                )}
              </Button>
              {/* </DialogClose> */}
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BookSession;
