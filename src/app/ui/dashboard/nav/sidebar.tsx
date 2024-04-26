"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  TooltipContent,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import logo from "../../../assets/logo.svg";
import {
  Book,
  Bot,
  LifeBuoy,
  Package,
  Settings2,
  Ship,
  SquareTerminal,
  SquareUser,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function DashboardNav() {
  // State to track the active link
  const [activeLink, setActiveLink] = useState<string>("");

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };

  // Helper function to generate class name
  const getButtonClassName = (link: string) => {
    return `rounded-lg ${activeLink === link ? "bg-muted" : ""}`;
  };

  return (
    <TooltipProvider>
      <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
        <nav className="grid gap-1 p-2">
          <div className="border-b py-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/dashboard">
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Home"
                    className={getButtonClassName("/dashboard")}
                    onClick={() => handleSetActiveLink("/dashboard")}
                  >
                    <Image src={logo} width={20} height={20} alt="nord logo" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Home
              </TooltipContent>
            </Tooltip>
          </div>

          {[
            {
              href: "/dashboard/datacenter",
              icon: <SquareTerminal className="size-5" />,
              label: "Data Center",
            },
            {
              href: "/dashboard/inventory",
              icon: <Package className="size-5" />,
              label: "Inventory",
            },
            {
              href: "/dashboard/triplog",
              icon: <Ship className="size-5" />,
              label: "Trip Log",
            },
            {
              href: "/dashboard/maintenance",
              icon: <Wrench className="size-5" />,
              label: "Maintenance",
            },
            {
              href: "/dashboard/documentation",
              icon: <Book className="size-5" />,
              label: "Documentation",
            },
            {
              href: "/dashboard/settings",
              icon: <Settings2 className="size-5" />,
              label: "Settings",
            },
            {
              href: "/dashboard/chat",
              icon: <Bot className="size-5" />,
              label: "Chat",
            },
          ].map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={getButtonClassName(item.href)}
                    aria-label={item.label}
                    onClick={() => handleSetActiveLink(item.href)}
                  >
                    {item.icon}
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                {item.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
        <nav className="mb-4 mt-auto grid gap-1 p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Help"
                >
                  <LifeBuoy className="size-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Help
            </TooltipContent>
          </Tooltip>
          <SignedIn>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <UserButton />
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Manage Your Account
              </TooltipContent>
            </Tooltip>
          </SignedIn>
        </nav>
      </aside>
    </TooltipProvider>
  );
}
