import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Devider() {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem className=" border-none" value="item-1">
          <AccordionTrigger className="hover:no-underline dark:bg-black bg-white rounded-[12px] px-[16px] py-[10px]">
            <div className="">Devider</div>
          </AccordionTrigger>
          <AccordionContent className="dark:bg-[#2B3035] bg-[#d9d8d8] rounded-t-none rounded-b-[12px] px-[16px] py-[10px]">
            <div className="flex flex-col gap-y-4">
              <div>
                <p>Weidth</p>
                <Slider defaultValue={[30]} max={60} step={1} />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
