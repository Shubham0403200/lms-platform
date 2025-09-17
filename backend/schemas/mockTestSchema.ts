import { z } from "zod";

export const createMockTestSchema = z.object({
      title: z.string().min(1, { message: 'Test name is required' }).default(""),
      description: z.string().min(1, { message: 'Test description is required' }).default(""),
      date: z.date().default(new Date()),
      isPublished: z.boolean().optional(),
      details: z.array(z.string().min(1, { message: "Please enter a valid data." })).optional().default([]),
      price: z.enum(['free', 'paid'], { required_error: "You need to select a mock test type!" }), 
})