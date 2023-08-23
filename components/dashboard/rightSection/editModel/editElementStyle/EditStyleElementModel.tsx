"use client";
import { useElementStore } from "@/lib/stateManage/globalState";
import React from "react";

import CheckboxStyle from "./CheckboxStyle";
import CodeStyle from "./CodeStyle";
import Devider from "./Devider";
import EmptySpace from "./EmptySpace";
import ImageStyle from "./ImageStyle";
import TextStyle from "./TextStyle";

interface Prop {
  comp: React.ElementType;
  generatedId: number;
  generatedIdForPreviewElement: number;
}
export default function EditElementStyle() {
  const getElement = useElementStore((state: any) => state.element);
  return (
    <div className="h-[20rem] w-[22rem] overflow-y-scroll p-[0.8rem] flex flex-col gap-y-[.9rem] dark:bg-[#101214] bg-[#F2F2F2] rounded-[1rem]">
      {getElement.map((data: Prop, index: number) => {
        return (
          <div key={index + 1}>
            {React.createElement(data.comp, {
              id: data.generatedId,
              idforPreviewElement: data.generatedIdForPreviewElement,
            })}
          </div>
        );
      })}

      {/* <TextStyle />
<ImageStyle />
<CodeStyle />
<EmptySpace />
<Devider />
<CheckboxStyle /> */}
    </div>
  );
}
