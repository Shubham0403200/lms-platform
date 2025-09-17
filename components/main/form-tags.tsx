import React from "react";
import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

interface FormTagsProps {
  title: string;
  form: any;
  formTitle: string;
}

const FormTags: React.FC<FormTagsProps> = ({ title, form, formTitle }) => {

  const tags = form.watch(title) || [];


  const handleAddTags = (value: string) => {
    const newTags = value
      .split(",")
      .map((tag) => tag.trim().toLowerCase())
      .filter((tag) => tag.length > 0 && !tags.includes(tag));
    if (newTags.length > 0) {
      form.setValue(title, [...tags, ...newTags]);
    }
  };

  const handleRemoveTag = (index: number) => {
    const updated = tags.filter((_: any, i: number) => i !== index);
    form.setValue(title, updated);
  };

  return (
    <FormField
      name={title}
      control={form.control}
      render={() => (
        <FormItem>
          <FormLabel>{formTitle}</FormLabel>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    className="ml-1 text-red-500"
                    onClick={() => handleRemoveTag(index)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <Input
              placeholder="Comma-separated tags, press Enter"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddTags(e.currentTarget.value);
                  e.currentTarget.value = "";
                }
              }}
            />
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTags;
