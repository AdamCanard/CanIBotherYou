import StaticLogo from "./StaticLogo";
import ButtonRow from "./ButtonRow";

export default function MainScreen() {
  return (
    <>
      <div className="flex h-full w-full bg-[#9046CF] justify-center items-center relative overflow-hidden">
        <ButtonRow />
        <StaticLogo />
      </div>
    </>
  );
}
