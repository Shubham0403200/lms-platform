import React from "react";
import { FormField, FormItem,FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";

interface FormInputProps {
    form: any; 
    title: string;
    placeholder: string;
    formTitle: string;
    disabled?: boolean;
}

const FormTextarea:React.FC<FormInputProps> = ({ 
    form,title,formTitle,placeholder, disabled
}) => {
  return (
    <FormField
      name={title}
      control={form.control}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="text-gray-800 dark:text-slate-300 font-medium">
            {formTitle}
          </FormLabel>
          <Textarea
            rows={6}
            placeholder={placeholder}
            {...field}
            disabled={disabled}
            className="text-black dark:bg-gray-800 dark:text-white text-h6-clamp"
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTextarea;
