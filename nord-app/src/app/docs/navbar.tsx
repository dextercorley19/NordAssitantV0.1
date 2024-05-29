"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddDocDialog from "@/app/ui/dashboard/datacenter/notes/AddEditDocDialog";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import AIChatButton from "@/components/AIChatButton";

export default function NavBar() {
  const { theme } = useTheme();

  const [showAddEditDocDialog, setShowAddEditDocDialog] = useState(false);

  return (
    <>
      <div className="p-4 shadow">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Nord Assistant Logo"
              width={30}
              height={30}
            />
          </Link>
          <div className="flex items-center gap-2">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
              }}
            />
            <ThemeToggleButton />
            <Button onClick={() => setShowAddEditDocDialog(true)}>
              <Plus size={20} className="mr-2" />
              Add Document
            </Button>
            <AIChatButton />
          </div>
        </div>
      </div>
      <AddDocDialog
        open={showAddEditDocDialog}
        setOpen={setShowAddEditDocDialog}
      />
    </>
  );
}
