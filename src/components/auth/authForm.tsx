"use client";

import { useForm } from "react-hook-form";
import { Fragment } from "react";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  emailValidation,
  forenameSurnameValidation,
  passwordValidation,
} from "@/validations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { stringTitle } from "@/lib/utils";

interface AuthFormProps {
  mode?: "login" | "register";
}

const AuthForm: React.FC<AuthFormProps> = ({ mode = "login" }) => {
  let zodFormSchema = emailValidation
    .merge(passwordValidation)
    .merge(forenameSurnameValidation);
  const fields = ["forename", "surname", "email", "password"] as const;
  const form = useForm<z.infer<typeof zodFormSchema>>({
    resolver: zodResolver(zodFormSchema),
    defaultValues: {
      email: "",
      password: "",
      forename: "",
      surname: "",
    },
  });

  function onSubmit(values: z.infer<typeof zodFormSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {fields!.map((name) => {
          // for ignore forename and surname input in login page
          if (mode === "login" && ["forename", "surname"].includes(name)) {
            return <Fragment key={name}></Fragment>;
          }
          return (
            <FormField
              control={form.control}
              name={name}
              key={name}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>{stringTitle(name)}:</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          );
        })}
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
};

export default AuthForm;
