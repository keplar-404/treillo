import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

export default function EmptySpace() {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem className=" border-none" value="item-1">
          <AccordionTrigger className="hover:no-underline dark:bg-black bg-white rounded-[12px] px-[16px] py-[10px]">
            <div className="">Empty space</div>
          </AccordionTrigger>
          <AccordionContent className="dark:bg-[#2B3035] bg-[#d9d8d8] rounded-t-none rounded-b-[12px] px-[16px] py-[10px]">
            <div className="flex gap-x-4">
              <p>Weidth</p>
              <Input type="number" />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
