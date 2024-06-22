import React from "react";

export default function SecondSection() {
  return (
    <div className="flex justify-center">
      <div className="pt-12  w-5/6 px-12 bg-black">
        <div className="flex  justify-center text-2xl pb-6 lg:pb-0 font-semibold">
          Education
        </div>
        <div
    className="
      relative flex flex-col gap-6 lg:gap-0 w-full h-[16rem] lg:h-96 lg:flex lg:items-center lg:justify-between 
      lg:rounded-lg lg:px-6 lg:bg-cover lg:bg-center 
      bg-none"
    style={{ backgroundImage: "url('/public/img/siteimg/laphand.jpg')" }}
  >
          <div className="flex flex-col text-center">
            <div className="text-lg font-semibold lg:w-80">
              Computer Operator and Programming Assistant{" "}
              <span className="text-xs"> 2021</span>
            </div>
            <div className="text-sm">Gov. ITI Kasargod</div>
          </div>
          <div className="flex flex-col text-center">
            <div className="text-lg font-semibold lg:w-80">
            Diploma in Secretarial Practice 
              <span className="text-xs pl-1">2019              </span>
            </div>
            <div className="text-sm">State Board of Technical Education</div>
          </div>
        </div>
      </div>
    </div>
  );
}
