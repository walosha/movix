import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayet() {
  return (
    <div className=" flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white">
      <div style={{ width: "26rem" }} className="border h-64">
        <ReactPlayer
          fallback={<h1>Loading .....</h1>}
          width="100%"
          height="100%"
          playIcon
          url="https://youtu.be/gj5ibYSz8C0"
        />
      </div>
      <p className="py-2 text-base font-semibold font-poppins  my-2 text-left">
        The Suicide Squad : John Cena Interview
      </p>
    </div>
  );
}
