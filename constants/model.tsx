import TextStyle from "@/components/dashboard/rightSection/editModel/editElementStyle/TextStyle";
import ImageStyle from "@/components/dashboard/rightSection/editModel/editElementStyle/ImageStyle";
import CheckboxStyle from "@/components/dashboard/rightSection/editModel/editElementStyle/CheckboxStyle";
import CodeStyle from "@/components/dashboard/rightSection/editModel/editElementStyle/CodeStyle";
import Devider from "@/components/dashboard/rightSection/editModel/editElementStyle/Devider";
import EmptySpace from "@/components/dashboard/rightSection/editModel/editElementStyle/EmptySpace";
import TextBoxPreview from "@/components/dashboard/rightSection/editModel/previewElement/TextBoxPreview";
import CheckBoxPreview from "@/components/dashboard/rightSection/editModel/previewElement/CheckBoxPreview";
import EmptyPreview from "@/components/dashboard/rightSection/editModel/previewElement/EmptyPreview";
import ImagePreview from "@/components/dashboard/rightSection/editModel/previewElement/ImagePreview";
import DeviderPreview from "@/components/dashboard/rightSection/editModel/previewElement/DeviderPreview";
import CodePreviewBox from "@/components/dashboard/rightSection/editModel/previewElement/CodePreviewBox";
import React from "react";

type dataType = {
  id: number;
  name: string;
  svg: string;
  svg2?: string;
  component: React.ElementType;
  previewcomponent: React.ElementType

}[];

export const modelAddData: dataType = [
  {
    id: 1,
    name: "Text box",
    svg: "T",
    svg2: "t",
    component: TextStyle,
    previewcomponent: TextBoxPreview
  },
  {
    id: 2,
    name: "Image",
    svg: "img",
    component: ImageStyle,
    previewcomponent: ImagePreview
  },
  {
    id: 5,
    name: "Code",
    svg: "</>",
    component: CodeStyle,
    previewcomponent: CodePreviewBox
  },
  {
    id: 6,
    name: "Devider",
    svg: "---",
    component: Devider,
    previewcomponent: DeviderPreview
  },
  {
    id: 7,
    name: "Empty space",
    svg: "=",
    component: EmptySpace,
    previewcomponent: EmptyPreview
  },
  {
    id: 8,
    name: "Checkbox",
    svg: "✓",
    component: CheckboxStyle,
    previewcomponent: CheckBoxPreview
  },
];
