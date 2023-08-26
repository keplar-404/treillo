"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import {
  useElementStore,
  usePreviewElementStore,
  useProperty,
} from "@/lib/stateManage/globalState";
import Image from "next/image";
import { useState } from "react";

export default function ImageStyle({
  id,
  idforPreviewElement,
  coulmnParentid,
  taskParentId,
}: {
  id: number;
  idforPreviewElement: number;
  taskParentId: number;
  coulmnParentid: number;
}) {
  const delElement = useElementStore((state: any) => state.dec);
  const delPreviewElement = usePreviewElementStore((state: any) => state.dec);
  const [error, setError] = useState("");
  const image = useProperty((state) => state.addProperty);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    // console.log(typeof(file))
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png"];
      const maxSize = 4 * 1024 * 1024; // 4 MB

      if (allowedTypes.includes(file.type) && file.size <= maxSize) {
        const obj = {
          idforPreviewElement: idforPreviewElement,
          image: file,
          taskParentId: taskParentId,
          coulmnParentid: coulmnParentid,
        };
        image(obj);
        setError("");
      } else {
        setError(
          "Invalid file. Please select a valid image file (JPEG/PNG) under 4 MB."
        );
      }
    }
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
            <div className="">Image</div>
          </AccordionTrigger>
          <AccordionContent className="dark:bg-[#2B3035] bg-[#d9d8d8] rounded-t-none rounded-b-[12px] px-[16px] py-[10px]">
            <Input
              type="file"
              onChange={handleFileChange}
              accept="image/jpeg, image/png"
            />
            {error && <p className="error">{error}</p>}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
