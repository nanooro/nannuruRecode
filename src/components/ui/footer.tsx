import React from "react";
import Link from "next/link";
export default function  Footer({}) {
  return (
    <div
      className="-mb-2 w-full bg-slate-300 min-h-[150px] mt-[200px] h-auto  flex flex-col justify-center items-center "
      id="footer"
    >
      <h1 className="text-3xl ">
        By{" "}
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-600 to-pink-600">
          Janapriya media
        </span>
      </h1>
      <Link href="https://www.youtube.com/channel/UCiIjpbV1aonM5F61JeiJ9gQ">
        <h1 className="m-4 text-3xl inline-block relative">
          visit our channel!
          <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></span>
        </h1>{" "}
      </Link>
    </div>
  );
}
