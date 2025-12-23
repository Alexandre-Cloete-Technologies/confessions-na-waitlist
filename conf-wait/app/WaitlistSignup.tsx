"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addToWaitlist } from "../app/actions";

export function WaitlistSignup() {
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(formData: FormData) {
    const result = await addToWaitlist(formData);
    if (result.success) {
      setMessage(result.message);
    }
  }

  return (
    <div className="flex flex-col gap-2 pt-8">
      <form action={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <Input
          type="email"
          name="email"
          placeholder="Enter your email address..."
          className="bg-[#2a4a4a] border-[#3a5a5a] text-white placeholder:text-gray-400 flex-1"
          required
        />
        <Button
          type="submit"
          className="bg-[#5a8a7a] hover:bg-[#4a7a6a] text-white px-8"
        >
          Get Early Access
        </Button>
      </form>
      {message && <p className="text-sm text-green-400">{message}</p>}
    </div>
  );
}
