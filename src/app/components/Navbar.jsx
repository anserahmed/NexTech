import "./navbar.css";

export default function Navbar() {
  function handleMenu() {
    console.log("fjfa");
  }

  return (
    <nav className="shadow-lg z-10 bg-zinc-900 fixed w-full border-b border-slate-700 text-slate-50">
      <section className="inner-container  min-w-full flex justify-between items-center px-4 py-1 lg:px-14 sm:px-6 sm:py-2 lg:py-4">
        {/* Brand */}
        <div
          className="flex gap-1 sm:gap-0 justify-center items-center "
          id="brand"
        >
          <div className="text-4xl font-semibold flex"></div>
          <div>
            <h1 className="z-10 text-slate-50 sm:text-3xl text-2xl font-bold  ">
              Nex<span className="text-sex-400">Tech</span>
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
          <button className="px-3 py-1 rounded-md hover:text-sex-500 hover:border-sex-500 transition ease-in  text-sex-700 border border-sex-700  bg-transparent">
            Login
          </button>
          <button className="px-3 py-1 rounded-md transition ease-in hover:bg-gradient-to-b hover:from-sex-700 hover:to-sex-900  bg-gradient-to-b from-sex-600 to-sex-800">
            Sign Up
          </button>
        </div>
        {/* Menu */}
        <button onClick={console.log("jiefie")} className="md:hidden">
          <label class="hamburger">
            <input type="checkbox" />
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
    </nav>
  );
}
