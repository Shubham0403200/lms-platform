import React from "react";
import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";

interface FormInputProps {
  form: any;
  title: string;
  placeholder: string;
  formTitle: string;
  options: { name: string }[]
}

const FormSelect: React.FC<FormInputProps> = ({
  form,
  title,
  formTitle,
  placeholder,
  options,
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
          <Select
            value={field.value}
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className='text-h6-clamp'>
              {options?.map((category: any) => (
                <SelectItem key={category.name} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormSelect;
