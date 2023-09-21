"use client";

import {
  mangeColumnComponents,
  mangeTaskComponents,
  useElementStore,
  usePreviewElementStore,
  useProperty,
} from "@/lib/stateManage/globalState";
import { PropertyOfColumn, PropertyOfTask } from "@/lib/stateManage/type";
import {
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useMemo, useState } from "react";

// TODO: All column container mange function
let initailColumnId = 0;
let initailTaskId = 0;

export function parentFunForMangeOtherFun() {
  // all state from zustand
  const getTasks = mangeTaskComponents((state) => state.taskComponents);
  const getColumn = mangeColumnComponents((state) => state.columnComponents);
  const arrayColumnsMoveState = mangeColumnComponents(
    (state) => state.arrayMoveColumnComponent
  );

  const add_Task = mangeTaskComponents((state) => state.addTaskComponent);
  const delTaskColumnState = mangeColumnComponents(
    (state) => state.deleteColumnCompnent
  );
  const getUseElementStore = (coulmnParentid: number) =>
    useElementStore((state) => state.element)?.filter(
      (data) => data.coulmnParentid === coulmnParentid
    );
  const delFullTaskColumnStore = useElementStore(
    (state) => state.delFullTaskColumn
  );
  const getPreview = (coulmnParentid: number) =>
    usePreviewElementStore((state) => state.element).filter(
      (data) => data.coulmnParentid === coulmnParentid
    );
  const delFullTaskColumnPreview = usePreviewElementStore(
    (state) => state.delFullTaskColumn
  );
  const getProperty = (coulmnParentid: number) =>
    useProperty((state) => state.propertyForComponent).filter(
      (data) => data.coulmnParentid === coulmnParentid
    );
  const delProperty = useProperty((state) => state.deleteProperty);
  const idGenerate = () => (initailTaskId += 1);
  const arrayTasksMoveState = mangeTaskComponents(
    (state) => state.arrayMoveTaskComponent
  );

  //  all react state
  const [activeColumnID, setActiveColumnID] = useState<number | null>(null);
  const [activeTaskID, setActiveTaskID] = useState<number | null>(null);

  //  drag start and drag overlay and active column
  const onDragStartFun = (event: DragStartEvent) => {
    if (event.active.data.current?.type === "Column") {
      setActiveColumnID(event.active.data.current.columnID);
      return;
    } else if (event.active.data.current?.type === "Task") {
      setActiveTaskID(event.active.data.current.taskID);
    }
  };

  // use for how far away distance will active drag event dnd kit documentation based
  const sensor = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3, //3 px
      },
    })
  );

  // this is for after drag end movedColumn state array index number will change
  const dragEndFun = (event: DragEndEvent) => {
    setActiveTaskID(null);
    setActiveColumnID(null);
    const { active, over } = event;

    if (!over) return;

    if (active.id === over.id) return;

    // if (active.data.current?.type === "Task") {
    //   if (active.id !== over?.id) {
    //     if (
    //       active.data.current.coulmnParentid !==
    //       over?.data.current?.coulmnParentid
    //     ) {
    //       return;
    //     }
    //     const activeIndex = getTasks.findIndex((obj: PropertyOfTask) => {
    //       return obj.taskParentid == active.id;
    //     });
    //     const overIndex = getTasks.findIndex(
    //       (obj: PropertyOfTask) => obj.taskParentid == over?.id
    //     );
    //     const newArray = arrayMove(getTasks, activeIndex, overIndex);
    //     arrayTasksMoveState(newArray);
    //   }
    // }

    if (active.data.current?.type === "Column") {
      if (active.id !== over?.id) {
        const activeIndex = getColumn.findIndex(
          (obj: PropertyOfColumn) => obj.coulmnParentid == active.id
        );
        const overIndex = getColumn.findIndex(
          (obj: PropertyOfColumn) => obj.coulmnParentid == over?.id
        );

        const newArrayOfColumn = arrayMove(getColumn, activeIndex, overIndex);
        arrayColumnsMoveState(newArrayOfColumn);
      }
    }
  };

  const dragOver = (event: DragOverEvent) => {
    const { active, over } = event;

    if (!over) return;
    if (active.id === over.id) return;

    if (
      active.data.current?.type === "Task" &&
      over.data.current?.type === "Task"
    ) {
      // if (
      //   active.data.current.coulmnParentid !==
      //   over?.data.current?.coulmnParentid
      // ) {
      //   return;
      // }

      const activeIndex = getTasks.findIndex((obj: PropertyOfTask) => {
        return obj.taskParentid == active.id;
      });
      const overIndex = getTasks.findIndex(
        (obj: PropertyOfTask) => obj.taskParentid == over?.id
      );
      const newArray = arrayMove(getTasks, activeIndex, overIndex);
      arrayTasksMoveState(newArray);
    }
  };

  function mangeColumnFun() {
    //  managing column components
    const addColumnComponent = mangeColumnComponents(
      (state) => state.addColumnComponent
    );
    const addColumnFunction = () => {
      initailColumnId += 1;
      addColumnComponent({ coulmnParentid: initailColumnId });
    };

    const idArrayOfColumns = getColumn.map((data) => data.coulmnParentid);

    return {
      addColumnFunction,
      activeColumnID,
      idArrayOfColumns,
    };
  }

  function mangeTaskFun() {
    const addTaskFunction = (coulmnParentid: number) => {
      const id = idGenerate() * 50;

      add_Task({
        taskParentid: id,
        coulmnParentid: coulmnParentid,
      });
    };

    const deleteTaskColumn = (coulmnParentid: number) => {
      delTaskColumnState({ coulmnParentid: coulmnParentid });
      delFullTaskColumnStore(
        getUseElementStore(coulmnParentid)[0]?.coulmnParentid
      );
      delFullTaskColumnPreview(getPreview(coulmnParentid)[0]?.coulmnParentid);
      delProperty(getProperty(coulmnParentid)[0]?.coulmnParentid);
    };

    return { addTaskFunction, deleteTaskColumn, arrayTasksMoveState };
  }

  return {
    mangeColumnFun,
    mangeTaskFun,
    onDragStartFun,
    dragOver,
    sensor,
    dragEndFun,
    activeTaskID,
    getColumn,
    getTasks,
  };
}
