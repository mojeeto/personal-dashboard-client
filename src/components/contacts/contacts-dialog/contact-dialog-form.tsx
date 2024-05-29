"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import DialogTwoButtonFooter from "@/components/dialog/dialog-two-button-footer";
import { Input } from "@/components/ui/input";
import { contactZodObject } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function ContactDialogContent() {
  const form = useForm<z.infer<typeof contactZodObject>>({
    resolver: zodResolver(contactZodObject),
    defaultValues: {
      name: "",
      phoneNumber: "",
      bankCartNumber: "",
    },
  });

  async function onSubmit({
    name,
    phoneNumber,
    bankCartNumber,
  }: z.infer<typeof contactZodObject>) {
    console.log(name, phoneNumber, bankCartNumber);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name={"name"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name:</FormLabel>
              <FormControl>
                <Input {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"phoneNumber"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number:</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"bankCartNumber"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cart Bank Number:</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogTwoButtonFooter primaryButtonText="Create Contact" />
      </form>
    </Form>
  );
}
