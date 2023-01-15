import React from "react";
import Imdb from "../assets/imdbLogo.svg";
import Apple from "../assets/apple.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";
import { clsxm } from "../util/clsxlm";

export default function MovieCard({
  cast,
  backdrop_path,
  original_title,
  genre_ids,
  poster_path,
  title,
  profile_path,
  name,
  release_date,
  genres,
  vote_average,
  ...others
}) {
  return (
    <div className=" flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white">
      <div
        style={{
          background: `url(https://image.tmdb.org/t/p/w342${
            cast ? profile_path : poster_path
          })`,
          objectFit: "cover",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "18rem",
          width: "12rem",
        }}
        // eslint-disable-next-line no-template-curly-in-string
        className={clsxm([
          "border",
          // "h-80",
          "w-62",
          "bg-no-repeat",
          "bg-cover",
          `bg-[url(https://image.tmdb.org/t/p/w342${poster_path})]`,
        ])}
      >
        <div className="pl-2 cursor-pointer text-end m-4">
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
          <p className="font-dmssans font-regular text-xs my-2 font-thin text-left">
            USA, {release_date} - Current
          </p>
        )}
        <p className="font-dmssans font-bold text-base  my-2 text-left">
          {cast ? name : original_title}{" "}
        </p>
        {!cast && (
          <>
            <div className="flex justify-between my-2">
              <div className="flex">
                <div className="pr-2">
                  <img src={Imdb} alt="imdb logo" />
                </div>
                <p className="text-xs">
                  {Number(vote_average * 10).toFixed(2)} / 100
                </p>
              </div>

              <div className="flex">
                <div className="pl-2">
                  <img src={Apple} alt="Apple" />
                </div>
                <p className="text-sm pl-2">
                  {Number(vote_average * 10).toFixed(2) + "%"}
                </p>
              </div>
            </div>
            <div className="text-left">
              {genre_ids?.map((id, i) => (
                <span className="inline-block font-dmssans text-xs font-thin text-left mr-1">
                  {genres[id]?.name}
                  {/* add comma to genra except the last */}
                  {i < genre_ids.length - 1 && ","}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
