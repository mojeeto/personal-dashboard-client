import { z } from "zod";

export const loginValidation = z
  .object({
    email: z.string().email({
      message: "Please enter valid email!.",
    }),
    password: z
      .string()
      .trim()
      .min(5, "Password is required!")
      .max(20, "Password Valid Lenght is between 5 and 20."),
  })
  .required({
    email: true,
    password: true,
  });

export const signUpValidation = z
  .object({
    forename: z.string().min(4, "Forename is required!").trim(),
    surname: z.string().trim(),
  })
  .required({
    forename: true,
  })
  .merge(loginValidation);

export const contactZodObject = z
  .object({
    name: z.string({
      required_error: "Name for contact is required!",
    }),
    phoneNumber: z
      .string()
      .trim()
      .refine((arg) => {
        if ([0, 11].includes(arg.length)) return true;
      }, "PhoneNumber must be 11 length and starts with 0."),
    bankCartNumber: z.string().refine((arg) => {
      if ([0, 16].includes(arg.length)) return true;
    }, "Bank Number must contain exactly 19 character(s)"),
  })
  .partial({
    phoneNumber: true,
    bankCartNumber: true,
  });
