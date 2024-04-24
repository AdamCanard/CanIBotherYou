"use client";
import { useState } from "react";
import AnimatedScreen from "./components/AnimatedScreen";
import StaticScreen from "./components/StaticScreen";
import { TitleWrapper } from "./components/TitleWrapper";

export default function Home() {
  const [flag, setFlag] = useState(true);
  return (
    <>
      <TitleWrapper flag={flag}>
        {flag ? (
          <AnimatedScreen setFlag={setFlag} />
        ) : (
          <StaticScreen setFlag={setFlag} />
        )}
      </TitleWrapper>
    </>
  );
}
