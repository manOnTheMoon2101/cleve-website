"use client";
import Hero from "./components/body/Body";
import Footer from "@/app/components/body/components/layout/footer/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from "@/app/components/body/components/layout/navbar/Navbar";
import { motion, useScroll } from "framer-motion";
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
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2.5 bg-emerald-400 rounded transform origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <main className="m-5">
        <Navbar />
        <div>
          <Hero />
        </div>
        <div className="mt-96  ">
          <Section>
            <Footer />
          </Section>
        </div>
      </main>
    </>
  );
}
