import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Descriptions = () => {
  return (
    <div className="my-40 absolute right-6 inline-flex h-80 w-96 flex-col items-start justify-center gap-6">
        <Image></Image>
      <div className="self-stretch font-['Inter'] text-4xl font-semibold leading-10 text-black">
        AI Chat that knows your vessel
      </div>
      <div className="self-stretch font-['Inter'] text-2xl font-normal leading-9 text-zinc-500">
        Paired with our fine-tuned AI, onboarding will let Nord get to know your
        vessel. Adding more information is as easy as uploading a file.
      </div>
      <Button>
        <Link href="">Learn more</Link>
      </Button>
    </div>
  );
};

export default Descriptions;
