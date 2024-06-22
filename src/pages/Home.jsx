import React from "react";
import SecondSection from "./homePage/SecondSection";
import FirstSection from "./homePage/FirstSection";
import ThirdSection from "./homePage/ThirdSection";
import ForthSection from "./homePage/ForthSection";
import FifthSection from "./homePage/FifthSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-12">
        <FirstSection />
        <SecondSection />
        <FifthSection/>
        <ThirdSection/>
        <ForthSection/>
      </div>
    </>
  );
}
