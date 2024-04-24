export default function StaticLogo() {
  return (
    <>
      <div className="flex h-14/8 w-7/8 bg-[#AE4FD2] rounded-circle justify-center items-center shadow-drop absolute"></div>
      <div className="flex h-12/8 w-6/8 bg-[#CC59D2] rounded-circle justify-center items-center shadow-drop absolute"></div>
      <div className="flex h-10/8 w-5/8 bg-[#F487B6] rounded-circle justify-center items-center shadow-drop absolute"></div>
      <div className="flex h-8/8 w-4/8 bg-[#FDE12D] rounded-circle justify-center items-center shadow-drop absolute"></div>
      <div className="flex flex-col z-10 h-3/8 w-3/8 justify-center items-center gap-3">
        <div className="flex flex-row">
          <h1 className="flex text-9xl text-center">C</h1>
          <h1 className="flex text-9xl text-center">A</h1>
          <h1 className="flex text-9xl text-center">N&nbsp;</h1>
          <h1 className="flex text-9xl text-center">I</h1>
        </div>
        <div className="flex flex-row">
          <h1 className="flex text-9xl text-center">B</h1>
          <h1 className="flex text-9xl text-center">O</h1>
          <h1 className="flex text-9xl text-center">T</h1>
          <h1 className="flex text-9xl text-center">H</h1>
          <h1 className="flex text-9xl text-center">E</h1>
          <h1 className="flex text-9xl text-center">R</h1>
        </div>
        <div className="flex flex-row">
          <h1 className="flex text-9xl text-center">Y</h1>
          <h1 className="flex text-9xl text-center">O</h1>
          <h1 className="flex text-9xl text-center">U</h1>
          <h1 className="flex text-9xl text-center">?</h1>
        </div>
      </div>
    </>
  );
}
