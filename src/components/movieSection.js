import React from "react";

export default function MovieSection() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
        <div class="max-w-screen-md text-left mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Featured Movie{" "}
          </h2>
        </div>
        <div class=" space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div class="w-full bg-[url('https://image.tmdb.org/t/p/w342/7CNCv9uhqdwK7Fv4bR4nmDysnd9.jpg')] flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"></div>
          <div class="w-full h-96 bg-[url('https://image.tmdb.org/t/p/w342/7CNCv9uhqdwK7Fv4bR4nmDysnd9.jpg')] flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="w-full">Starter</h3>
          </div>{" "}
          <div class="w-full h-96 bg-[url('https://image.tmdb.org/t/p/w342/7CNCv9uhqdwK7Fv4bR4nmDysnd9.jpg')] flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="w-full">Starter</h3>
          </div>{" "}
          <div class="w-full h-96 bg-[url('https://image.tmdb.org/t/p/w342/7CNCv9uhqdwK7Fv4bR4nmDysnd9.jpg')] flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="w-full">Starter</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
