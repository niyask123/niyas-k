import React from "react";

export default function ForthSection() {
  return (
    <div className="flex justify-center">
      <div className="py-12 px-4  lg:px-12 w-5/6 bg-black">
        <div className="flex pb-12 justify-center text-2xl font-semibold">
          Personal
        </div>
        <div className="carousel rounded-box">
        <div className="carousel-item">
            <img
              src="/img/personal/4.jpeg"
              alt="Burger"
              className="object-contain h-[25rem]"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/personal/stayside - Copy.jpeg"
              alt="Burger"
              className="object-contain h-[25rem]"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img/personal/stay.jpeg"
              alt="Burger"
              className="object-contain h-[25rem]"
            />
          </div>
          <div className="carousel-item">
          <img
              src="/img/personal/5.jpeg"
              alt="Burger"
              className="object-contain h-[25rem]"
            />
          </div>
          <div className="carousel-item">
          <img
              src="/img/personal/3.jpeg"
              alt="Burger"
              className="object-contain h-[25rem]"
            />
          </div>
          <div className="carousel-item">
          <img
              src="/img/personal/niyasstay.jpeg"
              alt="Burger"
              className="object-contain h-[25rem]"
            />
          </div>
          <div className="carousel-item">
          <img
              src="/img/personal/2.jpeg"
              alt="Burger"
              className="object-contain h-[25rem]"
            />
          </div>
          <div className="carousel-item">
          <img
              src="/img/personal/n3.png"
              alt="Burger"
              className="object-contain h-[25rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
