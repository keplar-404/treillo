import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import EditModel from "./editModel/EditModel";

export default function Task() {
  return (
    <>
      <Accordion className="w-[30rem]" type="single" collapsible>
        <AccordionItem value="item-1">
          <div className="flex w-full justify-between items-center">
            <p>Task Title</p>
            <p className="py-[4px] text-[14px] rounded-[12px] px-[18px] bg-[#0BE081] text-white">
              Success
            </p>
            <p className="opacity-[70%]">3h 43min</p>
            <p className="opacity-[70%]">19 Dec, 23</p>
            <Checkbox />
            <AccordionTrigger></AccordionTrigger>
          </div>
          <AccordionContent>
            <div className="mt-[2rem]">
              <div className="w-full h-fit flex justify-end">
                <EditModel/>
              </div>
              <p>Contet is here</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
