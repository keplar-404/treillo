"use client";
import { modelAddData } from "@/constants/model";

const AddModelData = ({
  name,
  svg,
}: {
  name: string;
  svg: JSX.Element;
}): JSX.Element => (
  <div className="w-full px-[16px] py-[10px] dark:bg-black bg-white rounded-[12px] flex items-center cursor-pointer">
    <div className="w-[18px] mr-6">{svg}</div>
    <p className="">{name}</p>
  </div>
);

export default function AddElement() {
  return (
    <>
      <div className="h-[20rem] w-[16rem] overflow-y-scroll p-[0.8rem] flex flex-col gap-y-[.9rem] dark:bg-[#101214] bg-[#F2F2F2] rounded-[1rem]">
        <div className="w-full py-[6px] text-center dark:bg-black bg-white rounded-[12px]">
          <p className="text-xl">+</p>
        </div>
        {modelAddData.map((data) => (
          <AddModelData key={data.id} name={data.name} svg={data.svg} />
        ))}
      </div>
    </>
  );
}
