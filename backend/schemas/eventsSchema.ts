import { z } from 'zod';

export const createEventSchema = z.object({
    thumbnail: z.object({
      public_id: z.string(),
      secure_url: z.string(),
    }),
    name: z.string().min(1, { message: 'Event name is required' }).default(""),
    startTime: z.string().min(1, { message: 'Event start time is required' }).default(""),
    endTime: z.string().min(1, { message: 'Event end time is required' }).default(""),
    startDate: z.date().default(new Date()),
    endDate: z.date().default(new Date()),
    isPublished: z.boolean(),
    link: z.array(z.string()).default([]),
    days: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    location: z.string().min(1, { message: 'Event location is required' }).default(""),
    description: z.string().min(1, { message: 'Event description is required' }).default(""),
    price: z.coerce.number().min(0, { message: 'Event Price must be non-negative!' }),
    mode: z.enum(['online', 'offline'], { required_error: "You need to select an event Mode!" }),
    isFree: z.boolean().optional(),
});