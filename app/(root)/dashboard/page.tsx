import LeftSection from "@/components/dashboard/leftSection/LeftSection";
import RightSection from "@/components/dashboard/rightSection/RightSection";
import Topbar from "@/components/dashboard/topbar/Topbar";

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
          </div>
        </div>
      </main>
    </>
  );
}
