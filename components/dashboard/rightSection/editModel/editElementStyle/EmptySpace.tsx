import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import {
  useElementStore,
  usePreviewElementStore,
  useProperty
} from "@/lib/stateManage/globalState";
import Image from "next/image";

export default function EmptySpace({
  id,
  idforPreviewElement,
}: {
  id: number;
  idforPreviewElement: number;
}) {
  const delElement = useElementStore((state: any) => state.dec);
  const delPreviewElement = usePreviewElementStore((state: any) => state.dec);
  const useHeight = useProperty(state=> state.addProperty)
  const heightValue = useProperty(state=>state.propertyForComponent)?.filter(data=> data.idforPreviewElement === id)?.[0]?.height?? 0;

  const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value)
    const value = Number(event.target.value)
    useHeight({
      idforPreviewElement:idforPreviewElement,
      height: value
    })
  }

  const deleteElement = (
    generatedId: number,
    generatedIdForPreviewElement: number
  ) => {
    delElement(generatedId);
    delPreviewElement(generatedIdForPreviewElement);
  };
  return (
    <div>
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
            <div className="">Empty space</div>
          </AccordionTrigger>
          <AccordionContent className="dark:bg-[#2B3035] bg-[#d9d8d8] rounded-t-none rounded-b-[12px] px-[16px] py-[10px]">
            <div className="">
              <p className="mt-4 mb-4">Please input number</p>
              <Input type="number" onChange={updateValue} value={heightValue} />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
