import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mx-auto px-8 mb-4 max-w-6xl">
      <div className="mb-4 h-px w-2/5 border border-neutral-200"></div>
      <div className="flex justify-between p-2">
        <div className="inline-flex h-40 flex-col gap-16">
          <div className="text-2xl font-medium leading-normal text-black">
            Nord Assistant
          </div>
          <div>
            {/* <div className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded">
                <Instagram color="#606060" />
              </div>
              <div className="flex items-center justify-center rounded">
                <Facebook color="#606060" />
              </div>
              <div className="flex items-center justify-center rounded">
                <Linkedin color="#606060" />
              </div>
              <div className="flex items-center justify-center rounded">
                <Youtube color="#606060" />
              </div>
            </div> */}
            <div>
              <div className="font-regular text-sm leading-normal text-zinc-700">
                Copyright © 2024 Nord Assistant All Rights Reserved
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start gap-8">
            <div className="flex flex-col  gap-3">
              <div className="text-base font-medium leading-normal text-black">
                About
              </div>
              {/* <div className="font-regular text-sm leading-normal text-zinc-700">
                <Link href="/">Founding Team</Link>
              </div> */}
              <div className="font-regular text-sm leading-normal text-zinc-700">
                <Link href="/about/mission">Mission</Link>
              </div>
              <div className="font-regular text-sm leading-normal text-zinc-700">
                <Link href="/about/contact">Contact Us</Link>
              </div>
            </div>
            {/* <div className="flex flex-col gap-3">
              <div className="text-base font-medium leading-normal text-black">
                {" "}
                Docs
              </div>
              <div className="font-regular text-sm leading-normal text-zinc-700">
                <Link href="/">Setup</Link>
              </div>
              <div className="font-regular text-sm leading-normal text-zinc-700">
                <Link href="/">Inventory</Link>
              </div>
              <div className="font-regular text-sm leading-normal text-zinc-700">
                <Link href="/">Maintenance</Link>
              </div>
            </div> */}
            <div className="flex flex-col gap-3">
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
    </div>
  );
}
