"use client";

import {
  Dock,
  DockItem,
  DockIcon,
  DockLabel,
} from "@/app/components/body/components/dock/Dock";
import { HomeIcon, UserIcon, FolderKanban } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../../provider/Button";
import { Socials } from "../../socials/Socials";
import { Sword } from "lucide-react";
export function DockExample() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <Dock>
      <Link href="/" className={`${isActive("/") ? "text-accent" : ""}`}>
        <DockItem>
          <DockIcon>
            <HomeIcon className="w-full h-full" />
          </DockIcon>
          <DockLabel>Home</DockLabel>
        </DockItem>
      </Link>
      <Link
        href="/about"
        className={`${isActive("/about") ? "text-accent" : ""}`}
      >
        <DockItem>
          <DockIcon>
            <UserIcon className="w-full h-full" />
          </DockIcon>
          <DockLabel>About</DockLabel>
        </DockItem>
      </Link>
      <Link
        href="/projects"
        className={`${isActive("/projects") ? "text-accent" : ""}`}
      >
        <DockItem>
          <DockIcon>
            <Sword className="w-full h-full" />
          </DockIcon>
          <DockLabel>My Adventure</DockLabel>
        </DockItem>
      </Link>
      |
      {/* <div>
        <DockItem>
          <ModeToggle />
        </DockItem>
      </div> */}
      <div>
        <DockItem>
          <Socials />
        </DockItem>
      </div>
    </Dock>
  );
}
