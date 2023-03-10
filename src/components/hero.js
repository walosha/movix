import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [isloading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    (async (id) => {
      const docRef = doc(db, "users", id);
      try {
        const docSnap = await getDoc(docRef);
        setFullname(docSnap.data()?.fullname);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setFullname("an error occurred!");
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
            className="flex h-9 items-center justify-between px-4 mx-auto max-w-screen-2xl lg:px-20"
            aria-label="Global"
          >
            <div
              className="flex items-center lg:min-w-0 lg:flex-1"
              aria-label="Global"
            >
              <Link to="/" className="p-1.5 mr-2">
                <TV />
              </Link>
              <p className="font-dmssans text-base font-bold text-white">
                Movix
              </p>
            </div>

            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              <div className="relative w-full">
                <input
                  type="text"
                  id="text"
                  className="font-dmssans bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:border-gray-600 pla placeholder:text-lime-50  dark:focus:ring-white "
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
            <div className="hidden lg:flex items-center lg:min-w-0 lg:flex-1 lg:justify-end">
              {isloading ? (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 mr-3 text-white animate-spin"
                  viewBox="0 0 100 101"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <p className="font-dmssansinline-block  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ">
                  Hi, {fullname}
                </p>
              )}
              <div
                onClick={async () => {
                  await logout({ navigate });
                }}
                className="bg-red-700  rounded-full w-11 h-11 py-4 px-3 cursor-pointer"
              >
                <Hambuger />
              </div>
            </div>
          </nav>
        </div>
      </div>
      <main className="px-4 mx-auto max-w-screen-2xl lg:px-0">
        <div className="relative px-6 lg:px-8">
          <div className="max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div className="px-14">
              <div className="mb-4">
                <h1 className="font-dmssans text-4xl text-white font-bold tracking-tight sm:text-left sm:text-6xl">
                  John Wick 3 :
                </h1>
                <h1 className="font-dmssans text-4xl text-white font-bold tracking-tight sm:text-left sm:text-6xl">
                  Parabellum
                </h1>
              </div>
              <div className="flex gap-x-4 sm:justify-left items-center">
                <div>
                  <img src={Imdb} alt="imdb logo" />
                </div>
                <p className="font-dmssans text-sm text-white">86.0 / 100</p>
                <div className="">
                  <img src={Apple} alt="Apple" />
                </div>
                <p className="font-dmssans text-sm text-white">97%</p>
              </div>
              <p className="font-dmssans font-bold mt-2 text-sm text-white leading-8 sm:text-left lg:w-3/5 md:w-1/2">
                John Wick is on the run after killing a member of the
                international assassins' guild, and with a $14 million price tag
                on his head, he is the target of hit men and women everywhere.
              </p>
              <div className="mt-8 flex gap-x-4 sm:justify-left">
                <div className="flex items-center bg-rose-600 rounded-sm px-4 py-1.5 text-base font-semibold leading-7 text-white cursor-pointer">
                  <span className="text-indigo-200 mr-2" aria-hidden="true">
                    <Play />{" "}
                  </span>
                  <span className="font-dmssans inline-block">
                    {" "}
                    WATCH TRAILER
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
