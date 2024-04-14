import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import Link from "next/link";

export function Pricing() {
  return (
    <div className="mt-40 flex items-center bg-gradient-to-r from-indigo-300 to-purple-400">
      <div className="mx-auto my-12 flex max-w-5xl flex-wrap items-center justify-center gap-6 sm:justify-center">
        <div className="mx-4 inline-flex w-80 flex-col items-start justify-end gap-8 rounded-xl border-2 border-black bg-white p-8 shadow-lg">
          <div className="flex flex-col items-start justify-end gap-3">
            <div className="text-lg font-medium leading-normal text-black opacity-80">
              Captain
            </div>
            <div className="inline-flex items-end justify-start gap-2">
              <div className="text-4xl font-semibold leading-snug text-black">
                $30
              </div>
              <div className="text-base font-medium leading-8 text-black">
                per month
              </div>
            </div>
          </div>
          <ul className="list-none pl-0">
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              One Vessel
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Unlimited Chats
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Inventory Management
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Maintenance Tracker
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              $500 setup fee
            </li>
          </ul>
          <div className="inline-flex items-center justify-center gap-2 self-stretch">
            <Button>
              <Link href="/">Enroll for free</Link>
            </Button>
          </div>
        </div>
        <div className="mx-4 inline-flex w-80 flex-col items-start justify-end gap-8 rounded-xl border-2 border-black bg-white p-8 shadow-lg">
          <div className="flex flex-col items-start justify-end gap-3">
            <div className=" text-lg font-medium leading-normal text-black opacity-80">
              Fleet Captain
            </div>
            <div className="inline-flex items-end justify-start gap-2">
              <div className=" text-4xl font-semibold leading-snug text-black">
                $50
              </div>
              <div className=" text-base font-medium leading-8 text-black">
                per month
              </div>
            </div>
          </div>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Multiple Vessels
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Unlimited Chats
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Inventory Management
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Maintenance Tracker
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              $1000 setup fee
            </li>
          </ul>
          <div className="inline-flex items-center justify-center gap-2 self-stretch">
            <Button>
              <Link href="/">Enroll for free</Link>
            </Button>
          </div>
        </div>
        <div className="inline-flex w-80 flex-col items-start justify-end gap-8 rounded-xl bg-white p-8 shadow-lg">
          <div className="flex flex-col items-start justify-end gap-3">
            <div className=" text-lg font-medium leading-normal text-black opacity-80">
              Charter Captain
            </div>
            <div className="inline-flex items-end justify-start gap-2">
              <div className=" text-4xl font-semibold leading-snug text-black">
                $100
              </div>
              <div className=" text-base font-medium leading-8 text-black">
                per month
              </div>
            </div>
          </div>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Multiple Vessels
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Booking Management
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Inventory Management
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Maintenance Tracker
            </li>

            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              $1000 setup fee
            </li>
          </ul>
          <div className="inline-flex items-center justify-center gap-2 self-stretch">
            <Button>
              <Link href="/">Enroll for free</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="mt-40 flex items-center bg-gradient-to-r from-indigo-300 to-purple-400">
      <div className="mx-auto my-12 max-w-5xl flex-wrap items-center justify-evenly gap-6">
        <div className="inline-flex w-80 flex-col items-start justify-end gap-8 rounded-xl bg-white p-8 shadow-lg">
          <div className="flex flex-col items-start justify-end gap-3">
            <div className=" text-lg font-medium leading-normal text-black opacity-80">
              Captain
            </div>
            <div className="inline-flex items-end justify-start gap-2">
              <div className=" text-4xl font-semibold leading-snug text-black">
                $30
              </div>
              <div className=" text-base font-medium leading-8 text-black">
                per month
              </div>
            </div>
          </div>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              One Vessel
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Unlimited Chats
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Inventory Management
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Maintenance Tracker
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              $500 setup fee
            </li>
          </ul>
          <div className="inline-flex items-center justify-center gap-2 self-stretch">
            <Button>
              <Link href="/">Enroll for free</Link>
            </Button>
          </div>
        </div>
        <div className="mx-4 inline-flex w-80 flex-col items-start justify-end gap-8 rounded-xl border-2 border-black bg-white p-8 shadow-lg">
          <div className="flex flex-col items-start justify-end gap-3">
            <div className=" text-lg font-medium leading-normal text-black opacity-80">
              Fleet Captain
            </div>
            <div className="inline-flex items-end justify-start gap-2">
              <div className=" text-4xl font-semibold leading-snug text-black">
                $50
              </div>
              <div className=" text-base font-medium leading-8 text-black">
                per month
              </div>
            </div>
          </div>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Multiple Vessels
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Unlimited Chats
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Inventory Management
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Maintenance Tracker
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              $1000 setup fee
            </li>
          </ul>
          <div className="inline-flex items-center justify-center gap-2 self-stretch">
            <Button>
              <Link href="/">Enroll for free</Link>
            </Button>
          </div>
        </div>
        <div className="inline-flex w-80 flex-col items-start justify-end gap-8 rounded-xl bg-white p-8 shadow-lg">
          <div className="flex flex-col items-start justify-end gap-3">
            <div className=" text-lg font-medium leading-normal text-black opacity-80">
              Charter Captain
            </div>
            <div className="inline-flex items-end justify-start gap-2">
              <div className=" text-4xl font-semibold leading-snug text-black">
                $100
              </div>
              <div className=" text-base font-medium leading-8 text-black">
                per month
              </div>
            </div>
          </div>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Multiple Vessels
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Booking Management
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Inventory Management
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              Maintenance Tracker
            </li>

            <li style={{ display: "flex", alignItems: "center" }}>
              <Dot color="#606060" size={32} style={{ marginRight: "8px" }} />
              $1000 setup fee
            </li>
          </ul>
          <div className="inline-flex items-center justify-center gap-2 self-stretch">
            <Button>
              <Link href="/">Enroll for free</Link>
            </Button>
          </div>
        </div>
      </div>
    </div> */
}
