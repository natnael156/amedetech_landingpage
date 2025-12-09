import { z } from 'zod'

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z
    .string()
    .email('Invalid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(255, 'Email must be less than 255 characters'),
  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  consent: z.boolean().optional(),
  honeypot: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Newsletter Subscription Schema
export const subscribeSchema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(255, 'Email must be less than 255 characters'),
})

export type SubscribeFormData = z.infer<typeof subscribeSchema>

// Validation error messages
export const validationMessages = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  minLength: (min: number) => `Must be at least ${min} characters`,
  maxLength: (max: number) => `Must be less than ${max} characters`,
  consent: 'You must agree to continue',
}
