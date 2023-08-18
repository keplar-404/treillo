import TextStyle from "@/components/dashboard/rightSection/editModel/editElementStyle/TextStyle";
import ImageStyle from "@/components/dashboard/rightSection/editModel/editElementStyle/ImageStyle";
import CheckboxStyle from "@/components/dashboard/rightSection/editModel/editElementStyle/CheckboxStyle";
import CodeStyle from "@/components/dashboard/rightSection/editModel/editElementStyle/CodeStyle";
import Devider from "@/components/dashboard/rightSection/editModel/editElementStyle/Devider";
import EmptySpace from "@/components/dashboard/rightSection/editModel/editElementStyle/EmptySpace";

type dataType = {
  id: number;
  name: string;
  svg: string;
  svg2?: string;
  component: JSX.Element
}[];

export const modelAddData: dataType = [
  {
    id: 1,
    name: "Text box",
    svg: "T",
    svg2: "t",
    component: <TextStyle/>
  },
  {
    id: 2,
    name: "Image",
    svg: "img",
    component: <ImageStyle/>
  },
  {
    id: 5,
    name: "Code",
    svg: "</>",
    component: <CodeStyle/>
  },
  {
    id: 6,
    name: "Devider",
    svg: "---",
    component: <Devider/>
  },
  {
    id: 7,
    name: "Empty space",
    svg: "=",
    component: <EmptySpace/>
  },
  {
    id: 8,
    name: "Checkbox",
    svg: "✓",
    component: <CheckboxStyle/>
  },
];
