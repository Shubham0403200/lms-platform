import React from "react";
import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import {  Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface FormLinkProps {
  title: string;
  form: any;
  formTitle: string;
  links: string[];
  setLinks: React.Dispatch<React.SetStateAction<string[]>>;
  newLink: string;
  setNewLink: React.Dispatch<React.SetStateAction<string>>;
}

const FormLinks: React.FC<FormLinkProps> = ({ title, form, formTitle, links, setLinks, newLink, setNewLink }) => {

      const handleAddLink = () => {
        if (newLink) {
        setLinks((prevLinks) => {
            const updatedLinks = [...prevLinks, newLink];
            form.setValue("link", updatedLinks);
            return updatedLinks;
        });
        setNewLink("");
        }
    };

      const handleRemoveLink = (index: number) => {
        setLinks((prevLinks) => {
          const updatedLinks = prevLinks.filter((_, i) => i !== index);
          form.setValue("link", updatedLinks); 
          return updatedLinks;
        });
      };
    

    return (
          <FormField
            name={title}
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{formTitle}</FormLabel>
                <div className="space-y-2">
                  {links.map((link, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <Input type="text" value={link} readOnly className="flex-grow" />
                      <Trash2 className="w-5 h-5 cursor-pointer" onClick={() => handleRemoveLink(index)} />
                    </div>
                  ))}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 ">
                    <Input type="text" {...field} value={newLink} onChange={(e) => setNewLink(e.target.value)} placeholder="Add a link" className="flex-grow" />
                    <Button type="button" className=" w-max " onClick={handleAddLink}>
                      Add
                    </Button>
                  </div>
                </div>        
                <FormMessage />
              </FormItem>
            )}
          />        
    )
}

export default FormLinks;