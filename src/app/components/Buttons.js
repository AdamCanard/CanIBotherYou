export default function Buttons({ TopLeft, BotLeft, TopRight, BotRight }) {
  return (
    <div className="flex w-full h-full absolute">
      <div className="flex z-10 absolute w-36 h-20 top-1 left-1 text-4xl decoration-[#FDE12D] animate-EmptyTopLeft hover:animate-FillTopLeft">
        <button className="w-full h hover:underline hover:underline-offset-8 animate-buttonTopLeft bg-[#FDE12D] rounded-3xl border-4 border-[#F487B6]">
          {TopLeft}
        </button>
      </div>
      <div className="flex z-10 absolute w-36 h-20 bottom-1 left-1 text-4xl decoration-[#FDE12D] animate-EmptyBotLeft hover:animate-FillBotLeft">
        <button className="w-full hover:underline hover:underline-offset-8 animate-buttonBotLeft bg-[#FDE12D] rounded-3xl border-4  border-[#F487B6]">
          {BotLeft}
        </button>
      </div>
      <div className="flex z-10 absolute w-36 h-20 top-1 right-1 justify-end text-4xl decoration-[#FDE12D] animate-EmptyTopRight hover:animate-FillTopRight">
        <button className="w-full hover:underline hover:underline-offset-8 animate-buttonTopRight bg-[#FDE12D] rounded-3xl border-4 border-[#F487B6]">
          {TopRight}
        </button>
      </div>
      <div className="flex z-10 absolute w-36 h-20 bottom-1 right-1 justify-end text-4xl decoration-[#FDE12D] animate-EmptyBotRight hover:animate-FillBotRight">
        <button className="w-full hover:underline hover:underline-offset-8 animate-buttonBotRight bg-[#FDE12D] rounded-3xl border-4 border-[#F487B6]">
          {BotLeft}
        </button>
      </div>
    </div>
  );
}
