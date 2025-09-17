import { z } from 'zod';

export const usernameValidation = z
  .string()
  .min(2, 'Username must be at least 2 characters')
  .max(20, 'Username must be no more than 20 characters')
  .regex(/^[a-z0-9_]+$/, 'Username must not contain uppercase letters, special characters, or spaces');


export const registerSchema = z.object({
    username: usernameValidation.transform((value) => value.trim()), 
    email: z
      .string()
      .email({ message: 'Invalid email address' })
      .transform((value) => value.trim().toLowerCase()), 
    isAccepted: z.boolean(),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters' })
      .refine((value) => /^[^\s]+$/g.test(value), { message: 'Password must not contain spaces' }) // Check for spaces
      .refine((value) => /[A-Z]/.test(value), { message: 'Password must contain at least one uppercase letter' })
      .refine((value) => /[0-9]/.test(value), { message: 'Password must contain at least one number' })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), { message: 'Password must contain at least one special character' })
      .transform((value) => value.trim()), // Trim spaces from password
  }).refine((data) => data.isAccepted, {
    message: 'You must accept the terms and conditions',
    path: ['isAccepted'],
  });
  
export const loginSchema = z.object({
  identifier: z.string().transform((value) => value.trim().toLowerCase()),
  password: z.string().min(1, { message: "Please Enter the Password!"})
});

export const verifySchema = z.object({ 
  verifyCode: z.string().min(6, { message: "Please Enter a valid OTP number!"})
});

export const forgotSchema = z.object({ 
  email: z.string().email({ message: 'Invalid email address' }).transform((value) => value.trim().toLowerCase()),
})

export const changePasswordSchema = z.object({ 
  newPassword: z
  .string()
  .min(8, { message: 'Password must be at least 8 characters' })
  .refine((value) => /[A-Z]/.test(value), { message: 'Password must contain at least one uppercase letter' })
  .refine((value) => /[0-9]/.test(value), { message: 'Password must contain at least one number' })
  .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), { message: 'Password must contain at least one special character' }),
  confirmPassword: z.string()
  .min(8, { message: 'Password must be at least 8 characters' })
  .refine((value) => /[A-Z]/.test(value), { message: 'Password must contain at least one uppercase letter' })
  .refine((value) => /[0-9]/.test(value), { message: 'Password must contain at least one number' })
  .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), { message: 'Password must contain at least one special character' }),
})

const addressSchema = z.object({
  line1: z.string().optional(),
  line2: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  postal_code: z.coerce.number().optional(),
});

export const userSchema = z.object({
  username: usernameValidation, 
  firstName: z.string().min(1, { message: "Please Enter your Name!"}),
  lastName: z.string().min(1, { message: "Please Enter your Name!"}),
  mobile: z.coerce.number().min(0, { message: 'Mobile Number must be non-negative!' }),
  birthDate: z.date().default(new Date()),
  photo: z.object({
    public_id: z.string().optional(),
    secure_url: z.string().optional(),
  }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string()
  .min(8, { message: 'Password must be at least 8 characters' })
  .refine((value) => /[A-Z]/.test(value), { message: 'Password must contain at least one uppercase letter' })
  .refine((value) => /[0-9]/.test(value), { message: 'Password must contain at least one number' })
  .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), { message: 'Password must contain at least one special character' }).optional(),
  role: z.enum(["User", "Admin", "Teacher", "Student", "Developer", "Investor"]).default("User").optional(),
  address: addressSchema.optional(),
})
