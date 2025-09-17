import z from "zod";

export const initialBlogSchema = z.object({
  title: z.string().min(1, { message: "Blog title is required" }),
  writer: z.string(),
});

export const fullBlogSchema = z.object({
  title: z.string().min(1, { message: "Blog title is required" }),
  description: z.string().min(1, { message: "Blog description is required" }),
  message: z.string().min(1, { message: "Blog message is required" }),
  isPublished: z.boolean().default(false),
  tags: z.array(z.string()).optional(),
  writer: z.string(),
  slug: z.string().optional(),
  thumbnail: z.object({
    public_id: z.string(),
    secure_url: z.string(),
  }),
});
