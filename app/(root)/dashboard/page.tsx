import LeftSection from "@/components/dashboard/leftSection/LeftSection";
import RightSection from "@/components/dashboard/rightSection/RightSection";
import RightSectionCopy from "@/components/dashboard/rightSection/RightSectionCopy";
import Topbar from "@/components/dashboard/topbar/Topbar";
import React from "react";
import { Suspense } from "react";


// const lazyLoadRightSection = React.lazy(()=> import("@/components/dashboard/rightSection/RightSection"))

export default function page() {
  return (
    <>
      <main>
        <Topbar />
        <div className="w-full flex">
          {/* <aside className="w-[20%]">
            <LeftSection />
          </aside> */}
          <div className="w-full">

            <RightSection />
            {/* <RightSectionCopy /> */}
          </div>
        </div>
      </main>
    </>
  );
}
