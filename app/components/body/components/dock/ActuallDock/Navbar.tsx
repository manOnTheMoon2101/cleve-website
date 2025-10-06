"use client";
import {
  Dock,
  DockItem,
  DockIcon,
  DockLabel,
} from "@/app/components/body/components/dock/Dock";
import { HomeIcon, UserIcon, FolderKanban } from "lucide-react";
import { useEffect, useState } from "react";
import { Sword } from "lucide-react";

export function DockExample() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sections = ["home", "about", "projects"];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const isActive = (section: string) => activeSection === section;

  return (
    <Dock>
      <button
        onClick={() => scrollToSection("home")}
        className={`${isActive("home") ? "text-accent" : ""}`}
      >
        <DockItem>
          <DockIcon>
            <HomeIcon className="w-full h-full" />
          </DockIcon>
          <DockLabel>Home</DockLabel>
        </DockItem>
      </button>

      <button
        onClick={() => scrollToSection("about")}
        className={`${isActive("about") ? "text-accent" : ""}`}
      >
        <DockItem>
          <DockIcon>
            <UserIcon className="w-full h-full" />
          </DockIcon>
          <DockLabel>About</DockLabel>
        </DockItem>
      </button>

      <button
        onClick={() => scrollToSection("projects")}
        className={`${isActive("projects") ? "text-accent" : ""}`}
      >
        <DockItem>
          <DockIcon>
            <Sword className="w-full h-full" />
          </DockIcon>
          <DockLabel>My Adventure</DockLabel>
        </DockItem>
      </button>

      {/* Uncomment these if you want to keep them
      <div>
        <DockItem>
          <ModeToggle />
        </DockItem>
      </div>
      <div>
        <DockItem>
          <Socials />
        </DockItem>
      </div>
      */}
    </Dock>
  );
}
