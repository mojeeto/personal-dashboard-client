"use client";

import { useForm } from "react-hook-form";
import { signUpValidation } from "@/validations";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Form,
  FormItem,
  FormMessage,
  FormControl,
  FormField,
  FormLabel,
} from "../ui/form";
import { signupAction } from "@/actions/auth";
import { toast } from "sonner";

const SignupForm: React.FC = () => {
  const form = useForm<z.infer<typeof signUpValidation>>({
    resolver: zodResolver(signUpValidation),
    defaultValues: {
      forename: "",
      surname: "",
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  async function onSubmit({
    forename,
    surname,
    email,
    password,
  }: z.infer<typeof signUpValidation>) {
    const response = await signupAction(forename, surname, email, password);

    if (response.statusCode !== 201) {
      toast.error(response.message);
      router.replace("/login");
      return;
    }
    toast.success(response.message);
    router.replace("/login");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        method="POST"
      >
        <FormField
          control={form.control}
          name={"forename"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Forename:</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"surname"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Surname:</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"email"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input {...field} autoComplete="email" type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"password"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password:</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  autoComplete="current-password"
                  type="password"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Register!</Button>
        <Button
          type="button"
          onClick={() => router.replace("/login")}
          variant={"link"}
        >
          Login with Email.
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
