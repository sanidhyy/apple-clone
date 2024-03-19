import React from "react";

import { appleImg, bagImg, githubImg, searchImg } from "../assets";
import { navLists, sourceCode } from "../constants";

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between p-5 sm:px-10">
      <nav className="screen-max-width flex w-full">
        <a href="#">
          <img src={appleImg} alt="Apple" width={14} height={18} />
        </a>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="text-gray cursor-pointer px-5 text-sm transition-all hover:text-white"
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <a href="#">
            <img src={searchImg} alt="Search" width={18} height={18} />
          </a>
          <a href="#">
            <img src={bagImg} alt="Bag" width={18} height={18} />
          </a>
          <a href={sourceCode} target="_blank" rel="noreferrer noopener">
            <img src={githubImg} alt="Bag" width={18} height={18} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
