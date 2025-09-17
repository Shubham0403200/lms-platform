import { z } from "zod";

export const bookingFormSchema = z.object({
  username: z.string().optional(),
  targetedBand: z.string().default('1'),
  weakness: z.enum(['listening', 'reading', 'writing', 'speaking']).default('listening'),
  strength: z.enum(['listening', 'reading', 'writing', 'speaking']).default('listening'),
  targetedCountry: z.string().min(1, "Targeted country is required").trim(),
  email: z.string().optional(),
  slot: z.string().min(1, "Slot is required").trim(),
  slotDate: z.date().default(new Date()),
});

export const SlotsSchema = z.object({
  date: z.date().default(new Date()),
  username: z.string().default(''),
  slots: z.array(z.string()).default([]),
});