"use client";

import React, { useState, useTransition } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./Form";
// import { sendEmail } from "@/actions/contact";
import { Button } from "../ui/button";

type FormField = {
  name: string;
  placeholder: string;
  required: string;
  valid?: string;
};

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [emailStatus, setEmailStatus] = useState<{
    success: boolean | undefined;
    message: string;
  }>({
    success: undefined,
    message: "",
  });

  const ContactFormSchema = z.object({
    fullname: z.string().min(1, { message: "Full name is required" }),
    email: z.email({ message: "Must be a valid email" }).min(1, { message: "Email is required" }),
    message: z.string().min(1, { message: "Message is required" }),
  });

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    mode: "all",
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof ContactFormSchema>) => {
    startTransition(() => {
      // sendEmail(data)
      //   .then((response) => setEmailStatus(response))
      //   .catch((error) => setEmailStatus(error));
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-9">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name={"fullname"}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder={"Full Name"} disabled={isPending} />
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
                <FormControl>
                  <Input {...field} placeholder={"Email"} disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"message"}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder={"Write your message here"}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {emailStatus.success === true && (
          <div className="text-kelly-green flex justify-center text-lg">{emailStatus.message}</div>
        )}
        {emailStatus.success === false && (
          <div className="text-english-vermillion flex justify-center text-lg">
            {emailStatus.message}
          </div>
        )}
        <div className="flex justify-center">
          <Button disabled={isPending} className="text-accent-foreground sm:w-60 md:w-min">
            Send message
          </Button>
        </div>
      </form>
    </Form>
  );
}
