import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (value: number): string => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
};

export async function generateUniqueSlug(baseTitle: string, model: any) {
  let slug = baseTitle
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')   // remove special characters
    .replace(/\s+/g, '-')           // spaces to hyphens
    .replace(/-+/g, '-')            // collapse multiple hyphens
    .trim();

  let uniqueSlug = slug;
  let count = 1;

  while (await model.findOne({ slug: uniqueSlug })) {
    uniqueSlug = `${slug}-${count}`;
    count++;
  }

  return uniqueSlug;
}
