import Image from "next/image";
import logo from "../app/assets/logo.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GlobalNavBar from "./landingpage/globalnavbar";
import Descriptions1 from "./landingpage/descriptions";
import mechanic from "../app/assets/mechanic.jpeg";
import inventory from "../app/assets/inventory_pic.jpeg";
import cruising from "../app/assets/cruising.jpeg";
import person1 from "../app/assets/person1.svg";
import person2 from "../app/assets/person 2.svg";
import person3 from "../app/assets/person3.svg";

export default function Home() {
  return (
    <main>
      <GlobalNavBar />
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-8">
            <div className="text-center">
              <Image
                src={logo}
                alt="Nord Assistant Logo"
                width={100}
                height={100}
                className="mb-8 inline-block"
              />

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Leave your owners manual at home
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Meet your AI powered first mate,{" "}
                <b className="text-violet-700">
                  engineered to know your vessel
                </b>
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild>
                  <Link href="/docs">Get Started</Link>
                </Button>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#9c95c0] to-[#3c4b6f] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        <Descriptions1 />
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
              <Link href="">Learn more</Link>
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
              Intuitive inventory management system that allows you to keep
              track of all your parts and supplies.
            </div>
            <Button>
              <Link href="">Learn more</Link>
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
              <Link href="">Learn more</Link>
            </Button>
          </div>
          <div>
            <Image src={cruising} alt="boat helm" width={516} height={330} />
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl">
        <div className="inline-flex h-40 w-96  flex-col items-start justify-center gap-6">
          <div className="self-stretch font-['Inter'] text-4xl font-semibold leading-10 text-black">
            Testimonials
          </div>
          <div className="self-stretch font-['Inter'] text-xl font-normal leading-9 text-zinc-500">
            What some of our users think
          </div>
          <div className="inline-flex h-56 w-96 flex-col items-start justify-start gap-12 rounded-xl border border-neutral-100 bg-white p-8 shadow">
            <div className="self-stretch font-['Inter'] text-xl font-medium leading-loose text-black">
              “Simplified our charter business.”
            </div>
            <div className="inline-flex items-center justify-start gap-4">
              <Image
                className="h-11 w-11 rounded-full"
                src={person1}
                alt="person1"
              />
              <div className="inline-flex flex-col items-start justify-start gap-0.5">
                <div className="font-['Inter'] text-base font-medium leading-normal text-black">
                  Martha
                </div>
                <div className="font-['Inter'] text-base font-medium leading-normal text-zinc-500">
                  Charter Captain
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
