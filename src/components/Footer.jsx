import React from "react";

import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="p-5 sm:px-10">
      <div className="screen-max-width">
        <div className="">
          <p className="text-gray text-xs font-semibold">
            More ways to shop:{" "}
            <span className="text-blue underline">Find an Apple Store</span> or{" "}
            <span className="text-blue underline">other retailer</span> near
            you.
          </p>
          <p className="text-gray text-xs font-semibold">
            Or call (800) 555-0100
          </p>
        </div>

        <div className="my-5 h-px w-full bg-neutral-700" aria-hidden />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-gray text-xs font-semibold">
            &copy; {new Date().getFullYear()} Apple Clone Inc. All rights
            reserved.
          </p>

          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="text-gray text-xs font-semibold">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
