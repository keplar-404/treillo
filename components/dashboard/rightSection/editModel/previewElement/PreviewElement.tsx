"use client";
import React from "react";
import CheckBoxPreview from "./CheckBoxPreview";
import TextBoxPreview from "./TextBoxPreview";
import CodePreviewBox from "./CodePreviewBox";
import DeviderPreview from "./DeviderPreview";
import EmptyPreview from "./EmptyPreview";
import ImagePreview from "./ImagePreview";
import { usePreviewElementStore } from "@/lib/stateManage/globalState";

interface Prop {
  previecom: React.ElementType;
  generatedIdForPreviewElement: number;
  taskParentId: number;
  coulmnParentid:number
}

export default function PreviewElement({
  taskParentId,
  coulmnParentid
}: {
  taskParentId: number;
  coulmnParentid?:number
}) {
  const getElement = usePreviewElementStore((state: any) => state.element);
  return (
    <>
      <div className="w-[23rem] h-[20rem] overflow-y-scroll p-[1.6rem] flex flex-col gap-y-[.9rem] dark:bg-[#101214] bg-[#F2F2F2] rounded-[1rem]">
        {getElement.map((data: Prop, index: number) => {
          if( data.coulmnParentid !== coulmnParentid) return
          if (data.taskParentId != taskParentId) return;
          return (
            <div key={index + 1}>
              {React.createElement(data.previecom, {
                id: data.generatedIdForPreviewElement
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
