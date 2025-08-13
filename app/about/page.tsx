"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion, useScroll } from "framer-motion";
import AboutContent from "./components/About";
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

export default function About() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 200 }}
    transition={{ 
      duration: 0.5,
      ease: "easeInOut"
    }}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-accent to-primary rounded transform origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <main className="m-5">
        <div className="mt-20">
          <Section>
            <AboutContent />
          </Section>
        </div>

      </main>
    </motion.div>
  );
}
