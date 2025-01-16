"use client";

import {
  Dock,
  DockItem,
  DockIcon,
  DockLabel,
} from "@/app/components/body/components/dock/Dock";
import { HomeIcon, SettingsIcon, UserIcon, FolderKanban } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function DockExample() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <Dock>
      <Link href="/" className={`${isActive("/") ? "text-emerald-400" : ""}`}>
        <DockItem>
          <DockIcon>
            <HomeIcon className="w-full h-full" />
          </DockIcon>
          <DockLabel>Home</DockLabel>
        </DockItem>
      </Link>

      <Link
        href="/pages/about"
        className={`${isActive("/pages/about") ? "text-emerald-400" : ""}`}
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
        className={`${isActive("/pages/projects") ? "text-emerald-400" : ""}`}
      >
        <DockItem>
          <DockIcon>
            <FolderKanban className="w-full h-full" />
          </DockIcon>
          <DockLabel>Projects</DockLabel>
        </DockItem>
      </Link>
    </Dock>
  );
}
