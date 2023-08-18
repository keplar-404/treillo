"use client";
import { modelAddData } from "@/constants/model";
import { useElementStore } from "@/lib/stateManage/state";
import { Button } from "@/components/ui/button";

const AddModelData = ({
  name,
  svg,
  svg2,
  comp,
  eleFunction,
}: {
  name: string;
  svg: string;
  svg2?: string;
  comp: JSX.Element;
  eleFunction: any;
}): JSX.Element => {
  return (
    <Button
      onClick={() => eleFunction(comp)}
      className="w-full dark:bg-black bg-white dark:text-white text-black dark:hover:text-black hover:text-white"
    >
      <p className="">{name}</p>
    </Button>
  );
};
export default function AddElement() {
  const element = useElementStore((state: any) => state.inc);
  // console.log(get);

  return (
    <>
      <div className="h-[20rem] w-[16rem] overflow-y-scroll p-[0.8rem] flex flex-col gap-y-[.9rem] dark:bg-[#101214] bg-[#F2F2F2] rounded-[1rem]">
        <div className="w-full py-[6px] text-center dark:bg-black bg-white rounded-[12px]">
          <p className="text-xl">+</p>
        </div>
        {modelAddData.map((data) => (
          <AddModelData
            key={data.id}
            name={data.name}
            svg={data.svg}
            svg2={data.svg2}
            comp={data.component}
            eleFunction={element}
          />
        ))}
      </div>
    </>
  );
}
