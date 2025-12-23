"use client";

import { useState } from "react";
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

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export function WaitlistForm() {
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setMessage("");

    try {
      const formData = new URLSearchParams();
      formData.append("form-name", "waitlist");
      formData.append("email", values.email);

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (response.ok) {
        setMessage("You've been added to the waitlist!");
        form.reset();
      } else {
        setMessage("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage("Something went wrong. Please try again later.");
    }

    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form
        name="waitlist"
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full sm:flex-row gap-2 pt-8 sm:pt-0"
      >
        <input type="hidden" name="form-name" value="waitlist" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
          </label>
        </p>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
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
          disabled={isSubmitting}
          className="bg-[#5a8a7a] hover:bg-[#4a7a6a] text-white px-8"
        >
          {isSubmitting ? "Joining..." : "Join waitlist"}
        </Button>
      </form>
      {message && (
        <p className={`text-sm mt-2 ${message.includes("added") ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </Form>
  );
}
