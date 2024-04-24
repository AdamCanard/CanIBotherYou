export default function ButtonRow() {
  return (
    <div className="flex w-full absolute top-1">
      <div className="flex z-10 absolute w-1/3 h-20 left-0 justify-around text-4xl decoration-[#FDE12D]">
        <button className="w-36 hover:underline hover:underline-offset-8 animate-button1 bg-[#FDE12D] rounded-3xl border-4 border-[#F487B6]">
          WHO?
        </button>
        <button className="w-36 hover:underline hover:underline-offset-8 animate-button2 bg-[#FDE12D] rounded-3xl border-4  border-[#F487B6]">
          WHAT?
        </button>
      </div>
      <div className="flex z-10 absolute w-1/3 h-20 right-0 justify-around text-4xl decoration-[#FDE12D]">
        <button className="w-36 hover:underline hover:underline-offset-8 animate-button3 bg-[#FDE12D] rounded-3xl border-4 border-[#F487B6]">
          HELP?
        </button>
        <button className="w-36 hover:underline hover:underline-offset-8 animate-button4 bg-[#FDE12D] rounded-3xl border-4 border-[#F487B6]">
          WHEN?
        </button>
      </div>
    </div>
  );
}
