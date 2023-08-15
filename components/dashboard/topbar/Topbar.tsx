import DarkToggole from "./DarkToggole";

export default function Topbar() {
  return (
    <>
      <nav>
        <div className="w-full h-[3rem] flex-center">
          <DarkToggole />
        </div>
      </nav>
    </>
  );
}
