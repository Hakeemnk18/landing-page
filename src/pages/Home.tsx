import { Hero } from "../sections/Hero/Hero";
import { Features } from "../sections/Features/Features";

import { Moon, Sun } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const { toggleTheme, theme } = useTheme();

  return (
    <main className="relative">
      {/* Floating Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-slate-100 dark:bg-slate-800 shadow-lg"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      <Hero />
      <Features />

      {/* CTA Section Example */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to package your success?
        </h2>
        <p className="mb-8">Contact us at {siteConfig.phone}</p>
        <a
          href={`tel:${siteConfig.phone}`}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Call Now
        </a>
      </section>
    </main>
  );
}
