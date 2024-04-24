"use client";
import { useEffect, useRef, useState } from "react";

export default function TitleScreen() {
  const [follow, setFollow] = useState(null);
  const outerRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const fourRef = useRef(null);
  const fiveRef = useRef(null);

  useEffect(() => {
    if (follow === null) {
    } else {
      const interval = setInterval(() => {
        follow.scrollIntoView({
          block: "center",
          inline: "center",
        });
      }, 10);

      return () => {
        clearInterval(interval);
      };
    }
  }, [follow]);

  useEffect(() => {
    var one = oneRef.current;
    var two = twoRef.current;
    var three = threeRef.current;
    var four = fourRef.current;
    var five = fiveRef.current;
    var outer = outerRef.current;

    outer.scrollIntoView();
    one.onanimationstart = () => {
      setFollow(one);
      one.scrollIntoView({ block: "start", inline: "center" });
    };

    two.onanimationstart = () => {
      setFollow(two);
      two.scrollIntoView({ block: "start", inline: "center" });
    };
    three.onanimationstart = () => {
      setFollow(three);
      three.scrollIntoView({ block: "start", inline: "center" });
    };
    four.onanimationstart = () => {
      setFollow(four);
      four.scrollIntoView({ block: "start", inline: "center" });
    };
    five.onanimationstart = () => {
      setFollow(null);
      outer.scrollIntoView({ block: "start", inline: "center" });
    };
  }, []);

  return (
    <>
      <div
        ref={outerRef}
        id="outer"
        className="flex h-full w-full bg-[#9046CF] justify-center items-center overflow-hidden"
      >
        <div
          ref={oneRef}
          id="one"
          className="flex z-10 h-14/8 w-7/8 bg-[#AE4FD2] rounded-circle justify-center items-center shadow-drop absolute animate-fall1"
        ></div>

        <div
          ref={twoRef}
          id="two"
          className="flex z-20 h-12/8 w-6/8 bg-[#CC59D2] rounded-circle justify-center items-center shadow-drop absolute animate-fall2"
        ></div>

        <div
          ref={threeRef}
          id="three"
          className="flex z-30 h-10/8 w-5/8 bg-[#F487B6] rounded-circle justify-center items-center shadow-drop absolute animate-fall3"
        ></div>

        <div
          ref={fourRef}
          id="four"
          className="flex z-40 h-8/8 w-4/8 bg-[#FDE12D] rounded-circle justify-center items-center shadow-drop absolute animate-fall4"
        ></div>

        <div
          ref={fiveRef}
          id="five"
          className="flex flex-col z-50 h-3/8 w-3/8 justify-center items-center animate-fall5"
        >
          <div className="flex flex-row">
            <h1 className="flex text-9xl text-center">C</h1>
            <h1 className="flex text-9xl text-center">A</h1>
            <h1 className="flex text-9xl text-center">N</h1>
            <h1 className="flex text-9xl text-center">&nbsp;</h1>
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
      </div>
    </>
  );
}
