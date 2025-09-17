"use client";
import { useState, useEffect } from "react";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// ---------------- TEMP MODEL ----------------
interface BookingForm {
  username: string;
  email: string;
  targetedBand: string;
  strength: string;
  weakness: string;
  targetedCountry: string;
  slotDate: Date;
  slot: string;
}

// ---------------- TEMP DATA ----------------
const tempUser = {
  username: "John Doe",
  email: "john@example.com",
};

const tempSlots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];

// ---------------- FORM SCHEMA ----------------
const bookingFormSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  targetedBand: z.string().min(1),
  strength: z.string().min(1),
  weakness: z.string().min(1),
  targetedCountry: z.string().min(1),
  slotDate: z.date(),
  slot: z.string().min(1),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

// ---------------- COMPONENT ----------------
const BookSession = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>(tempSlots);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const { toast } = useToast();

  const form = useForm<BookingFormValues>({
    defaultValues: {
      username: tempUser.username,
      email: tempUser.email,
      targetedBand: "",
      strength: "listening",
      weakness: "listening",
      targetedCountry: "",
      slotDate: new Date(),
      slot: "",
    },
  });

  // Simulate dynamic slot update
  useEffect(() => {
    // Here you could dynamically change slots based on selectedDate
    setAvailableSlots(tempSlots);
  }, [selectedDate]);

  const onSubmit = (data: BookingFormValues) => {
    setIsSubmitting(true);

    // Simulate API response
    setTimeout(() => {
      toast({
        title: "Success",
        description: `Demo booked successfully on ${data.slotDate.toDateString()} at ${data.slot}`,
      });
      form.reset({
        ...form.getValues(),
        slot: "",
      });
      setIsSubmitting(false);
    }, 1000);
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
            Reserve your spot now to experience our demo session.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Username */}
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User Name</FormLabel>
                  <FormControl>
                    <input {...field} disabled className="w-full border p-2 rounded-md" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <input {...field} disabled className="w-full border p-2 rounded-md" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Targeted Band */}
            <FormField
              name="targetedBand"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Targeted Band</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Band" />
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

            {/* Strength */}
            <FormField
              name="strength"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Strength</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Strength" />
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

            {/* Weakness */}
            <FormField
              name="weakness"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weakness</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Weakness" />
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

            {/* Targeted Country */}
            <FormField
              name="targetedCountry"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Targeted Country</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {["Australia", "Canada", "USA", "New Zealand", "Others"].map(
                        (country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Slot Date */}
            <FormField
              name="slotDate"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slot Date</FormLabel>
                  <input
                    type="date"
                    {...field}
                    value={field.value.toISOString().substring(0, 10)}
                    onChange={(e) => {
                      const date = new Date(e.target.value);
                      field.onChange(date);
                      setSelectedDate(date);
                    }}
                    className="w-full border p-2 rounded-md"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Slot */}
            <FormField
              name="slot"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Slot</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Slot" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {availableSlots.map((slot, idx) => (
                        <SelectItem key={idx} value={slot}>
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
              <Button type="submit" size="sm" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Please Wait!
                  </>
                ) : (
                  "Book Now!"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BookSession;
