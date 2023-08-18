"use client";
import { modelAddData } from "@/constants/model";
import {
  useElementStore,
  usePreviewElementStore,
} from "@/lib/stateManage/state";
import { Button } from "@/components/ui/button";
import React from "react";

let initailIdForAddElement = 0;
let initailIdForPreviewElement = 0;
const randomIdForAddElement = () => (initailIdForAddElement += 1);
const randomIdForPreviewElement = () => (initailIdForPreviewElement += 1);

const AddModelData = ({
  idForAddElement,
  idForPreviewElement,
  name,
  svg,
  svg2,
  comp,
  previecom,
  eleFunction,
  elePreviewFunction,
}: {
  idForAddElement: Function;
  idForPreviewElement: Function;
  name: string;
  svg: string;
  svg2?: string;
  comp: React.ElementType;
  previecom: React.ElementType;
  eleFunction: any;
  elePreviewFunction: any;
}): JSX.Element => {
  return (
    <Button
      onClick={() => {
        const generatedId = idForAddElement();
        const generatedIdForPreviewElement = idForPreviewElement();
        eleFunction({ comp, generatedId, generatedIdForPreviewElement });
        elePreviewFunction({ previecom, generatedIdForPreviewElement });
      }}
      className="w-full dark:bg-black bg-white dark:text-white text-black dark:hover:text-black hover:text-white"
    >
      <p className="">{name}</p>
    </Button>
  );
};
export default function AddElement() {
  const element = useElementStore((state: any) => state.inc);
  const elementPreview = usePreviewElementStore((state: any) => state.inc);
  // const getElement = useElementStore((state: any) => state.element);
  // console.log(getElement);

  return (
    <>
      <div className="h-[20rem] w-[16rem] overflow-y-scroll p-[0.8rem] flex flex-col gap-y-[.9rem] dark:bg-[#101214] bg-[#F2F2F2] rounded-[1rem]">
        <div className="w-full py-[6px] text-center dark:bg-black bg-white rounded-[12px]">
          <p className="text-xl">+</p>
        </div>
        {modelAddData.map((data) => (
          <AddModelData
            key={data.id}
            idForAddElement={randomIdForAddElement}
            idForPreviewElement={randomIdForPreviewElement}
            name={data.name}
            svg={data.svg}
            svg2={data.svg2}
            comp={data.component}
            previecom={data.previewcomponent}
            eleFunction={element}
            elePreviewFunction={elementPreview}
          />
        ))}
      </div>
    </>
  );
}
