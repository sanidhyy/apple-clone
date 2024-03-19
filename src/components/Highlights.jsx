import React from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import VideoCarousel from "./VideoCarousel";
import { rightImg, watchImg } from "../assets";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="common-padding bg-zinc h-full w-screen overflow-hidden"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="Watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="Right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
