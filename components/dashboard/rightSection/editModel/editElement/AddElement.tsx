import { modelAddData } from "@/constants/model";
import Image from "next/image";
import Svg from "./Svg";

const AddModelData = ({ data }: { data: string }): JSX.Element => (
  <div className="w-full px-[16px] py-[10px] bg-black rounded-[12px] flex items-center gap-x-[16px] cursor-pointer">
    <Svg fill={"white"} />
    <p className="">{data}</p>
  </div>
);

export default function AddElement() {
  return (
    <>
      <div className="h-[20rem] w-[16rem] overflow-y-scroll p-[0.8rem] flex flex-col gap-y-[.9rem] bg-[#101214] rounded-[1rem]">
        {/* <div className="w-full py-[6px] text-center bg-black rounded-[12px]">
          <p className="">+</p>
        </div> */}
        {modelAddData.map((data) => (
          <AddModelData key={data} data={data} />
        ))}
      </div>
    </>
  );
}
