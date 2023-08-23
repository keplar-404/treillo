"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";
import Image from "next/image";
import {
  useElementStore,
  usePreviewElementStore,
  useProperty,
} from "@/lib/stateManage/globalState";

interface PropertyObj {
  idforPreviewElement: number;
  text_Property: string | undefined;
  color_Style: string;
  position: string;
}

export default function TextStyle({
  id,
  idforPreviewElement,
}: {
  id: number;
  idforPreviewElement: number;
}) {
  const text = useRef<HTMLTextAreaElement>(null);
  const color = useRef<HTMLInputElement>(null);
  const position = useRef<HTMLDivElement>(null);

  const updateProperty = useProperty((state: any) => state?.addProperty);
  const propertyForComponent = useProperty(
    (state: any) => state?.propertyForComponent
  );
  const matchedId = propertyForComponent.filter(
    (data: any) => data.idforPreviewElement === idforPreviewElement
  );
  const deleteProperty = useProperty((state: any) => state?.deleteProperty);

  //  update style for text state
  const updateField = (event: any) => {
    const propertyObj: PropertyObj = {
      idforPreviewElement: idforPreviewElement,
      text_Property: text.current?.value,
      color_Style: color.current!.value,
      position: event,
    };

    updateProperty(propertyObj);
  };

  // state of add elemend and delete element
  const delElement = useElementStore((state: any) => state.dec);
  const delPreviewElement = usePreviewElementStore((state: any) => state.dec);

  const deleteElement = (
    generatedId: number,
    generatedIdForPreviewElement: number
  ) => {
    delElement(generatedId);
    delPreviewElement(generatedIdForPreviewElement);
    deleteProperty(idforPreviewElement);
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
        <AccordionItem className="border-none" value="item-1">
          <AccordionTrigger className=" hover:no-underline dark:bg-black bg-white rounded-[12px] px-[16px] py-[10px]">
            <div className="w-full flex justify-between items-center">
              <p>Text</p>
            </div>
          </AccordionTrigger>

          <AccordionContent className="dark:bg-[#2B3035] bg-[#d9d8d8] rounded-t-none rounded-b-[12px] px-[16px] py-[10px]">
            {/* style property */}
            <div className="flex flex-col gap-y-8">
              {/* heading and text */}

              <Textarea
                ref={text}
                onChange={updateField}
                placeholder="write something..."
                value={matchedId[0]?.text_Property}
              />

              {/* Color picker */}
              <div className="flex items-center gap-x-3">
                <label htmlFor="colorPicker">Color</label>
                <input
                  type="color"
                  id="colorPicker"
                  name="colorPicker"
                  className="rounded-lg"
                  ref={color}
                  value={matchedId[0]?.color_Style}
                  onChange={updateField}
                />
              </div>

              {/* position */}
              <Select onValueChange={(value: string) => updateField(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Position" />
                </SelectTrigger>
                <SelectContent ref={position}>
                  <SelectItem value="left">Left</SelectItem>
                  <SelectItem value="right">Right</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
