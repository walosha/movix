import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";

export default function AuthForm({
  route,
  title,
  intro,
  inputOptions,
  btmText,
  routeText,
  handleSubmit,
  isLoading,
  control,
  btnText,
  errors,
}) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex flex-col items-center justify-center  mx-auto">
              <Logo />
            </div>
            <h1 className="text-xl  text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {title}
            </h1>
            <p className="text-sm  font-light text-gray-700 dark:text-gray-400">
              {intro}{" "}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {inputOptions?.map(({ type, name, placeholder }) => (
                <div key={name}>
                  <Controller
                    control={control}
                    name={name}
                    render={({ field }) => (
                      <input
                        type={type}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={placeholder}
                        {...field}
                      />
                    )}
                  />
                  {errors?.[name] && (
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                      <span class="font-medium"></span>{" "}
                      {errors?.[name]?.message}!
                    </p>
                  )}
                </div>
              ))}
              <button
                type="submit"
                // onClick={(e) => {
                //   e.preventDefault();
                // }}
                className="w-full text-white hover:bg-primary-700 focus:ring-4 bg-black focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {isLoading ? "please wait..." : btnText}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {btmText}
                <Link
                  to={route}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  {routeText}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
