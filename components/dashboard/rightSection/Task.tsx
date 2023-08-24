"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import EditModel from "./editModel/EditModel";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";

export default function Task() {
  return (
    <>
      <Accordion
        className="mt-8 dark:bg-[#121315] bg-white p-[16px] rounded-[1rem] border-none"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <div>
            <div className="flex w-full justify-between items-center">
              <p className="font-semibold">Task Title</p>
              <AccordionTrigger></AccordionTrigger>
            </div>
            <div className="w-full flex justify-between font-semibold opacity-[45%] mt-1 mb-3">
              <p className="text-[12px] flex justify-center items-center gap-x-2">
                Date: Dec 3, 2023{" "}
                <div className="w-[6px] h-[6px] rounded-full dark:bg-white bg-black"></div>
              </p>
              <p className="text-[12px]">Assignee: shehab</p>
            </div>
          </div>
          <AccordionContent>
            <div className="mt-[2rem]">
              <div className="w-full h-fit flex justify-end">
                <EditModel />
              </div>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates molestias nostrum illum maiores, ea laudantium
                doloremque odio nesciunt dolore maxime suscipit minima itaque
                dicta fugit optio magni, perspiciatis dignissimos officiis cum,
                praesentium animi incidunt.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
