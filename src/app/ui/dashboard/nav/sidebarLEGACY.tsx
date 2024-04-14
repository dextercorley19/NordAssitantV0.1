import { Button } from "@/components/ui/button";
import {
  TooltipContent,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {} from "@radix-ui/react-tooltip";
import Image from "next/image";
import logo from "../../../assets/logo.svg";
import {
  Book,
  LifeBuoy,
  Package,
  Settings2,
  Ship,
  SquareTerminal,
  SquareUser,
  Wrench,
} from "lucide-react";
import Link from "next/link";



export default function DashboardNav() {
  return (
    <TooltipProvider>
      <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
        <nav className="grid gap-1 p-2">
          <div className="border-b py-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/dashboard">
                  <Button variant="outline" size="icon" aria-label="Home">
                    <Image src={logo} width={20} height={20} alt="nord logo" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={5}>
                Home
              </TooltipContent>
            </Tooltip>
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/dashboard/datacenter">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg bg-muted" // bg-muted is what shows its on this page
                  aria-label="Data Center"
                >
                  <SquareTerminal className="size-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Data Center
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/dashboard/inventory">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Inventory"
                >
                  <Package className="size-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Inventory
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/dashboard/triplog">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Trip log"
                >
                  <Ship className="size-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Trip Log
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/dashboard/maintenance">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Maintenance"
                >
                  <Wrench className="size-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Maintenace
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Documentation"
                >
                  <Book className="size-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Documentation
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-lg"
                  aria-label="Settings"
                >
                  <Settings2 className="size-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Settings
            </TooltipContent>
          </Tooltip>
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
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Account"
                >
                  <SquareUser className="size-5" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
              Account
            </TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    </TooltipProvider>
  );
}
