"use client";

import Hero from "@/src/components/main/Hero";
import Projects from "@/src/components/main/Projects";
import About from "@/src/components/main/About";
import Education from "@/src/components/main/Education";
import Contact from "@/src/components/main/Contact";
import { Card } from "../components/main/CertiCard";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Education />
        <Card />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
