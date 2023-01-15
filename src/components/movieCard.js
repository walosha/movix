import React from "react";
import Imdb from "../assets/imdbLogo.svg";
import Apple from "../assets/apple.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";

export default function MovieCard({ cast }) {
  return (
    <div className=" flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white">
      <div className="border h-96  w-60 bg-no-repeat  bg-cover bg-[url('https://image.tmdb.org/t/p/w342/7CNCv9uhqdwK7Fv4bR4nmDysnd9.jpg')]">
        <div className="pl-2 text-end m-4">
          <div
            style={{ background: "#f3f4f680" }}
            className="backdrop-blur-sm h-7 py-2 px-1.5 rounded-full w-7 inline-block"
          >
            <Heart />
          </div>
        </div>
      </div>
      <div className="flex flex-col py-3">
        {!cast && (
          <p className="text-xs my-2 font-thin text-left">
            USA, 2016 - Current
          </p>
        )}
        <p className="text-base  my-2 text-left">Stranger Things</p>
        {!cast && (
          <>
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
            <p className="text-xs font-thin text-left">
              Action, Adventure, Horror
            </p>
          </>
        )}
      </div>
    </div>
  );
}
