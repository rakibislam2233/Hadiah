import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z.string({ required_error: "Full name is required" }),
    email: z.string({ required_error: "Email is required" }).email(),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, "Password must be at least 6 characters long")
      .max(255),
    confirmPassword: z
      .string({ required_error: "Confirm password is required" })
      .min(6, "Confirm password must be at least 6 characters long")
      .max(255),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
