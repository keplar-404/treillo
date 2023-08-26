"use client";
import React from "react";
import TaskColoumn from "./TaskColoumn";
import { mangeColumnComponents } from "@/lib/stateManage/globalState";

let initailColumnId = 0;
export default function RightSection() {
  const getColumn = mangeColumnComponents((state) => state.columnComponents);
  const addColumnComponent = mangeColumnComponents(
    (state) => state.addColumnComponent
  );

  const addColumn = () => {
    initailColumnId += 1;
    addColumnComponent({ coulmnParentid: initailColumnId });
  };

  return (
    <section className="w-full h-screen  flex items-center bg-white dark:bg-[#121315]">
      <div className="overflow-x-scroll flex items-center h-[35rem]">
        <div className="flex flex-row gap-x-6 h-[30rem]">
          {getColumn.map((data) => (
            <TaskColoumn
              key={data.coulmnParentid}
              coulmnParentid={data.coulmnParentid}
            />
          ))}
          <button
            onClick={addColumn}
            className="dark:bg-[#191D20] bg-[#F3F3F3] hover:bg-[#E4E4E4] rounded-[12px] h-[3rem] w-[16rem] dark:hover:bg-[#24282C]"
          >
            Add column
          </button>
        </div>
      </div>
    </section>
  );
}
