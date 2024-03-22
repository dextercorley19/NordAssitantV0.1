"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddDocDialog from "@/components/AddDocDialog";

export default function NavBar() {
  const [showAddDocDialog, setShowAddDocDialog] = useState(false);

  return (
    <>
      <div className="p-4 shadow">
        <div className="flex flex-wrap gap-3 items-center justify-between">
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
                elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
              }}
            />
            <Button onClick={() => setShowAddDocDialog(true)}>
              <Plus size={20} className="mr-2" />
              Add Document
            </Button>
          </div>
        </div>
      </div>
      <AddDocDialog open={showAddDocDialog} setOpen={setShowAddDocDialog} />
    </>
  );
}
