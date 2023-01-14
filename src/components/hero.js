import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as TV } from "../assets/tv.svg";
import { ReactComponent as Hambuger } from "../assets/hambuger.svg";
import { ReactComponent as Play } from "../assets/play.svg";
import Imdb from "../assets/imdbLogo.svg";
import Apple from "../assets/apple.svg";
import { useAuth } from "../context/Authcontext";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Hero() {
  const { logout, currentUser } = useAuth();
  const [fullname, setFullname] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    (async (id) => {
      const docRef = doc(db, "users", id);
      try {
        const docSnap = await getDoc(docRef);
        setFullname(docSnap.data()?.fullname);
      } catch (error) {
        console.error(error);
      }
    })(currentUser?.uid);
  }, [currentUser?.uid]);

  return (
    <div className="isolate bg-white bg-hero-pattern bg-no-repeat bg-cover mb-12">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"></div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="/" className="-m-1.5 p-1.5">
                <TV />
              </a>
              <p className="text-white">Movix</p>
            </div>

            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              <div className="relative w-full">
                <input
                  type="text"
                  id="text"
                  className="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:border-gray-600 pla placeholder:text-lime-50  dark:focus:ring-white "
                  placeholder="what do you want to watch?"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    width="20"
                    height="20"
                    className="DocSearch-Search-Icon"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                      stroke="#ffff"
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <p className="inline-block  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ">
                Hi, {fullname}
              </p>
              <div
                onClick={async () => {
                  await logout();
                  navigate("/");
                }}
                className="bg-red-700  rounded-full w-11 h-11 py-4 px-3 cursor-pointer"
              >
                <Hambuger />
              </div>
            </div>
          </nav>
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div className="px-14">
              <h1 className="text-4xl text-white font-bold tracking-tight sm:text-left sm:text-6xl">
                John Wick 3 :
              </h1>
              <h1 className="text-4xl text-white font-bold tracking-tight sm:text-left sm:text-6xl">
                Parabellum
              </h1>
              <div className="my-8 flex gap-x-4 sm:justify-left items-center">
                <div className="">
                  <img src={Imdb} alt="imdb logo" />
                </div>
                <p className="text-sm text-white">86.0 / 100</p>
                <div className="">
                  <img src={Apple} alt="Apple" />
                </div>
                <p className="text-sm text-white">97%</p>
              </div>
              Apple
              <p className="mt-6 text-sm text-white leading-8 sm:text-left">
                John Wick is on the run after killing a member of the
                international assassins' guild, and with a $14 million price tag
                on his head, he is the target of hit men and women everywhere.
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-left">
                <a
                  href="/"
                  className="inline-block  bg-rose-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                >
                  <span
                    className="text-indigo-200 inline-block"
                    aria-hidden="true"
                  >
                    <Play />{" "}
                  </span>
                  <span className="inline-block"> WATCH TRAILER</span>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
