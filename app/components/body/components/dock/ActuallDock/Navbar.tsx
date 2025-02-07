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
        href="/pages/about"
        className={`${isActive("/pages/about") ? "text-accent" : ""}`}
      >
        <DockItem>
          <DockIcon>
            <UserIcon className="w-full h-full" />
          </DockIcon>
          <DockLabel>About</DockLabel>
        </DockItem>
      </Link>
      <Link
        href="/pages/projects"
        className={`${isActive("/pages/projects") ? "text-accent" : ""}`}
      >
        <DockItem>
          <DockIcon>
            <FolderKanban className="w-full h-full" />
          </DockIcon>
          <DockLabel>Projects</DockLabel>
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
