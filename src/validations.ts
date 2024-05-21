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
