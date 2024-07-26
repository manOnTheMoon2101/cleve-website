"use client";
import Header from "./components/header/Header";
import Welcome from "./components/body/welcome/Welcome";
import Projects from "./components/body/projects/Projects";
import Footer from "./components/layout/footer/Footer";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from "./components/layout/navbar/Navbar";
import Badge from "./components/body/CarbonBadge/Badge";

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
    <main className="m-1">
      <Navbar />
      <div>
        <Section>
          {" "}
          <Header />
        </Section>
      </div>
      <div className="relative top-32">
        {" "}
        <Section>
          {" "}
          <Welcome />
        </Section>
      </div>
      <div className="relative top-64">
        {" "}
        <Section>
          {" "}
          <Projects />
        </Section>
      </div>
      <div className="relative top-64">
        {" "}
        <Section>
          {" "}
          <Badge />
        </Section>
      </div>
      <div className="relative top-96">
        {" "}
        <Section>
          {" "}
          <Footer />
        </Section>
      </div>
    </main>
  );
}
