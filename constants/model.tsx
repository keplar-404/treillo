import TextSvg from "../public/TextSvg";
import BulletList from "@/public/BulletList.svg";
import Checkbox from "@/public/Checkbox.svg";
import Code from "@/public/Code.svg";
import Devider from "@/public/Devider.svg";
import EmptySpace from "@/public/EmptySpace.svg";
import Img from "@/public/Img.svg";

type dataType = {
  id: number;
  name: string;
  svg: JSX.Element;
}[];

export const modelAddData: dataType = [
  {
    id: 1,
    name: "Text box",
    svg: <TextSvg />,
  },
  {
    id: 2,
    name: "Image",
    svg: <Img />,
  },
  {
    id: 3,
    name: "Bulleted list",
    svg: <BulletList />,
  },
  {
    id: 5,
    name: "Code",
    svg: <Code />,
  },
  {
    id: 6,
    name: "Devider",
    svg: <Devider />,
  },
  {
    id: 7,
    name: "Empty space",
    svg: <EmptySpace />,
  },
  {
    id: 8,
    name: "Checkbox",
    svg: <Checkbox />,
  },
];
