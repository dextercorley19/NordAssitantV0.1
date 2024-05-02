import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionComponent() {
  return (
    <div className="mx-auto px-8 my-32 max-w-5xl">
      <div>
        <h1 className="text-3xl font-semibold">FAQ&apos;s</h1>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I set up?</AccordionTrigger>
          <AccordionContent>First create an account with us and navigate to the dashboard. On the side nav bar, navigate to Data Center and start adding in text you would like Nord to reference. Talk with nord in the main dashboard. Other features coming soon.</AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I add multiple boats?</AccordionTrigger>
          <AccordionContent>Answer goes here.</AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Can my mechanic access Nord?</AccordionTrigger>
          <AccordionContent>Answer goes here.</AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What are some things Nord could help me with?
          </AccordionTrigger>
          <AccordionContent>Answer goes here.</AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What are the features planned for Nord?
          </AccordionTrigger>
          <AccordionContent>Answer goes here.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
