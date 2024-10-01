"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { Socials } from "../../components/socials/Socials";
import { usePathname } from "next/navigation";
import { FaPersonRays } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
export function NavMenu() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <IoMdMenu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator /> */}
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/" className="flex flex-row w-full justify-evenly">
              <FaHome
                className={`white w-1/2 ${
                  isActive("/") ? "text-emerald-400" : ""
                }`}
                size={25}
              />
              <span className="w-1/2 ">Home</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/pages/about"
              className="flex flex-row w-full justify-evenly"
            >
              <FaPersonRays
                className={
                  isActive("/pages/about")
                    ? "text-emerald-400 w-1/2 "
                    : "w-1/2 "
                }
              />
              <span className="w-1/2 ">About</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/pages/projects"
              className="flex flex-row w-full justify-evenly"
            >
              <FaCode
                className={
                  isActive("/pages/projects")
                    ? "text-emerald-400 underline w-1/2 "
                    : "w-1/2 "
                }
              />
              <span className="w-1/2 ">Projects</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <Socials />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
