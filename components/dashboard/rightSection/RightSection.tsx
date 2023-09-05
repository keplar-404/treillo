"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
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

export default function RightSection() {
  const getColumn = mangeColumnComponents((state) => state.columnComponents);
  console.log("re")

  // this is for managing column components
  const addColumnComponent = mangeColumnComponents(
    (state) => state.addColumnComponent
  );
  const addColumnFunction = () => {
    initailColumnId += 1;
    addColumnComponent({ coulmnParentid: initailColumnId });
  };

  // this is from drag overlay
  const [createPortalDom, setCreatePortalDom] = useState<HTMLElement | null>(
    null
  );

  // this is for column array state. Inside that array data index will change according to onDragStartFun
  const [movedColumn, setMovedColumn] = useState([...getColumn]);

  // this is for getting active column id
  const [activeColumnID, setActiveColumnID] = useState<number | null>(null);
  const [activeTaskID, setActiveTaskID] = useState<number | null>(null)

  useLayoutEffect(() => {
    setMovedColumn((columns: PropertyOfColumn[]) => {
      let columnsArray = [...columns];
      const isAnyColumnDelete = columnsArray.filter((data) =>
        getColumn.some(
          (column) => column.coulmnParentid === data.coulmnParentid
        )
      );

      if (
        getColumn.length > columns.length ||
        getColumn.length === columns.length
      ) {
        const unMachedObj = getColumn.filter((data) => {
          return !columnsArray.some(
            (columnsData) => columnsData.coulmnParentid === data.coulmnParentid
          );
        });
        columnsArray = columnsArray.concat(unMachedObj);
        return columnsArray;
      } else if (getColumn.length < columns.length) {
        return isAnyColumnDelete;
      }
    });
    setCreatePortalDom(document.body);
  }, [getColumn]);

  // this is use for how far away distance will active drag event
  const sensor = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3, //3 px
      },
    })
  );

  // this is for after drag end movedColumn state array index number will change
  const dragEndFun = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveColumnID(null)
    setActiveTaskID(null)

    if (active.data.current?.type === "Task") {
      // console.log(active.data.current);
      return;
    }
    // console.log("t");

    if (active.id !== over?.id) {
      setMovedColumn((columns: any) => {
        const activeIndex = columns.findIndex(
          (obj: PropertyOfColumn) => obj.coulmnParentid == active.id
        );
        const overIndex = columns.findIndex(
          (obj: PropertyOfColumn) => obj.coulmnParentid == over?.id
        );
        return arrayMove(columns, activeIndex, overIndex);
      });
    }
  };

  // this is drag start and drag overlay and active column
  const onDragStartFun = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "Column") {
      // console.log("t");
      setActiveColumnID(event.active.data.current.columnID);
      return;
    } else if (event.active.data.current?.type === "Task") {
      // console.log(event.active.data.current)
      setActiveTaskID(event.active.data.current.taskID)
      return;
    }
  };

  return (
    <DndContext
      onDragStart={onDragStartFun}
      collisionDetection={closestCenter}
      sensors={sensor}
      onDragEnd={dragEndFun}
    >
      <section className="w-full h-screen  flex items-center bg-white dark:bg-[#121315]">
        <div className="overflow-x-scroll flex items-center h-[35rem]">
          <div className="flex flex-row gap-x-6 h-[30rem]">
            <SortableContext
              items={movedColumn.map((data) => data.coulmnParentid)}
              strategy={horizontalListSortingStrategy}
            >
              {movedColumn.map((data) => (
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
                  {activeColumnID && <TaskColoumn coulmnParentid={activeColumnID} />}
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
