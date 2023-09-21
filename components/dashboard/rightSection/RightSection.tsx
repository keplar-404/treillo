"use client";
import React, { useState, useLayoutEffect } from "react";
import TaskColoumn from "./TaskColoumn";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import Task from "./Task";
import { parentFunForMangeOtherFun } from "./taskColumnMangeFun";

export default function RightSection() {
  const {
    dragEndFun,
    onDragStartFun,
    dragOver,
    sensor,
    getColumn,
    mangeColumnFun,
    activeTaskID,
  } = parentFunForMangeOtherFun();
  const { activeColumnID, addColumnFunction, idArrayOfColumns } =
    mangeColumnFun();

  // this is from drag overlay
  const [createPortalDom, setCreatePortalDom] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    setCreatePortalDom(document.body);
  }, []);

  return (
    <DndContext
      onDragStart={onDragStartFun}
      sensors={sensor}
      onDragEnd={dragEndFun}
      onDragOver={dragOver}
    >
      <section className="w-full h-screen  flex items-center bg-white dark:bg-[#121315]">
        <div className="overflow-x-scroll flex items-center h-[35rem]">
          <div className="flex flex-row gap-x-6 h-[30rem]">
            <SortableContext
              items={idArrayOfColumns}
              strategy={horizontalListSortingStrategy}
            >
              {getColumn.map((data) => (
                <TaskColoumn
                  key={data.coulmnParentid}
                  coulmnParentid={data.coulmnParentid}
                />
              ))}
            </SortableContext>

            {/* this is from drag overlay */}
            {createPortalDom &&
              createPortal(
                <DragOverlay>
                  {activeColumnID && (
                    <TaskColoumn coulmnParentid={activeColumnID} />
                  )}
                  {activeTaskID && <Task taskParentId={activeTaskID} />}
                </DragOverlay>,
                document.body
              )}

            <button
              onClick={addColumnFunction}
              className="dark:bg-[#191D20] bg-[#F3F3F3] hover:bg-[#E4E4E4] rounded-[12px] h-[3rem] w-[16rem] dark:hover:bg-[#24282C]"
            >
              Add column
            </button>
          </div>
        </div>
      </section>
    </DndContext>
  );
}
