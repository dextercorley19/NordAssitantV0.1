"use client";

import * as React from "react";
import { LayersIcon } from "@radix-ui/react-icons";

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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function GlobalNavBar() {
  return (
    <div
      className="bg-white p-4 shadow"
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
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <LayersIcon className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy
                            and paste into your apps. Accessible. Customizable.
                            Open Source.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
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

    // <div
    //   className="bg-white p-4 shadow"
    //   style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
    // >
    //   <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
    //     <Link href="/" className="flex items-center">
    //       <Image src={logo} alt="Nord Assistant Logo" width={30} height={30} />
    //       <p className="px-2 text-lg font-medium">Nord Assistant</p>
    //     </Link>
    //     <div className="flex items-center gap-2">
    //       <NavigationMenu>
    //         <NavigationMenuList>
    //           <NavigationMenuItem>
    //             <NavigationMenuTrigger>About</NavigationMenuTrigger>
    //             <NavigationMenuContent className="col-span-full p-1.5">
    //               <Link href="/">
    //                 <NavigationMenuLink
    //                   className={navigationMenuTriggerStyle()}
    //                 >
    //                   Founding Team
    //                 </NavigationMenuLink>
    //               </Link>

    //               <Link href="/">
    //                 <NavigationMenuLink
    //                   className={navigationMenuTriggerStyle()}
    //                 >
    //                   Mission
    //                 </NavigationMenuLink>
    //               </Link>

    //               <Link href="/">
    //                 <NavigationMenuLink
    //                   className={navigationMenuTriggerStyle()}
    //                 >
    //                   Contact us
    //                 </NavigationMenuLink>
    //               </Link>
    //             </NavigationMenuContent>
    //           </NavigationMenuItem>
    //           <NavigationMenuItem>
    //             <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
    //             <NavigationMenuContent className="col-span-full p-1.5">
    //               <div className="inline-flex h-80 w-96 flex-col items-start justify-start gap-2.5 rounded-md border border-slate-200 bg-white p-6 shadow">
    //                 <div className="inline-flex items-start justify-start gap-3">
    //                   <Link href="/">
    //                     <NavigationMenuLink
    //                       className={navigationMenuTriggerStyle()}

    //                     >
    //                      <div className="relative h-64 w-48">
    //                       <div className="absolute left-0 top-0 h-64 w-48 rounded bg-gradient-to-b from-rose-500 via-fuchsia-800 to-indigo-700" />
    //                       <div className="absolute left-[24px] top-[100px] inline-flex flex-col items-start justify-start gap-5">
    //                         <div className="h-5 w-5 rounded-full bg-white" />
    //                         <div className="flex flex-col items-start justify-start gap-2">
    //                           <div className="font-['Inter'] text-lg font-medium leading-normal text-white">
    //                             shadcn/ui
    //                           </div>
    //                           <div className="w-36 font-['Inter'] text-sm font-normal leading-none text-slate-200">
    //                             Beautifully designed components built with Radix
    //                             UI and Tailwind CSS.
    //                           </div>
    //                         </div>
    //                       </div>
    //                       </div>
    //                     </NavigationMenuLink>
    //                   </Link>

    //                   <div className="inline-flex flex-col items-start justify-start gap-3">
    //                     <Link href="/">
    //                       <NavigationMenuLink
    //                         className={navigationMenuTriggerStyle()}
    //                       >
    //                         <div className="flex flex-col items-start justify-start gap-2.5 rounded-md bg-white p-3">
    //                           <div className="flex flex-col items-start justify-start gap-1">
    //                             <div className="font-['Inter'] text-sm font-medium leading-none text-black">
    //                               Introduction
    //                             </div>
    //                             <div className="w-56 font-['Inter'] text-sm font-normal leading-tight text-slate-500">
    //                               Re-usable components built using Radix UI and
    //                               Tailwind CSS
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </NavigationMenuLink>
    //                     </Link>
    //                     <Link href="/">
    //                       <NavigationMenuLink
    //                         className={navigationMenuTriggerStyle()}
    //                       >
    //                         <div className="flex flex-col items-start justify-start gap-2.5 rounded-md bg-white p-3">
    //                           <div className="flex flex-col items-start justify-start gap-1">
    //                             <div className="font-['Inter'] text-sm font-medium leading-none text-black">
    //                               Installation
    //                             </div>
    //                             <div className="w-56 font-['Inter'] text-sm font-normal leading-tight text-slate-500">
    //                               How to install dependencies and structure your
    //                               app.
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </NavigationMenuLink>
    //                     </Link>
    //                     <Link href="/">
    //                       <NavigationMenuLink
    //                         className={navigationMenuTriggerStyle()}
    //                       >
    //                         <div className="flex flex-col items-start justify-start gap-2.5 rounded-md bg-white p-3">
    //                           <div className="flex flex-col items-start justify-start gap-1">
    //                             <div className="font-['Inter'] text-sm font-medium leading-none text-black">
    //                               Typography
    //                             </div>
    //                             <div className="w-56 font-['Inter'] text-sm font-normal leading-tight text-slate-500">
    //                               Styles for headings, paragraphs, lists...etc
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </NavigationMenuLink>
    //                     </Link>
    //                   </div>
    //                 </div>
    //               </div>
    //             </NavigationMenuContent>
    //           </NavigationMenuItem>
    //           <NavigationMenuItem>
    //             <Link href="/">
    //               <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //                 Docs
    //               </NavigationMenuLink>
    //             </Link>
    //           </NavigationMenuItem>
    //           <NavigationMenuItem>
    //             <Link href="/docs" legacyBehavior passHref>
    //               <NavigationMenuLink className={navigationMenuTriggerStyle()}>
    //                 Dashboard
    //               </NavigationMenuLink>
    //             </Link>
    //           </NavigationMenuItem>
    //         </NavigationMenuList>
    //       </NavigationMenu>
    //       <UserButton
    //         afterSignOutUrl="/"
    //         appearance={{
    //           elements: {
    //             avatarBox: { width: "2.5rem", height: "2.5rem" },
    //           },
    //         }}
    //       />{" "}
    //     </div>
    //   </div>
    // </div>
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
// <div className="inline-flex h-80 w-96 flex-col items-start justify-start gap-2.5 rounded-md border border-slate-200 bg-white p-6 shadow">
//   <div className="inline-flex items-start justify-start gap-3">
//     <div className="relative h-64 w-48">
//       <div className="absolute left-0 top-0 h-64 w-48 rounded bg-gradient-to-b from-rose-500 via-fuchsia-800 to-indigo-700" />
//       <div className="absolute left-[24px] top-[100px] inline-flex flex-col items-start justify-start gap-5">
//         <div className="h-5 w-5 rounded-full bg-white" />
//         <div className="flex flex-col items-start justify-start gap-2">
//           <div className="font-['Inter'] text-lg font-medium leading-normal text-white">
//             shadcn/ui
//           </div>
//           <div className="w-36 font-['Inter'] text-sm font-normal leading-none text-slate-200">
//             Beautifully designed components built with Radix UI and Tailwind
//             CSS.
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="inline-flex flex-col items-start justify-start gap-3">
//       <div className="flex flex-col items-start justify-start gap-2.5 rounded-md bg-white p-3">
//         <div className="flex flex-col items-start justify-start gap-1">
//           <div className="font-['Inter'] text-sm font-medium leading-none text-black">
//             Introduction
//           </div>
//           <div className="w-56 font-['Inter'] text-sm font-normal leading-tight text-slate-500">
//             Re-usable components built using Radix UI and Tailwind CSS
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col items-start justify-start gap-2.5 rounded-md bg-white p-3">
//         <div className="flex flex-col items-start justify-start gap-1">
//           <div className="font-['Inter'] text-sm font-medium leading-none text-black">
//             Installation
//           </div>
//           <div className="w-56 font-['Inter'] text-sm font-normal leading-tight text-slate-500">
//             How to install dependencies and structure your app.
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col items-start justify-start gap-2.5 rounded-md bg-white p-3">
//         <div className="flex flex-col items-start justify-start gap-1">
//           <div className="font-['Inter'] text-sm font-medium leading-none text-black">
//             Typography
//           </div>
//           <div className="w-56 font-['Inter'] text-sm font-normal leading-tight text-slate-500">
//             Styles for headings, paragraphs, lists...etc
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>;
