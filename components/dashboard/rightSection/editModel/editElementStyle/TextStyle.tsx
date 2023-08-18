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
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import Image from "next/image";
import {
  useElementStore,
  usePreviewElementStore,
} from "@/lib/stateManage/state";

export default function TextStyle({
  id,
  idforPreviewElement,
}: {
  id: number;
  idforPreviewElement: number;
}) {
  // console.log(id)
  const textBox = useRef<HTMLTextAreaElement>(null);
  const headingBox = useRef<HTMLInputElement>(null);
  const color = useRef<HTMLInputElement>(null);
  const position = useRef<HTMLDivElement>(null);

  const updateField = () => {
    // console.log('trigger');
    // console.log("textBox: " + textBox.current?.value);
    // console.log("headingBox: " + headingBox.current?.value);
    // console.log("color: " + color.current?.value);
  };

  const updateFieldForSelectHeading = (value: string) => {
    // geted value
  };
  const updateFieldForSelectPosition = (value: string) => {
    // geted value
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

              <Select
                onValueChange={(value) => updateFieldForSelectHeading(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="heading1">Heading 1</SelectItem>
                  <SelectItem value="heading2">Heading 2</SelectItem>
                  <SelectItem value="heading3">Heading 3</SelectItem>
                </SelectContent>
              </Select>

              <Textarea ref={textBox} onChange={updateField} />
              <Input type="text" ref={headingBox} onChange={updateField} />

              {/* Color picker */}
              <div className="flex items-center gap-x-3">
                <label htmlFor="colorPicker">Color</label>
                <input
                  type="color"
                  id="colorPicker"
                  name="colorPicker"
                  className="rounded-lg"
                  ref={color}
                  onChange={updateField}
                />
              </div>

              {/* position */}
              <Select
                onValueChange={(value) => updateFieldForSelectPosition(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Position" />
                </SelectTrigger>
                <SelectContent ref={position} onChange={updateField}>
                  <SelectItem value="heading1">Left</SelectItem>
                  <SelectItem value="heading2">Right</SelectItem>
                  <SelectItem value="heading3">Center</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
