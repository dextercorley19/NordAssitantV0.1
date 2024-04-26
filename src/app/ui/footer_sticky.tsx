import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function StickyFooter() {
  return (
    <div className="fixed inset-x-0 bottom-0 mx-auto mb-4 max-w-6xl bg-white px-8">
      <div className="mb-4 h-px w-2/5 border border-neutral-200"></div>
      <div className="flex items-start justify-between p-4">
        <div className="flex flex-col space-y-4">
          <div className="text-2xl font-medium text-black">Nord Assistant</div>
          <div className="flex items-center gap-2">
            <div className="rounded-full p-2">
              <Instagram color="#606060" />
            </div>
            <div className="rounded-full p-2">
              <Facebook color="#606060" />
            </div>
            <div className="rounded-full p-2">
              <Linkedin color="#606060" />
            </div>
            <div className="rounded-full p-2">
              <Youtube color="#606060" />
            </div>
          </div>
          <div className="text-sm text-zinc-700">
            Copyright © 2024 Nord Assistant All Rights Reserved
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="space-y-3">
            <div className="text-base font-medium text-black">About</div>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-zinc-700">
                Founding Team
              </Link>
              <Link href="/" className="text-sm text-zinc-700">
                Mission
              </Link>
              <Link href="/" className="text-sm text-zinc-700">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-base font-medium text-black">Docs</div>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-zinc-700">
                Setup
              </Link>
              <Link href="/" className="text-sm text-zinc-700">
                Invenhrefry
              </Link>
              <Link href="/" className="text-sm text-zinc-700">
                Maintenance
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-base font-medium leading-normal text-black">
              <Link href="/privacy">Privacy</Link>
            </div>
            <div className="font-regular text-sm leading-normal text-zinc-700">
              <Link href="/privacy/privacypolicy">Privacy Policy</Link>
            </div>
            <div className="font-regular text-sm leading-normal text-zinc-700">
              <Link href="/privacy/tos">Terms of Serice</Link>
            </div>
            <div className="font-regular text-sm leading-normal text-zinc-700">
              <Link href="/privacy/cookiepolicy">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
