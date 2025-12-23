"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function WaitlistForm() {
  const formSchema = z.object({
    email: z.string().min(2).max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  return (
    <Form {...form}>
      <form
        name="waitlist"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="flex flex-col w-full sm:flex-row gap-2 pt-8 sm:pt-0"
      >
        <input type="hidden" name="form-name" value="waitlist" />
        <p className="hidden">
          <input name="bot-field" />
        </p>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  className="w-full bg-[#2a4a4a] border-[#3a5a5a] text-white placeholder:text-gray-400"
                  placeholder="Enter your email address"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-[#5a8a7a] hover:bg-[#4a7a6a] text-white px-8"
        >
          Join waitlist
        </Button>
      </form>
    </Form>
  );
}
