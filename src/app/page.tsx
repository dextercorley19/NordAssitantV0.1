import GlobalNavBar from "./landingpage/globalnavbar";
import { Descriptions } from "./landingpage/descriptions";
import { AccordionComponent } from "./landingpage/accordion";
import Footer from "./landingpage/footer";
import { Pricing } from "./landingpage/pricing";
import { Testimonials } from "./landingpage/testimonials";
import { Hero } from "./landingpage/hero";
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
        <Testimonials />
        <Pricing />
        <AccordionComponent />
        <Footer />
      </main>
    </>
  );
}
