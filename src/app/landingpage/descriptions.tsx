import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import helm from "../assets/helm.jpeg";
import mechanic from "../assets/mechanic.jpeg";
import inventory from "../assets/inventory_pic.jpeg";
import cruising from "../assets/cruising.jpeg";

export function Descriptions() {
  return (
    <div>
      <div className="mx-auto my-40 flex max-w-5xl justify-between">
        <div>
          <Image src={helm} alt="boat helm" width={516} height={330} />
        </div>
        <div className="inline-flex h-80 w-96  flex-col items-start justify-center gap-6">
          <div className="self-stretch font-['Inter'] text-4xl font-semibold leading-10 text-black">
            AI Chat that knows your vessel
          </div>
          <div className="self-stretch font-['Inter'] text-xl font-normal leading-9 text-zinc-500">
            Paired with our fine-tuned AI, onboarding will let Nord get to know
            your vessel. Adding more information is as easy as uploading a file.
          </div>
          <Button>
            <Link href="/">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="mx-auto my-40 flex max-w-5xl justify-between">
        <div className="inline-flex h-80 w-96  flex-col items-start justify-center gap-6">
          <div className="self-stretch font-['Inter'] text-4xl font-semibold leading-10 text-black">
            Maintenance Management System
          </div>
          <div className="self-stretch font-['Inter'] text-xl font-normal leading-9 text-zinc-500">
            Use Nord to organize and simplify your maintenance logs, routines,
            and schedules. Add your mechanic to have everything in one place.
          </div>
          <Button>
            <Link href="/">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </Button>
        </div>
        <div>
          <Image src={mechanic} alt="boat helm" width={516} height={330} />
        </div>
      </div>
      <div className="mx-auto my-40 flex max-w-5xl justify-between">
        <div>
          <Image src={inventory} alt="boat helm" width={516} height={330} />
        </div>
        <div className="inline-flex h-80 w-96  flex-col items-start justify-center gap-6">
          <div className="self-stretch font-['Inter'] text-4xl font-semibold leading-10 text-black">
            Inventory Management System{" "}
          </div>
          <div className="self-stretch font-['Inter'] text-xl font-normal leading-9 text-zinc-500">
            Intuitive inventory management system that allows you to keep track
            of all your parts and supplies.
          </div>
          <Button>
            <Link href="/">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="mx-auto my-40 flex max-w-5xl justify-between">
        <div className="inline-flex h-80 w-96  flex-col items-start justify-center gap-6">
          <div className="self-stretch font-['Inter'] text-4xl font-semibold leading-10 text-black">
            Crew Collaboration
          </div>
          <div className="self-stretch font-['Inter'] text-xl font-normal leading-9 text-zinc-500">
            Spend less time training crew and more time enjoying your
            adventures.
          </div>
          <Button>
            <Link href="/">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </Button>
        </div>
        <div>
          <Image src={cruising} alt="boat helm" width={516} height={330} />
        </div>
      </div>
    </div>
  );
}
