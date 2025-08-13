"use client";
import Hero from "./components/body/Body";
import Footer from "@/app/components/body/components/layout/footer/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion, useScroll } from "framer-motion";
import About from "./about/page";
import { InViewBasic } from "./about/components/Body/Body";
import AboutContent from "./about/components/About";
import ProjectsContent from "./projects/components/Projects";
import { DockExample } from "./components/body/components/dock/ActuallDock/Navbar";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <header id="home">
        <AboutContent />
      </header>

      <main className="m-5">
        <div id="about">
          <Hero />
        </div>

        <div>
          <InViewBasic />
        </div>

        <div className="my-96" id="projects">
          <Section>
            <ProjectsContent />
          </Section>
        </div>

        <div className="mt-96">
          <Section>
            <Footer />
          </Section>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-40">
        <DockExample />
      </div>
    </motion.div>
  );
}
