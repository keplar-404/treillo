import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import {
  useElementStore,
  usePreviewElementStore,
  useProperty,
} from "@/lib/stateManage/globalState";
import Image from "next/image";
import { useRef } from "react";
export default function CodeStyle({
  id,
  idforPreviewElement,
}: {
  id: number;
  idforPreviewElement: number;
}) {
  const delElement = useElementStore((state: any) => state.dec);
  const delPreviewElement = usePreviewElementStore((state: any) => state.dec);
  const useUpdatetext = useProperty((state: any) => state?.addProperty);
  const components = useProperty((state) => state.propertyForComponent);
  const textValue = components.filter(data => data.idforPreviewElement === id)[0]?.text_Property;


  const text = useRef<HTMLTextAreaElement>(null);

  const updateText = () => {
    // console.log(text.current?.value)
    useUpdatetext({
      idforPreviewElement: idforPreviewElement,
      text_Property: text.current?.value,
    });
  };

  const deleteElement = (
    generatedId: number,
    generatedIdForPreviewElement: number
  ) => {
    delElement(generatedId);
    delPreviewElement(generatedIdForPreviewElement);
  };
  return (
    <>
      <Accordion type="single" collapsible className="relative">
        <div
          className="z-[100] absolute flex ml-[17rem] mt-[.8rem] w-[19px] h-fit cursor-pointer"
          onClick={() => deleteElement(id, idforPreviewElement)}
        >
          <Image
            src={"./Delete.svg"}
            alt="icon"
            height={16}
            width={16}
            className="dark:hidden block"
          />
          <Image
            src={"./deleteWhite.svg"}
            alt="icon"
            height={14}
            width={14}
            className="dark:block hidden"
          />
        </div>
        <AccordionItem className=" border-none" value="item-1">
          <AccordionTrigger className="hover:no-underline dark:bg-black bg-white rounded-[12px] px-[16px] py-[10px]">
            <div className="">Code</div>
          </AccordionTrigger>
          <AccordionContent className="dark:bg-[#2B3035] bg-[#d9d8d8] rounded-t-none rounded-b-[12px] px-[16px] py-[10px]">
            <Textarea onChange={updateText} ref={text} value={textValue}  />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
