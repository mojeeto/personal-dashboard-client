import { z } from "zod";

export const emailValidation = z.object({
  email: z
    .string({
      required_error: "Email is required!",
    })
    .email({
      message: "Please enter valid email!.",
    }),
});

export const passwordValidation = z.object({
  password: z
    .string({
      required_error: "Password is required!",
    })
    .trim()
    .min(5, "Password Valid Lenght is between 5 and 20.")
    .max(20, "Password Valid Lenght is between 5 and 20."),
});

export const forenameSurnameValidation = z
  .object({
    forename: z
      .string({
        required_error: "Please enter the forename.",
      })
      .trim(),
    surname: z
      .string({
        required_error: "Please enter the surname.",
      })
      .trim(),
  })
  .required({
    forename: true,
  });
