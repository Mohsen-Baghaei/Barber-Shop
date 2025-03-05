import { BarbersType } from "@/api/types";
import Link from "next/link";

import { CiStar } from "react-icons/ci";
import { GiRoundStar } from "react-icons/gi";

export async function Card({
  barber,
  index,
}: {
  barber: BarbersType;
  index: number;
}) {
  const rating = Array(5).fill(0);

  return (
    <div className="flex flex-col p-2 w-full bg-gradient-to-t from-gray-800 to-gray-900 rounded-xl border border-solid border-gray-700">
      <div className="flex flex-col gap-1 lg:gap-5 w-full justify-start items-center">
        <div className="flex justify-center items-center mt-6">
          <img
            src={barber.avatar}
            alt={barber.fullname}
            className="size-20 md:size-24 lg:size-28 rounded-full"
          />
        </div>
        <div className="flex justify-center items-center">
          <p className="text-2xl mt-1 line-clamp-1">{barber.fullname}</p>
        </div>
      </div>
      <div className="p-2 flex justify-center items-center w-full">
        {rating.map((rate: number, i: number) => {
          return (
            <div key={i}>
              {i < barber.rate ? (
                <GiRoundStar className="size-5 md:size-6 text-yellow-400 cursor-pointer" />
              ) : (
                <CiStar className="size-5 md:size-6 text-yellow-400 cursor-pointer" />
              )}
            </div>
          );
        })}
      </div>

      <p className="w-full text-center mt-1">
        {barber.reviews_count} Review{barber.reviews_count > 1 ? "'s" : ""}
      </p>
      <p className="flex justify-start items-center end-full gap-1 p-2 line-clamp-1">
        <span className="font-semibold text-base md:text-xl">Services:</span>
        <span> </span>
        <span className="text-base md:text-lg">{barber.services[0]}</span>
        <span className="text-base md:text-lg hidden xl:block">
          - {barber.services[1]}
        </span>
        <span>...</span>
      </p>

      <p className="flex justify-start items-center end-full gap-1 p-2 line-clamp-1">
        <span className="font-semibold text-base md:text-xl">Address:</span>
        <span> </span>
        <span className="text-base md:text-lg line-clamp-1">
          {barber.address}
        </span>
      </p>

      <Link
        href={`/barbers/${index}`}
        className="py-2 w-full border text-center border-solid border-sky-500 transition-all duration-500 hover:scale-105 rounded-xl"
      >
        View Details
      </Link>
    </div>
  );
}
