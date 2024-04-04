import Image from "next/image";
import logo from "../app/assets/logo.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GlobalNavBar from "./landingpage/globalnavbar";
import Descriptions from "./landingpage/descriptions";

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
                className="inline-block mb-8"
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
        <Descriptions />
      </div>
      
    </main>
  );
}
