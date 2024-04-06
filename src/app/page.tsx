import GlobalNavBar from "./landingpage/globalnavbar";
import Descriptions from "./landingpage/descriptions";
import AccordionComponent from "./landingpage/accordion";
import Footer from "./landingpage/footer";
import Pricing from "./landingpage/pricing";
import Testimonials from "./landingpage/testimonials";
import Hero from "./landingpage/hero";
import { auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();


  return (
    <main>
      <GlobalNavBar />
      <Hero />
      <Descriptions />
      <Testimonials />
      <Pricing />
      <AccordionComponent />
      <Footer />
    </main>
  );
}
