import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQ {
  q: string
  a: string
}

export default function ServiceFAQ({ faqs }: { faqs: FAQ[] }) {
  if (!faqs?.length) return null

  return (
    <section className="section">

      <div className="site-container max-w-3xl text-center">

        <h2 className="text-3xl font-serif font-semibold">
          Need More Details?
        </h2>

        <p className="text-muted-foreground mt-2">
          Browse through our most asked questions.
        </p>

        <div className="mt-10 text-left">
          <Accordion type="single" collapsible>

            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger>
                  {faq.q}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}

          </Accordion>
        </div>

      </div>

    </section>
  )
}