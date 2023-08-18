import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
export default function CodeStyle() {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem className=" border-none" value="item-1">
          <AccordionTrigger className="hover:no-underline dark:bg-black bg-white rounded-[12px] px-[16px] py-[10px]">
            <div className="">Code</div>
          </AccordionTrigger>
          <AccordionContent className="dark:bg-[#2B3035] bg-[#d9d8d8] rounded-t-none rounded-b-[12px] px-[16px] py-[10px]">
            <Textarea />
            {/* <p>Sample code snippet</p>
            <pre>
              <code>{`function test (): void { 
                console.log("test")
               }`}</code>
            </pre> */}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
