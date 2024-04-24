export const TitleWrapper = ({ flag, children }) => (
  <>
    {flag ? (
      <div className="grid grid-cols-3 grid-rows-3">
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-1 row-start-1"></div>
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-2 row-start-1"></div>
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-3 row-start-1"></div>
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-1 row-start-2"></div>
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-2 row-start-2">
          {children}
        </div>
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-3 row-start-2"></div>
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-1 row-start-3"></div>
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-2 row-start-3"></div>
        <div className="flex bg-[#9046CF] w-screen h-screen col-start-3 row-start-3"></div>
      </div>
    ) : (
      <div className="flex bg-[#9046CF] w-screen h-screen col-start-2 row-start-2">
        {children}
      </div>
    )}
  </>
);
