"use client";
import { useEffect, useRef, useState } from "react";

export default function AnimatedScreen({ setFlag }) {
  const [follow, setFollow] = useState(null);
  const outerRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const fourRef = useRef(null);
  const fiveRef = useRef(null);
  const lastRef = useRef(null);

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
    var last = lastRef.current;
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
    last.onanimationend = () => {
      setFlag(false);
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
          className="flex flex-col z-50 h-3/8 w-3/8 justify-center items-center"
        >
          <div className="flex flex-row">
            <h1 className="flex text-9xl text-center animate-zoom1">C</h1>
            <h1 className="flex text-9xl text-center animate-zoom3">A</h1>
            <h1 className="flex text-9xl text-center animate-zoom5">N&nbsp;</h1>
            <h1 className="flex text-9xl text-center animate-zoom7">I</h1>
          </div>
          <div className="flex flex-row">
            <h1 className="flex text-9xl text-center animate-zoom2">B</h1>
            <h1 className="flex text-9xl text-center animate-zoom4">O</h1>
            <h1 className="flex text-9xl text-center animate-zoom6">T</h1>
            <h1 className="flex text-9xl text-center animate-zoom1">H</h1>
            <h1 className="flex text-9xl text-center animate-zoom3">E</h1>
            <h1 className="flex text-9xl text-center animate-zoom5">R</h1>
          </div>
          <div className="flex flex-row">
            <h1 className="flex text-9xl text-center animate-zoom7">Y</h1>
            <h1 className="flex text-9xl text-center animate-zoom2">O</h1>
            <h1 className="flex text-9xl text-center animate-zoom4">U</h1>
            <h1
              ref={lastRef}
              className="flex text-9xl text-center animate-zoom6"
            >
              ?
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
