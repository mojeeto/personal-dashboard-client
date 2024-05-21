import { z } from "zod";

export const emailValidation = z
  .object({
    email: z.string().email({
      message: "Please enter valid email!.",
    }),
  })
  .required({
    email: true,
  });

export const passwordValidation = z
  .object({
    password: z
      .string()
      .trim()
      .min(5, "Password is required!")
      .max(20, "Password Valid Lenght is between 5 and 20."),
  })
  .required({
    password: true,
  });

export const forenameSurnameValidation = z
  .object({
    forename: z.string().min(4, "Forename is required!").trim(),
    surname: z.string().trim(),
  })
  .required({
    forename: true,
  });
