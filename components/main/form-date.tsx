import React from "react";
import { FormField, FormItem,FormLabel,FormMessage,FormControl } from "../ui/form";
import {Popover,PopoverContent,PopoverTrigger } from "@/components/ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface FormInputProps {
    form: any; 
    title: string;
    formTitle: string;
}

const FormDate: React.FC<FormInputProps> = ({ form, title, formTitle }) => {
  return (
    <FormField
      control={form.control}
      name={title}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{formTitle}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => date < new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormDate;