import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <div className="flex justify-center pb-6">
      <div className="navbar bg-base-200 lg:w-5/6 lg:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <NavLink activeClassName="active1" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active1" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active1" to="/contact">Contact</NavLink>
            </li>
            </ul>
          </div>
          <img
            src="/public/img/icons/niyas1.png"
            className="object-contain h-12 w-auto rounded-full shadow-sm"
            alt=""
          />
        </div>
        <div className="navbar-center py-4  hidden lg:flex">
          <ul className="menu text-base flex gap-4 menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
            <li>
              <NavLink activeClassName="active1" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active1" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active1" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn shadow-sm shadow-white hover:shadow-[#f83e6f]">
            <div className="flex items-center flex-row gap-3 ">
              <IoCallOutline className="text-lg" />
              <p> Call</p>
              <a className="" href="tel:+918075801527" >+91 807 5801 527</a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
