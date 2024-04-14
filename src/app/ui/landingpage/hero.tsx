import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.svg";
import topo from "../../assets/topographic.svg";

export function Hero() {
  return (
    <div className="relative bg-fixed">
      <div className="absolute inset-0 z-0">
        <Image
          src={topo}
          alt="Topography"
          layout="fill"
          objectFit="cover"
          className="opacity-45"
        />
      </div>
      <div className="relative isolate z-10 px-6 pt-28 lg:px-8 pb-28">
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
              <b className="text-violet-700">engineered to know your vessel</b>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* Ensure Button and Link components are correctly imported or defined */}
              <Button asChild>
                <Link href="/docs">Get Started</Link>
              </Button>
              <Link
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white "></div>
    </div>
  );
}
