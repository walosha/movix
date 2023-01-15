import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayet({ url, name, ...others }) {
  return (
    <div className=" flex flex-col mx-auto max-w-lg text-center text-gray-900 bg-white">
      <div style={{ width: "26rem" }} className="border h-64">
        <ReactPlayer
          width="100%"
          height="100%"
          playIcon
          url={`https://www.youtube.com/watch?v=${url}`}
        />
      </div>
      <p className="font-dmssans py-2 text-base font-semibold font-poppins  my-2 text-left">
        {name}
      </p>
    </div>
  );
}
