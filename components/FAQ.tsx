import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does SparshTech provide?",
    answer:
      "We specialize in full-stack web development, mobile app development (iOS & Android), custom software solutions, and AI-powered chatbot integrations.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A standard business website might take 2-4 weeks, while a complex custom application could take 3-6 months. We provide detailed timelines during the discovery phase.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we offer comprehensive maintenance and support packages to ensure your digital product remains secure, up-to-date, and performs optimally.",
  },
  {
    question: "Can you help update an existing website?",
    answer:
      "Absolutely. We can audit your current website and recommend improvements, whether it's a visual redesign, performance optimization, or adding new features.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, industry-standard technologies including React, Next.js, Node.js, Python, Flutter, and cloud services like AWS and Google Cloud.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about working with us.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
