import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-[#141F19] text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8  md:pt-0 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center justify-center">
          <div className="flex flex-col gap-4 max-w-md">
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <div className="w-12 h-12 bg-[#5a8a7a] rounded-full flex items-center justify-center overflow-clip relative">
                <Image
                  src="/confessions-na-logo.svg"
                  alt="Confessions Na Logo"
                  width={128}
                  height={128}
                />
              </div>
              <span className="text-xl md:text-3xl font-inter tracking-wide font-black">
                ConfessionsNA
              </span>
            </div>
            <h1 className="text-3xl lg:text-6xl font-inter font-black tracking-wide text-center lg:text-left">
              The city is small. <br></br> The tea is big.
            </h1>

            <p className="text-pretty text-sm text-center lg:text-left md:text-lg text-muted leading-relaxed">
              From the Katutura to Kleine Kuppe, Matutura to Mile-7, the tea is
              officially boiling. Be the first to see the confessions from your
              suburb!
            </p>

            {/* Email Signup Form */}
            <WaitlistForm />

            <p className="text-sm text-accent text-center lg:text-left">
              Join 500+ Namibians waiting for launch.
            </p>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end p-8">
            <Image
              src="/confessions-na-hero-image1.png"
              alt="Confessions Na Hero Image"
              width={900}
              height={1080}
              className="w-full max-w-lg p-2 m-2  bg-black/10"
              priority
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t border-[#3a5a5a]">
        <div className="flex justify-center md:justify-start items-center gap-2">
          <Link
            href="https://confessionsna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(144,20%,90%)]"
          >
            <Instagram className="w-6 h-6" />
          </Link>
          <Link
            href="https://confessionsna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e0ebe4] p-4 rounded-full"
          >
            <Image
              src="/tiktok.svg"
              alt="Confessions Na Logo"
              width={64}
              height={64}
              className=" w-6 h-6"
            />
          </Link>
        </div>
      </footer>
    </div>
  );
}
