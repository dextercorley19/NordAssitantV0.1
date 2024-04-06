"use client";

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

const GlobalNavBar = () => {
  return (
    <div>
      <div className="p-4 shadow">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Nord Assistant Logo"
              width={30}
              height={30}
            />
            <p className="px-2">Nord Assistant</p>
          </Link>
          <div className="flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent className="col-span-full p-1.5">
                    <Link href="">
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Founding Team
                      </NavigationMenuLink>
                    </Link>

                    <Link href="">
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Mission
                      </NavigationMenuLink>
                    </Link>

                    <Link href="">
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        Contact us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/Blog">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="">
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Docs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalNavBar;
