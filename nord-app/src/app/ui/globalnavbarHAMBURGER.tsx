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
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { PencilLine, Menu } from "lucide-react";

// ... (rest of the code)

export default function GlobalNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`bg-transparent p-8 ${isScrolled ? "bg-white" : ""}`}
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Nord Assistant Logo" width={30} height={30} />
          <p className="px-2 text-lg font-normal">Nord Assistant</p>
        </Link>
        <div className="flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[250px] gap-3 p-6">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex w-full select-none flex-col rounded-md bg-gradient-to-b from-white to-purple-200 p-6 no-underline shadow outline-none focus:shadow-md "
                          href="../about/blog"
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
                    {/* <ListItem href="/" title="Founding Team">
                      Meet the founding team behind Nord Assistant.
                    </ListItem> */}
                    <ListItem href="../about/mission" title="Mission">
                      What we hope to accomplish.
                    </ListItem>
                    <ListItem href="/about/contact" title="Contact Us">
                      Reach out to our team to schedule a demo or ask a
                      question.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
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
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <Link href="/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent`}
                  >
                    Dashboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>{" "}
            </NavigationMenuList>
          </NavigationMenu>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: { width: "2.5rem", height: "2.5rem" },
              },
            }}
          />
          <button
            className="ml-2 rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pb-3 pt-2 sm:px-3">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-3 p-6">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex w-full select-none flex-col rounded-md bg-gradient-to-b from-white to-purple-200 p-6 no-underline shadow outline-none focus:shadow-md "
                            href="../about/blog"
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
                      {/* <ListItem href="/" title="Founding Team">
                      Meet the founding team behind Nord Assistant.
                    </ListItem> */}
                      <ListItem href="../about/mission" title="Mission">
                        What we hope to accomplish.
                      </ListItem>
                      <ListItem href="/about/contact" title="Contact Us">
                        Reach out to our team to schedule a demo or ask a
                        question.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>{" "}
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/dashboard" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} bg-transparent`}
                    >
                      Dashboard
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      )}
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
