import React from "react";
import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import {  Trash2, UploadIcon } from "lucide-react";
import Image from "next/image";
import { Input } from "../ui/input";

interface FormInputProps {
  form: any;
  title: string;
  formTitle: string;
  selectedImage: string | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>; 
}

const FormImage: React.FC<FormInputProps> = ({
  form,
  title,
  formTitle,
  selectedImage,
  setSelectedImage,
}) => {

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setSelectedImage(base64String);
        form.setValue( title , {
          public_id: "",
          secure_url: base64String,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    form.setValue( title , { public_id: "", secure_url: "" });
  };

  return (
    <FormField
      name={title}
      control={form.control}
      render={({}) => (
        <FormItem>
          <FormLabel> {formTitle} </FormLabel>
          {!selectedImage ? (
            <div
              className="flex flex-col items-center justify-center border border-dashed border-gray-400 rounded-lg h-[200px] w-full md:w-96 p-4 cursor-pointer"
              onClick={() =>
                document.getElementById("eventPhotoInput")?.click()
              }
            >
              <UploadIcon className=" w-4 h-4 mr-2 text-muted-foreground " />
              <span className="mt-2 text-h5-clamp text-gray-600">
                Add Photo
              </span>
            </div>
          ) : (
            <div className=" flex items-end gap-3 ">
              <div className="relative flex gap-2 aspect-video md:h-full w-full md:w-96 ">
                <Image
                  src={selectedImage}
                  alt="Selected Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <Trash2
                className="w-5 h-5 mr-2 cursor-pointer "
                onClick={handleRemoveImage}
              />
            </div>
          )}
          <Input
            id="eventPhotoInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormImage; 