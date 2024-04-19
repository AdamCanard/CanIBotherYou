import TitleScreen from "./components/TitleScreen";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3">
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-1 row-start-1"></div>
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-2 row-start-1"></div>
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-3 row-start-1"></div>
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-1 row-start-2"></div>
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-2 row-start-2">
          <TitleScreen />
        </div>
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-3 row-start-2"></div>
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-1 row-start-3"></div>
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-2 row-start-3"></div>
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-3 row-start-3"></div>
      </div>
    </>
  );
}
