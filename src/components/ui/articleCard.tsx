import React from "react";
import Image from "next/image";

type Props = {
  imgUrl: string;
  Heading: string;
  subHeading: string;
  date: string;
  rating: number;
};

export function ArticleCard({
  imgUrl,
  Heading,
  subHeading,
  date,
  rating,
}: Props) {
  return (
    <div
      className="gap-5 justify-center items-center w-[100%] h-auto flex flex-wrap"
      id="articlesWrapper"
    >
      <div
        className="bg-white w-[250px] rounded-xl shadow"
        aria-label="card-overlay-v3"
      >
        <div className="w-full rounded-xl h-[250px] flex-shrink-0 relative overflow-hidden">
          <Image
            src={imgUrl}
            alt="The grand resort"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col flex-1 p-5">
          <div className="pb-5 mb-5 border-b border-gray-200">
            <h3 className="mb-1 text-lg font-bold">{Heading}</h3>
            <span className="text-sm">{subHeading}</span>
          </div>
          <div className="flex items-center justify-between w-full ml-auto">
            <div className="text-sm text-slate-400">{date}</div>
            <div className="flex items-center gap-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-bold">{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
