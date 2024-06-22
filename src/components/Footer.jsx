import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-center pt-6">
      <div className="navbar bg-base-200 w-5/6 ">
        <footer className="footer flex flex-col items-center bg-black p-4 text-neutral-content">
          <aside className="items-center flex flex-col lg:grid-flow-col">
            <img src="/img/icons/niyas1.png" className="rounded-full h-28" alt="" />
            <p>Copyright © 2024 - All right reserved</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a>
              <img src="/img/svg/whatsapp.svg"
              className="object-contain h-8"
              alt="" />
            </a>
            <a>
              <img src="/img/svg/insta.svg"
              className="object-contain h-8"
              alt="" />
            </a>
            <a>
              <img src="/img/svg/indeed.svg"
              className="object-contain h-8 bg-slate-400 rounded-full"
              alt="" />
            </a>
            <a>
              <img src="/img/svg/git.svg"
              className="object-contain h-8 bg-slate-400 rounded-full"
              alt="" />
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
