import React from "react";

export default function About() {
  return (
    <div className="flex justify-center">
      <div className="p-12 px-3 w-5/6 lg:px-12 bg-black">
        <div className="grid justify-center grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-4xl lg:text-5xl">
              <span style={{ "--value": 15 }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-4xl lg:text-5xl">
              <span style={{ "--value": 10 }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-4xl lg:text-5xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-4xl lg:text-5xl">
              <span style={{ "--value": 54 }}></span>
            </span>
            sec
          </div>
        </div>
        <div className="flex flex-col justify-center py-12">
          <img
            src="/img/icons/dev.gif"
            className="object-contain h-36"
            alt=""
          />
          {/* <img src="/img/icons/commingsoon.gif" className="object-contain h-36" alt="" /> */}
        </div>
      </div>
    </div>
  );
}
