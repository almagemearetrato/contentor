import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What is CONTENTOR?",
    answer: "CONTENTOR is an AI-powered SEO SaaS platform that offers a suite of tools for content research, keyword analysis, content creation, and SEO optimization."
  },
  {
    question: "How can CONTENTOR help improve my SEO?",
    answer: "CONTENTOR provides advanced tools for keyword research, content clustering, and AI-assisted content creation. These features help you create SEO-optimized content that ranks higher in search results."
  },
  {
    question: "Is CONTENTOR suitable for beginners?",
    answer: "Yes, CONTENTOR is designed to be user-friendly for both beginners and experienced SEO professionals. Our intuitive interface and helpful guides make it easy to get started with SEO optimization."
  },
  {
    question: "Can I translate my content to other languages?",
    answer: "Absolutely! CONTENTOR offers an AI-powered article translator that can help you translate your content into multiple languages, allowing you to reach a global audience."
  },
  {
    question: "How does the content cluster feature work?",
    answer: "The content cluster feature helps you organize your content strategy by grouping related topics and keywords. This improves your site's topical authority and helps search engines understand the structure of your content."
  }
]

export function FAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}