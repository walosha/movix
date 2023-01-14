import React from "react";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Youtube } from "../assets/youtube.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";

export default function Footer() {
  return (
    <footer class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-sm lg:py-8 lg:px-6">
        <div className="flex justify-evenly">
          <Facebook />
          <Instagram />
          <Youtube />
          <Twitter />
        </div>
      </div>
      <div className="mx-auto max-w-screen-sm flex justify-evenly">
        <p className="inline-block  px-3 py-1.5 text-md font-semibold leading-6  shadow-sm ">
          Conditions of Use
        </p>
        <p className="inline-block  px-3 py-1.5 text-md font-semibold leading-6  shadow-sm ">
          Privacy & Policy
        </p>
        <p className="inline-block  px-3 py-1.5 text-md font-semibold leading-6  shadow-sm ">
          Press Room
        </p>
      </div>
      <div className="flex justify-evenly">
        <p className="inline-block  px-3 py-1.5 text-md font-medium leading-6  shadow-sm ">
          © 2021 Movix{" "}
        </p>
      </div>
    </footer>
  );
}
