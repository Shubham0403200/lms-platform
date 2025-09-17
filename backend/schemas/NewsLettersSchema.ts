import { z } from 'zod';

export const NewsLettersSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }).transform((value) => value.trim().toLowerCase()),
});

export const careerFormSchema = z.object({
  name: z.string().default(""),
  email: z.string().email({ message: 'Invalid email address' }).transform((value) => value.trim().toLowerCase()),
  department: z.enum(['Demo Teacher', 'Sales', 'Trainer', 'Video Editor', 'Content Creator']).default("Demo Teacher"),
  workType: z.enum(['Online', 'Offline']).default("Online"),
  subject: z.enum(['IELTS', 'TOEFL', 'PTE', 'CELPIP', 'DET', 'English', 'Others']).default("IELTS"),
  resume: z.object({
    public_id: z.string().optional(),
    secure_url: z.string().optional(),
  }),
})

export const couponSchema = z.object({
    couponCode: z.string().min(1, {message: "Please add the couponCode first!"}),
    percentage: z.coerce.number().min(0, {message: "Please add the percentage first!"}),
    couponLeft: z.coerce.number().min(0, {message: "Please add the couponCode Upper Limit first!"}),
    maxDiscount: z.coerce.number().min(0, {message: "Please add the maximum discount that can be applied!"}),
})

