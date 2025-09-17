import React from "react";
import { FormDescription, FormField, FormItem,FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

interface FormInputProps {
    form: any; 
    title: string;
    placeholder: string;
    formTitle: string;
    type: string;
    min?: number;
    disabled?: boolean;
    formDescription?: string;
}

const FormInput:React.FC<FormInputProps> = ({ 
    form,title,formTitle,placeholder,type, disabled, formDescription, min
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
          <Input
            type={type}
            placeholder={placeholder}
            {...field}
            min={min}
            disabled={disabled}
            className="text-black dark:bg-gray-800 dark:text-white text-h6-clamp"
          />
          <FormDescription> { formDescription }  </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
