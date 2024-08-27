import React from "react";

export default function Hero() {
  return (
    <>
      <div className="h-screen flex flex-col justify-between fixed z-0  w-full bg-zinc-900 md:hidden">
        <div className="text-slate-50 text-base pt-16  px-7  ">
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
        <footer className="text-slate-50 flex flex-col gap-0">
        <div className="p-3 text-xs  gap-3 justify-center items-center flex">
            <h1>
              <svg
                class="h-5 w-5 text-gray-500 hover:text-sex-300"
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
                class="h-5 w-5 text-gray-500 hover:text-sex-300"
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
                class="h-5 w-5 text-gray-500 hover:text-sex-300"
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
                class="h-5 w-5 text-gray-500 hover:text-sex-300"
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
                class="h-5 w-5 text-gray-500 hover:text-sex-300"
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

      <div className="h-screen pt-[10vh] bg-zinc-800">Hero</div>
    </>
  );
}
