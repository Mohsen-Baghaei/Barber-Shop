import { getBarbers } from "@/api/axios";

import { BarbersType, DataType } from "@/api/types";

import { CiStar } from "react-icons/ci";
import { GiRoundStar } from "react-icons/gi";

export default async function Barber({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data: DataType = await getBarbers();

  const barberData: BarbersType = data.results[parseInt(id)];

  const rating = Array(5).fill(0);

  return (
    <div className="flex flex-col p-5 w-full md:w-3/4 bg-gradient-to-t from-gray-800 to-gray-900 rounded-xl border border-solid border-gray-700 mx-5 md:mx-auto mt-5">
      <div className="flex flex-col gap-1 lg:gap-5 w-full justify-start items-center">
        <div className="flex justify-center items-center mt-6">
          <img
            src={barberData.avatar}
            alt={barberData.fullname}
            className="size-32 md:size-36 lg:size-40 rounded-full"
          />
        </div>
        <div className="flex justify-center items-center">
          <p className="text-4xl mt-1 line-clamp-1">{barberData.fullname}</p>
        </div>
      </div>
      <div className="p-2 flex justify-center items-center w-full">
        {rating.map((rate: number, i: number) => {
          return (
            <div key={i}>
              {i < barberData.rate ? (
                <GiRoundStar className="size-8 md:size-10 text-yellow-400 cursor-pointer" />
              ) : (
                <CiStar className="size-8 md:size-10 text-yellow-400 cursor-pointer" />
              )}
            </div>
          );
        })}
      </div>

      <p className="w-full text-xl text-center mt-1">
        {barberData.reviews_count} Review
        {barberData.reviews_count > 1 ? "'s" : ""}
      </p>
      <ul className="flex flex-col xl:flex-row justify-center md:justify-start items-start md:items-center end-full gap-2 p-2 ">
        <span className="font-bold text-xl md:text-2xl">Services:</span>
        {barberData.services.map((service, i) => (
          <li key={i} className="font-semibold text-lg md:text-xl">
            {service} .
          </li>
        ))}
      </ul>

      <p className="flex flex-col xl:flex-row justify-center md:justify-start items-start md:items-center end-full gap-2 p-2 ">
        <span className="font-bold text-xl md:text-2xl">Address:</span>
        <span> </span>
        <span className="font-semibold text-lg md:text-xl">
          {barberData.address}
        </span>
      </p>

      <a
        className="flex justify-start items-center end-full gap-1 p-2 line-clamp-1"
        href={`tel:${barberData.phone_number}`}
      >
        <span className="font-bold text-xl md:text-2xl">Phone Number:</span>
        <span> </span>
        <span className="font-semibold text-lg md:text-xl">
          {barberData.phone_number}
        </span>
      </a>

      <p className="flex justify-start items-center end-full gap-1 p-2 line-clamp-1">
        <span className="font-bold text-xl md:text-2xl">Distence:</span>
        <span> </span>
        <span className="font-semibold text-lg md:text-xl">
          {barberData.distance} KM
        </span>
      </p>
    </div>
  );
}
