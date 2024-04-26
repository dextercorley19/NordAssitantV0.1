import Link from "next/link";
import StickyFooter from "../ui/footer_sticky";

export default function Privacy() {
  return (
    <>
      <div className="m-auto mt-36 flex max-w-5xl flex-grow flex-col justify-center gap-3">
        <div className="mb-4 text-4xl font-bold text-black">Privacy</div>
        <Link href="/privacy/privacypolicy">Privacy Policy</Link>
        <Link href="/privacypolicy">Terms of Service</Link>
        <Link href="/privacypolicy">Cookie Policy</Link>
      </div>
      <StickyFooter />
    </>
  );
}
