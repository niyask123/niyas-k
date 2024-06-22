import React from "react";

export default function FirstSection() {
  return (
    <div className="flex justify-center">
      <div className="py-12 w-5/6 px-3 lg:px-12 bg-black">
        <div className="lg:gap-12 lg:grid flex flex-col items-center  grid-cols-12 justify-between">
          {/* <div className="col-span-4 text-center">
            <div className="flex flex-col">
              
            </div>
          </div> */}
          <div className=" relative  col-span-6 text-center  flex justify-center">
            <img
              src="/img/icons/bglap.png"
              className="object-fill  rounded-3xl  shadow-sm hover:shadow-[f83e6f]"
              alt=""
            />
            <div className="absolute bottom-20 lg:bottom-52 flex flex-col ">
            <div className="text-3xl font-bold text-gray-600">NIYAS K</div>
            <div className="text-lg text-gray-600">WEB DEVELOPER</div>
            </div>
          </div>
          <div className="col-span-6 text-center">
            <div className="flex flex-col">
              <div className="font-semibold text-lg">PROFILE</div>
              <div className="">
                To create user-friendly and efficient websites that are visually
                appealing and easy to navigate. I utilize my skills to develop
                websites that meet all the requirements of the client.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
