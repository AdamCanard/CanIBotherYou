import StaticLogo from "./StaticLogo";
import Buttons from "./Buttons";

export default function MainScreen() {
  return (
    <>
      <div className="flex h-full w-full bg-[#9046CF] justify-center items-center relative overflow-hidden">
        <Buttons
          TopLeft="WHO?"
          BotLeft="WHAT?"
          TopRight="WHEN?"
          BotRight="WHY?"
        />
        <StaticLogo />
      </div>
    </>
  );
}
