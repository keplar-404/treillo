"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import EditModel from "./editModel/EditModel";
import Image from "next/image";
import { mangeTaskComponents, useElementStore, usePreviewElementStore, useProperty } from "@/lib/stateManage/globalState";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Task({ taskParentId, coulmnParentid }: { taskParentId: number, coulmnParentid?:number }) {
  const deleteTaskState = mangeTaskComponents(state=> state.deleteTaskCompnent)
  
  const getUseElementStores = useElementStore(state=> state.element)
  const getUseElementStore = getUseElementStores.filter(data=> data.taskParentId === taskParentId)
  const delFullTaskStore = useElementStore(state=> state.delFullTask)
  
  const getPreviews = usePreviewElementStore(state=> state.element)
  const getPreview = getPreviews.filter(data=> data.taskParentId === taskParentId)
  const delFullTaskPreview = usePreviewElementStore(state=> state.delFullTask)
  
  const getPropertys = useProperty(state=> state.propertyForComponent)
  const getProperty = getPropertys.filter(data=> data.taskParentId === taskParentId)
  const delFullTaskProperty = useProperty(state=> state.deleteProperty)
  
  
  
  const deleteTaskComponent = ()=> {
    deleteTaskState({ taskParentid: taskParentId })
    delFullTaskStore(getUseElementStore[0]?.taskParentId)
    delFullTaskPreview(getPreview[0]?.taskParentId)
    delFullTaskProperty(getProperty[0]?.taskParentId)
  } 





  return (
    <>
      <Accordion
      
        className="mt-3 dark:bg-[#121315] bg-white p-[16px] rounded-[1rem] border-none"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <div>
            <div className="flex w-full justify-between items-center">
              <p className="font-semibold">Task Title</p>
              <div className="flex flex-row gap-x-3 justify-center items-center">
                <Image
                  src={"./Delete.svg"}
                  alt="icon"
                  height={16}
                  width={16}
                  className="dark:hidden block cursor-pointer"
                  onClick={deleteTaskComponent}
                />
                <Image
                  src={"./deleteWhite.svg"}
                  alt="icon"
                  height={14}
                  width={14}
                  className="dark:block hidden cursor-pointer"
                  onClick={deleteTaskComponent}
                />
                <AccordionTrigger></AccordionTrigger>
              </div>
            </div>
            <div className="w-full flex justify-between items-center opacity-[45%] mt-1 mb-3">
                <p className="text-[11px] ">Date: Dec 3, 2023</p>
                <div className="w-[6px] h-[6px] rounded-full dark:bg-white bg-black"></div>
              <p className="text-[11px]">Assignee: shehab</p>
            </div>
          </div>
          <AccordionContent>
            <div className="mt-[2rem]">
              <div className="w-full h-fit flex justify-end">
                <EditModel taskParentId={taskParentId} coulmnParentid={coulmnParentid} />
              </div>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates molestias nostrum illum maiores, ea laudantium
                doloremque odio nesciunt dolore maxime suscipit minima itaque
                dicta fugit optio magni, perspiciatis dignissimos officiis cum,
                praesentium animi incidunt.
              </p>

            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
