import React from "react";
import Imdb from "../assets/imdbLogo.svg";
import Apple from "../assets/apple.svg";
import ChevronRight from "../assets/chevronRight.svg";

export default function MovieSection() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
        <div class="flex justify-between mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Featured Movie{" "}
          </h2>
          <div className="flex items-center cursor-pointer">
            <p class="text-base font-medium text-left text-red-700">See more</p>
            <div className="pl-2 ml-4">
              <img src={ChevronRight} alt="Apple" />
            </div>
          </div>
        </div>
        <div class=" space-y-8 lg:grid lg:grid-cols-4  xl:gap-24 sm:gap-6 lg:space-y-0">
          {[1, 2, 3, 5]?.map((el) => (
            <div
              key={el}
              class="w-full  flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white"
            >
              <div className="h-96 bg-no-repeat bg-cover bg-[url('https://image.tmdb.org/t/p/w342/7CNCv9uhqdwK7Fv4bR4nmDysnd9.jpg')]"></div>
              <div className="flex flex-col py-3">
                <p class="text-xs my-2 font-thin text-left">
                  USA, 2016 - Current
                </p>
                <p class="text-base  my-2 text-left">Stranger Things</p>
                <div className="flex justify-between my-2">
                  <div className="flex">
                    <div className="pr-2">
                      <img src={Imdb} alt="imdb logo" />
                    </div>
                    <p className="text-xs">86.0 / 100</p>
                  </div>
                  <div className="flex">
                    <div className="pl-2">
                      <img src={Apple} alt="Apple" />
                    </div>
                    <p className="text-sm pl-2">97%</p>
                  </div>
                </div>
                <p class="text-xs font-thin text-left">
                  Action, Adventure, Horror
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
