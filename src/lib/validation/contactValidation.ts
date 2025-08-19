// src/validations/contact.validation.ts
import { z } from "zod";

const attachmentSchema = z.object({
  file: z
    .file()
    .min(1, { message: "File is required" })
    .max(5 * 1024 * 1024, { message: "File size must be less than 5MB" })
    .mime(["image/png", "image/jpeg", "application/pdf"], {
      message: "Only PNG, JPEG, or PDF files are allowed",
    }),
});

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.email({ pattern: z.regexes.email }), // equivalent

  phone: z.string().optional(),
  company: z.string().optional(),
  serviceType: z.enum([
    "web-development",
    "mobile-app",
    "ui-ux",
    "seo",
    "other",
  ]),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  projectDescription: z
    .string()
    .min(10, "Please describe your project in detail"),

  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
  attachments: z.array(attachmentSchema).optional(),
});

// Inferred Type (for backend API handlers)
