"use client";
import React, { useState, useLayoutEffect, useEffect } from "react";
import TaskColoumn from "./TaskColoumn";
import { mangeColumnComponents } from "@/lib/stateManage/globalState";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import { PropertyOfColumn } from "@/lib/stateManage/type";
import Task from "./Task";


let initailColumnId = 0;

export default function RightSectionCopy() {
    const getColumn = mangeColumnComponents((state) => state.columnComponents);
    const addColumnComponent = mangeColumnComponents(
        (state) => state.addColumnComponent
      );
      const addColumnFunction = () => {
        initailColumnId += 1;
        addColumnComponent({ coulmnParentid: initailColumnId });
      };
     





  return (
    <section className="w-full h-screen  flex items-center bg-white dark:bg-[#121315]">
        <div className="overflow-x-scroll flex items-center h-[35rem]">
          <div className="flex flex-row gap-x-6 h-[30rem]">
            <SortableContext
              items={getColumn.map((data) => data.coulmnParentid)}
              strategy={horizontalListSortingStrategy}
            >
              {getColumn.map((data) => (
                <TaskColoumn
                  key={data.coulmnParentid}
                  coulmnParentid={data.coulmnParentid}
                />
              ))}
            </SortableContext>



            <button
              onClick={addColumnFunction}
              className="dark:bg-[#191D20] bg-[#F3F3F3] hover:bg-[#E4E4E4] rounded-[12px] h-[3rem] w-[16rem] dark:hover:bg-[#24282C]"
            >
              Add column
            </button>
          </div>
        </div>
      </section>
  )
}
