"use client";
import React, { useState } from "react";
import TaskColoumn from "./TaskColoumn";

export default function RightSection() {
  const [columns, setColumns] = useState<React.ReactNode[]>([]);

  const addColumn = () => {
    const newColumnKey = columns.length;
    const newColumns = [...columns, <TaskColoumn key={newColumnKey} />];
    setColumns(newColumns);
  };

  return (
    <section className="w-full h-screen  flex items-center bg-white dark:bg-[#121315]">
      <div className="overflow-x-scroll flex items-center h-[35rem]">
      <div className="flex flex-row gap-x-6 h-[30rem]">
        {/* <TaskColoumn /> */}
        {columns}

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
