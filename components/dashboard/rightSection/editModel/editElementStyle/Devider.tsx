import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  useElementStore,
  usePreviewElementStore,
  useProperty,
} from "@/lib/stateManage/globalState";
import Image from "next/image";
export default function Devider({
  id,
  idforPreviewElement,
  coulmnParentid,
  taskParentId
}: {
  id: number;
  idforPreviewElement: number;
  taskParentId: number;
  coulmnParentid: number;
}) {
  const delElement = useElementStore((state: any) => state.dec);
  const delPreviewElement = usePreviewElementStore((state: any) => state.dec);
  const useDevider = useProperty((state) => state.addProperty);

  const updateValue = (value: any) => {
    useDevider({
      idforPreviewElement: idforPreviewElement,
      slider: value[0],
      taskParentId: taskParentId,
      coulmnParentid: coulmnParentid
    });
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
            <div className="">Devider</div>
          </AccordionTrigger>
          <AccordionContent className="dark:bg-[#2B3035] bg-[#d9d8d8] rounded-t-none rounded-b-[12px] px-[16px] py-[10px]">
            <div className="flex flex-col gap-y-4">
              <div>
                <p>Weidth</p>
                <Slider
                  defaultValue={[20]}
                  min={0}
                  max={20}
                  step={1}
                  onValueChange={updateValue}
                />
                {/* <input type="range" min={0} defaultValue={60} max={60} step={1} onChange={updateValue} className="custom-slider"  /> */}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
