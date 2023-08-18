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

export default function TextStyle() {
  const textBoxType = useRef(null);
  const textBox = useRef<HTMLTextAreaElement>(null);
  const headingBox = useRef<HTMLInputElement>(null);
  const color = useRef<HTMLInputElement>(null);
  const position = useRef<HTMLDivElement>(null);

  const updateField = () => {
    console.log("textBoxType: " + textBoxType.current?.value);
    // console.log('trigger');
    // console.log("textBox: " + textBox.current?.value);
    // console.log("headingBox: " + headingBox.current?.value);
    // console.log("color: " + color.current?.value);
    // console.log("position: " + position.current?.value);
  };

  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem className=" border-none" value="item-1">
          <AccordionTrigger className="hover:no-underline dark:bg-black bg-white rounded-[12px] px-[16px] py-[10px]">
            <div className="">Text</div>
          </AccordionTrigger>
          <AccordionContent className="dark:bg-[#2B3035] bg-[#d9d8d8] rounded-t-none rounded-b-[12px] px-[16px] py-[10px]">
            {/* style property */}
            <div className="flex flex-col gap-y-8">
              {/* heading and text */}
              <Select onValueChange={updateField} >
                <SelectTrigger className="w-[180px]" >
                  <SelectValue ref={textBoxType} placeholder="Select" />
                </SelectTrigger>
                <SelectContent >
                  <SelectItem value="heading1">Heading 1</SelectItem>
                  <SelectItem value="heading2">Heading 2</SelectItem>
                  <SelectItem value="heading3">Heading 3</SelectItem>
                </SelectContent>
              </Select>

              {/* <select ref={textBoxType} onChange={updateField}>
                <option value="" disabled selected>
                  Select an option
                </option>
                <option value="option1"><h1>Option</h1></option>
                <option value="option2"><h1>Option</h1></option>
                <option value="option3"><h1>Option</h1></option>
              </select> */}

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
              <Select>
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
