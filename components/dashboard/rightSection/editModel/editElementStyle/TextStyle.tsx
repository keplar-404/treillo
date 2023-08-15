import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default function TextStyle() {
  return (
   <>
   
   <Accordion  type="single" collapsible>
    
  <AccordionItem className=" border-none" value="item-1" >
    <AccordionTrigger>
        <div>
            sdjh
        </div>
    </AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

   </>
  )
}
