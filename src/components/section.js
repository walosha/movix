import React from "react";
import ChevronRight from "../assets/chevronRight.svg";

export default function MovieSection({ header, children }) {
  return (
    <section className="mb-20 bg-white dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-screen-2xl lg:px-6">
        <div className="flex justify-between px-14">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {header}{" "}
          </h2>
          <div className="flex items-center cursor-pointer">
            <p className="text-base font-medium text-left text-red-700">
              See more
            </p>
            <div className="pl-2 ml-4">
              <img src={ChevronRight} alt="Apple" />
            </div>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
