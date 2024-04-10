"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";
import { UserButton } from "@clerk/nextjs";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { PencilLine } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Nord Chat",
    href: "/",
    description:
      "Setup Nord with every piece of written information to your vessel.",
  },
  {
    title: "Maintenance Logs",
    href: "/",
    description:
      "From davot crane interworkings to fuel transfers, Nord can help. Add your mechanic to always be on the same page, and never miss an oil change again.",
  },
  {
    title: "Inventory Management",
    href: "/",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  // {
  //   title: "Scroll-area",
  //   href: "/",
  //   description: "Visually or semantically separates content.",
  // },
  // {
  //   title: "Tabs",
  //   href: "/",
  //   description:
  //     "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  // },
  // {
  //   title: "Tooltip",
  //   href: "/",
  //   description:
  //     "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  // },
];

export default function GlobalNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 0 pixels
      setIsScrolled(window.scrollY > 0);
    };

    // Listen for scroll events on the window
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // The empty array ensures this effect runs only once on mount

  return (
    <div
      className={`bg-transparent p-8 ${isScrolled ? "bg-white" : ""}`}
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Nord Assistant Logo" width={30} height={30} />
          <p className="px-2 text-lg font-medium">Nord Assistant</p>
        </Link>
        <div className="flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-white to-purple-200 p-6 no-underline shadow outline-none focus:shadow-md "
                          href="/blog"
                        >
                          <PencilLine className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Blog
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Read about some of the best adventures our users
                            embark on, and how they use Nord Assistant.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Founding Team">
                      Meet the founding team behind Nord Assistant.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Mission">
                      What we hope to accomplish.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Contact Us"
                    >
                      Reach out to our team to schedule a demo or ask a
                      question.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Docs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent`}
                  >
                    Dashboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: { width: "2.5rem", height: "2.5rem" },
              },
            }}
          />{" "}
        </div>
      </div>
    </div>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
