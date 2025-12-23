import { Button } from "@/components/ui/button";
import { WaitlistSignup } from "./WaitlistSignup";
import { MapPin, Layers, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#1e3a3a] text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#5a8a7a] rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <span className="text-xl font-semibold">Confessions Na</span>
        </div>
        <Button
          variant="outline"
          className="bg-[#5a8a7a] border-[#5a8a7a] text-white hover:bg-[#4a7a6a] hover:text-white"
        >
          Beta Coming Soon
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Discover the Secrets of Your Suburb. Anonymously.
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Explore the map of Namibia, tap an area, and unlock the local
              chatter. Read real confessions, react, and join the
              discussion—completely incognito.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              It&apos;s like hearing the neighborhood gossip, but organized like
              your favorite forum.
            </p>

            {/* Email Signup Form */}
            <WaitlistSignup />

            <p className="text-sm text-gray-400">
              Join 1,500+ Namibians waiting for launch.
            </p>
          </div>

          {/* Phone Mockup */}
          {/* <div className="relative flex justify-center lg:justify-end">
            <Image
              src="images/phone-image.png"
              alt="Confessions Na App Interface"
              width={500}
              height={800}
              className="w-full max-w-md"
              priority
            />
          </div> */}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">
          How Confessions Na Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Feature 1 */}
          <div className="space-y-4">
            <div className="w-16 h-16 flex items-center justify-center">
              <MapPin className="w-12 h-12 text-[#5a8a7a]" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold">Explore Locally.</h3>
            <p className="text-gray-300 leading-relaxed">
              Browse an interactive map of Namibia. Zoom into your city, find
              your specific suburb, and see where the activity is piping hot.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="space-y-4">
            <div className="w-16 h-16 flex items-center justify-center">
              <Layers className="w-12 h-12 text-[#5a8a7a]" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold">Unlock the Stories.</h3>
            <p className="text-gray-300 leading-relaxed">
              Tap a suburb to slide up the &quot;Confession Drawer.&quot;
              Instantly view a feed of anonymous posts tied specifically to that
              location.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="space-y-4">
            <div className="w-16 h-16 flex items-center justify-center">
              <MessageCircle
                className="w-12 h-12 text-[#5a8a7a]"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-2xl font-bold">React Anonymously.</h3>
            <p className="text-gray-300 leading-relaxed">
              Post your own confessions using a randomized handle. Upvote the
              juicy stuff, downvote the spam, and comment on the drama.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-[#3a5a5a]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Confessions Na. Made for Namibia 🇳🇦
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
