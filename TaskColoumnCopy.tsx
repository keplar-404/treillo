"use client";
import Task from "./Task";
import {
  mangeTaskComponents,
  mangeColumnComponents,
  useElementStore,
  usePreviewElementStore,
  useProperty,
} from "@/lib/stateManage/globalState";
import { PropertyOfTask } from "@/lib/stateManage/type";
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
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

let id = 0;

export default function TaskColoumn({
  coulmnParentid,
}: {
  coulmnParentid: number;
}) {


  // this is for drag event
  const {
    attributes,
    listeners,
    transform,
    transition,
    setNodeRef,
    isDragging,
  } = useSortable({
    id: coulmnParentid,
    data: {
      type: "Column",
      columnID: coulmnParentid,
    },
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // this all function for manage different component and state function
  const add_Task = mangeTaskComponents((state) => state.addTaskComponent);
  const getTask = mangeTaskComponents((state) => state.taskComponents)?.filter(
    (data) => data.coulmnParentid === coulmnParentid
  );
  const delTaskColumnState = mangeColumnComponents(
    (state) => state.deleteColumnCompnent
  );

  const getUseElementStores = useElementStore((state) => state.element);
  const getUseElementStore = getUseElementStores.filter(
    (data) => data.coulmnParentid === coulmnParentid
  );
  const delFullTaskColumnStore = useElementStore(
    (state) => state.delFullTaskColumn
  );

  const getPreviews = usePreviewElementStore((state) => state.element);
  const getPreview = getPreviews.filter(
    (data) => data.coulmnParentid === coulmnParentid
  );
  const delFullTaskColumnPreview = usePreviewElementStore(
    (state) => state.delFullTaskColumn
  );

  const getPropertys = useProperty((state) => state.propertyForComponent);
  const getProperty = getPropertys.filter(
    (data) => data.coulmnParentid === coulmnParentid
  );
  const delProperty = useProperty((state) => state.deleteProperty);

  const idGenerate = () => (id += 1);

  const addTaskFunction = () => {
    const id = idGenerate();
    add_Task({
      taskParentid: id,
      coulmnParentid: coulmnParentid,
    });
  };

  const deleteTaskColumn = () => {
    delTaskColumnState({ coulmnParentid: coulmnParentid });
    delFullTaskColumnStore(getUseElementStore[0]?.coulmnParentid);
    delFullTaskColumnPreview(getPreview[0]?.coulmnParentid);
    delProperty(getProperty[0]?.coulmnParentid);
  };



  
 // this is from drag overlay
 const [createPortalDom, setCreatePortalDom] = useState<HTMLElement | null>(
  null
);
  // this is for column array state. Inside that array data index will change according to onDragStartFun
  const [movedTask, setMovedTask] = useState([...getTask]);
   // this is for getting active column id
   const [activeTaskID, setActiveTaskID] = useState<number>(0);
   useEffect(() => {
    setMovedTask(getTask);
    setCreatePortalDom(document.body);
  }, [getTask]);


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

  if (active.id !== over?.id) {
    setMovedTask((columns: any) => {
      const activeIndex = columns.findIndex(
        (obj: PropertyOfTask) => obj.taskParentid == active.id
      );
      const overIndex = columns.findIndex(
        (obj: PropertyOfTask) => obj.taskParentid == over?.id
      );
      return arrayMove(columns, activeIndex, overIndex);
    });
  }
};



  // this is drag start and drag overlay and active column
  const onDragStartFun = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "Task") {
      setActiveTaskID(event.active.data.current.taskId);
      return;
    }
  };


  // this is for drag overlay
  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="w-[17rem] h-[30rem] rounded-[20px] border-[2px] border-rose-400"
      ></div>
    );
  }

  // this is main return
  return (
    <DndContext
    onDragStart={onDragStartFun}
    collisionDetection={closestCenter}
    onDragEnd={dragEndFun}
    sensors={sensor}
    >

    <div
      ref={setNodeRef}
      style={style}
      {...attributes} // this is for which html tag will drag based on listerners
      {...listeners} // this listeners use for drag event. the html tag who have this attritubte will gain tha ability to move and drag the {...attributes} tag.
      className="w-[17rem] h-[30rem] overflow-y-scroll dark:bg-[#191D20] bg-[#F3F3F3] rounded-[20px] py-[28px] px-[13px]"
      >
      <div className="w-full flex justify-between">
        <div className="flex flex-row justify-center items-center gap-x-2">
          <div className="rounded-full h-[10px] w-[10px] bg-[#2986FF]"></div>
          <p className="font-semibold tracking-[-0.00769rem] text-[18px]">
            To-do
          </p>
          <p className="bg-[#5E5F61] rounded-full ml-2 px-[7px] py-[2px] text-[10px] text-white">
            {getTask.length}
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-3">
          <div className="cursor-pointer" onClick={addTaskFunction}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 18 18"
              fill="none"
              className="dark:block hidden"
              >
              <path
                d="M13.611 7.88008H9.31282V3.58185C9.31282 3.39186 9.23734 3.20964 9.103 3.0753C8.96865 2.94095 8.78644 2.86548 8.59645 2.86548C8.40645 2.86548 8.22424 2.94095 8.0899 3.0753C7.95555 3.20964 7.88008 3.39186 7.88008 3.58185V7.88008H3.58185C3.39186 7.88008 3.20964 7.95555 3.0753 8.0899C2.94095 8.22424 2.86548 8.40645 2.86548 8.59645C2.86548 8.78644 2.94095 8.96865 3.0753 9.103C3.20964 9.23734 3.39186 9.31282 3.58185 9.31282H7.88008V13.611C7.88008 13.801 7.95555 13.9833 8.0899 14.1176C8.22424 14.2519 8.40645 14.3274 8.59645 14.3274C8.78644 14.3274 8.96865 14.2519 9.103 14.1176C9.23734 13.9833 9.31282 13.801 9.31282 13.611V9.31282H13.611C13.801 9.31282 13.9833 9.23734 14.1176 9.103C14.2519 8.96865 14.3274 8.78644 14.3274 8.59645C14.3274 8.40645 14.2519 8.22424 14.1176 8.0899C13.9833 7.95555 13.801 7.88008 13.611 7.88008Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 18 18"
              fill="none"
              className="dark:hidden block"
              >
              <path
                d="M13.611 7.88008H9.31282V3.58185C9.31282 3.39186 9.23734 3.20964 9.103 3.0753C8.96865 2.94095 8.78644 2.86548 8.59645 2.86548C8.40645 2.86548 8.22424 2.94095 8.0899 3.0753C7.95555 3.20964 7.88008 3.39186 7.88008 3.58185V7.88008H3.58185C3.39186 7.88008 3.20964 7.95555 3.0753 8.0899C2.94095 8.22424 2.86548 8.40645 2.86548 8.59645C2.86548 8.78644 2.94095 8.96865 3.0753 9.103C3.20964 9.23734 3.39186 9.31282 3.58185 9.31282H7.88008V13.611C7.88008 13.801 7.95555 13.9833 8.0899 14.1176C8.22424 14.2519 8.40645 14.3274 8.59645 14.3274C8.78644 14.3274 8.96865 14.2519 9.103 14.1176C9.23734 13.9833 9.31282 13.801 9.31282 13.611V9.31282H13.611C13.801 9.31282 13.9833 9.23734 14.1176 9.103C14.2519 8.96865 14.3274 8.78644 14.3274 8.59645C14.3274 8.40645 14.2519 8.22424 14.1176 8.0899C13.9833 7.95555 13.801 7.88008 13.611 7.88008Z"
                fill="black"
                />
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="18"
            viewBox="0 0 5 15"
            fill="none"
            className="cursor-pointer"
            onClick={deleteTaskColumn}
            >
            <path
              d="M2.13973 5.23046C3.32253 5.23046 4.27947 6.1874 4.27947 7.3702C4.27947 8.553 3.32253 9.50993 2.13973 9.50993C0.956937 9.50993 0 8.553 0 7.3702C0 6.1874 0.956937 5.23046 2.13973 5.23046ZM0 2.13973C0 3.32253 0.956937 4.27947 2.13973 4.27947C3.32253 4.27947 4.27947 3.32253 4.27947 2.13973C4.27947 0.956937 3.32253 0 2.13973 0C0.956937 0 0 0.956937 0 2.13973ZM0 12.6007C0 13.7835 0.956937 14.7404 2.13973 14.7404C3.32253 14.7404 4.27947 13.7835 4.27947 12.6007C4.27947 11.4179 3.32253 10.4609 2.13973 10.4609C0.956937 10.4609 0 11.4179 0 12.6007Z"
              fill="gray"
              />
          </svg>
        </div>
      </div>

      <div className="w-full mb-9 rounded-s-2xl rounded-e-2xl mt-5 dark:bg-white bg-[#3B3F40] opacity-[40%]  h-[1px]"></div>

<SortableContext
items={movedTask.map(data=> data.taskParentid)}
strategy={verticalListSortingStrategy}
>
      {movedTask.map((data) => (
        <Task
        key={data.taskParentid}
        taskParentId={data.taskParentid}
        coulmnParentid={data.coulmnParentid}
        />
        ))}
        </SortableContext>

  {/* this is from drag overlay */}
  {createPortalDom && createPortal(<DragOverlay>
              {<Task
                  taskParentId={activeTaskID}
                />}
            </DragOverlay>, document.body)}


    </div>
          </DndContext>
  );
}
