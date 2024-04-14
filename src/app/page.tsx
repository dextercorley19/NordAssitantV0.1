import GlobalNavBar from "./ui/globalnavbar";
import { Descriptions } from "./ui/landingpage/descriptions";
import { AccordionComponent } from "./ui/landingpage/accordion";
import Footer from "./ui/footer";
import { Pricing } from "./ui/landingpage/pricing";
import { Testimonials } from "./ui/landingpage/testimonials";
import { Hero } from "./ui/landingpage/hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nord Assistant - Landing Page</title>
        <meta
          name="description"
          content="Meet Nord, you ai powered first mate."
        />
      </Head>
      <main>
        <GlobalNavBar />
        <Hero />
        <Descriptions />
        {/* <Testimonials /> */}
        <Pricing />
        <AccordionComponent />
        <Footer />
      </main>
    </>
  );
}
