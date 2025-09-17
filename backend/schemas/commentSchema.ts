import { z } from "zod";

const commentSchema = z.object({
  username: z.string().trim().optional(),
  comment: z.string().min(1, "Comment is required").trim(),
  stars: z.number().min(0, "Stars must be at least 0").max(5, "Stars must be at most 5"),
});

export default commentSchema;
