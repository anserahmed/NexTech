"use client";
import { useRef } from "react";

import "./navbar.css";

export default function Navbar() {
  const navDialogeRef = useRef(null);

  function handleMenu() {
    const element = document.getElementById("navDialogue");
    element.classList.toggle("hidden");
    console.log("Mujhe dabaya gya hai");
  }

  return (
    <>
      <nav className="shadow-lg z-10   fixed w-full border-b border-slate-700 text-slate-50">
        <section className="inner-container bg-transparent/50 backdrop-blur-lg backdrop-brightness-150 min-w-full flex justify-between items-center px-4 py-2 lg:px-14 sm:px-6 sm:py-2 lg:py-4">
          {/* Brand */}
          <div
            className="flex gap-1 sm:gap-0 justify-center items-center "
            id="brand"
          >
            <div className="text-4xl font-semibold flex"></div>
            <div>
              <h1 className="z-10 text-slate-50 sm:text-3xl text-2xl font-bold  ">
                Nex<span className="text-sex-400">Techs</span>
              </h1>
            </div>
          </div>

          {/* Nav-List */}
          <div className="hidden md:flex font-semibold justify-center  items-center">
            <ul className="flex text-xs lg:text-base gap-3 lg:gap-6">
              <li>Features</li>
              <li>Resources</li>
              <li>Support</li>
              <li>Updates</li>
              <li>Enterprises</li>
              <li>Pricing</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className=" hidden text-xs lg:text-base md:flex font-semibold justify-center gap-2 items-center">
            <button className="hover:animate-bounce px-3 py-1 rounded-md hover:text-sex-500 hover:border-sex-500 transition ease-in  text-sex-700 border border-sex-700  bg-transparent">
              Login
            </button>
            <button className="px-3 hover:animate-bounce py-1 rounded-md transition ease-in hover:bg-gradient-to-b hover:from-sex-700 hover:to-sex-900  bg-gradient-to-b from-sex-600 to-sex-800">
              Sign Up
            </button>
          </div>

          {/* Menu */}
          <button className="md:hidden">
            <label class="hamburger">
              <input onClick={handleMenu} type="checkbox" />
              <svg viewBox="0 0 32 32">
                <path
                  class="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path class="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </button>
        </section>


        {/*SIDEBAR */}
        <div
          id="navDialogue"
          className="h-screen hidden fixed justify-between items-center z-0 bg-transparent/50 backdrop-blur-lg backdrop-brightness-150  flex-col bg  w-full  md:hidden"
        >
          <div className="text-slate-50 w-full text-base pt-10 px-7">
            <ul className="flex flex-col gap-6 justify-center items-start">
              <li>Features</li>
              <li>Resources</li>
              <li>Support</li>
              <li>Updates</li>
              <li>Enterprises</li>
              <li>Pricing</li>

              <div className="flex flex-col gap-3 w-full">
                <button className="px-4 py-1 rounded-md hover:text-sex-500 hover:border-sex-500 transition ease-in  text-sex-700 border border-sex-700  bg-transparent">
                  Login
                </button>
                <button className="px-3 py-1 rounded-md transition ease-in hover:bg-gradient-to-b hover:from-sex-700 hover:to-sex-900  bg-gradient-to-b from-sex-600 to-sex-800">
                  Sign Up
                </button>
              </div>
            </ul>
          </div>
          <footer className="text-slate-50 flex flex-col py-36 gap-1">
            <div className=" text-xs  gap-3 justify-center items-center flex">
              <h1>
                <svg
                  class="h-4 w-4 text-gray-500 hover:text-sex-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>{" "}
              </h1>
              <h1>
                <svg
                  class="h-4 w-4 text-gray-500 hover:text-sex-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>{" "}
              </h1>
              <h1>
                <svg
                  class="h-4 w-4 text-gray-500 hover:text-sex-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>{" "}
              </h1>
              <h1>
                <svg
                  class="h-4 w-4 text-gray-500 hover:text-sex-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>{" "}
              </h1>
            </div>
            <h1 className="flex justify-center items-center text-xs opacity-30 pb-2">
              All rights reserved. NexTech.com
            </h1>
          </footer>
        </div>
        
      </nav>
    </>
  );
}
