import React from "react";

export default function FifthSection() {
  return (
    <div className="flex justify-center">
      <div className="py-12 px-4  lg:px-12 w-5/6 bg-black">
        <div className="flex pb-12 justify-center text-2xl font-semibold">
          Professional Experience
        </div>
        {/* <div className="mockup-window border bg-base-300"> */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-center px-4 py-16">
            <div className="mockup-phone lg:w-auto w-64 h-[30rem] lg:h-auto">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard gap-2 artboard-demo phone-1 lg:max-w-72 max-w-56">
                  <div className="text-2xl font-semibold">Web Designer</div>
                  <div className="text-xs">September 2024</div>
                  <a href="https://www.techbutomy.com/" className="text-lg text-blue-500">Tech-Butomy</a>
                  <div className="text-sm"> Trivandrum, India</div>
                </div>
              </div>
            </div>
            <div className="mockup-phone lg:w-auto w-64 h-[30rem] lg:h-auto">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard gap-2 artboard-demo phone-1 lg:max-w-72 max-w-56">
                  <div className="text-2xl font-semibold">Web Developer</div>
                  <div className="text-xs">September 2023 – February 2024</div>
                  <a href="https://www.eminentsoft.com/" className="text-lg text-blue-500">Eminentsoft</a>
                  <div className="text-sm"> Ernakulam (Infopark), India</div>
                </div>
              </div>
            </div>
            <div className="mockup-phone lg:w-auto w-64 h-[30rem] lg:h-auto">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard gap-2 artboard-demo phone-1 lg:max-w-72 max-w-56">
                  <div className="text-2xl font-semibold text-center">Web Developer <span className="text-sm">(internship)</span></div>
                  <div className="text-xs">February 2023 – August 2023</div>
                  <a href="https://www.trylogic.in/" className="text-lg text-blue-500 text-center">TryLogic Soft-Solution Pvt Ltd.</a>
                  <div className="text-sm">  Trivandrum, India</div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
