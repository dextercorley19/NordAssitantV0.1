import Image from "next/image";
import Footer from "../../ui/footer";
import blog from "../../assets/blog/blog.jpg";
import blog2 from "../../assets/blog/blog-1.jpg";
import blog3 from "../../assets/blog/blog-2.jpg";
import blog4 from "../../assets/blog/blog-3.jpg";
import Link from "next/link";

export default function Blog() {
  return (
    <main className="mt-40">
      <div className="sm:mx-w-xl mx-auto md:max-w-4xl lg:max-w-6xl mb-24">
        <div className="mb-4 w-96 text-4xl font-bold text-black">
          User adventures
        </div>
        <div className="w-96 text-base font-normal leading-6 text-zinc-500">
          Highlighting some of the best adventures our users journey on. Contact
          us to be featured.
        </div>
        <div className="grid auto-cols-max justify-center gap-8 pt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/">
            <div className="inline-flex h-96 w-96 flex-col items-start justify-start gap-6">
              <Image
                className="h-75 relative w-96 rounded-lg"
                alt="Blog photo 1"
                src={blog}
              />
              <div className="flex h-16 w-80 flex-col items-start justify-center gap-1">
                <div className="self-stretch pt-4 text-xl font-normal leading-9 text-black">
                  Nauti Otter 2020
                </div>
                <div className="self-stretch text-lg font-normal leading-tight text-zinc-500">
                  Voyage up to the San Juan Islands with the Nauti Otter crew.
                </div>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="inline-flex h-96 w-96 flex-col items-start justify-start gap-6">
              <Image
                className="h-75 relative w-96 rounded-lg"
                alt="Blog photo 1"
                src={blog2}
              />
              <div className="flex h-16 w-80 flex-col items-start justify-center gap-1">
                <div className="self-stretch pt-4 text-xl font-normal leading-9 text-black">
                  Hele Mai 2021
                </div>
                <div className="self-stretch text-lg font-normal leading-tight text-zinc-500">
                  Journey to Roche harbor with the Hele Mai crew on a Northwest Explorations Charter Defever 50.
                </div>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="inline-flex h-96 w-96 flex-col items-start justify-start gap-6">
              <Image
                className="h-75 relative w-96 rounded-lg"
                alt="Blog photo 1"
                src={blog3}
              />
              <div className="flex h-16 w-80 flex-col items-start justify-center gap-1">
                <div className="self-stretch pt-4 text-xl font-normal leading-9 text-black">
                  PenaltyBox III 2023
                </div>
                <div className="self-stretch text-lg font-normal leading-tight text-zinc-500">
                  Epic voyage to Desolation Sound with the PenaltyBox III crew.
                </div>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="inline-flex h-96 w-96 flex-col items-start justify-start gap-6">
              <Image
                className="h-75 relative w-96 rounded-lg"
                alt="Blog photo 1"
                src={blog4}
              />
              <div className="flex h-16 w-80 flex-col items-start justify-center gap-1">
                <div className="self-stretch pt-4 text-xl font-normal leading-9 text-black">
                  PenaltyBox III 2023
                </div>
                <div className="self-stretch text-lg font-normal leading-tight text-zinc-500">
                  Journey up to Garden bay with the PenaltyBox III crew.
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
