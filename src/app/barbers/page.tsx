import { getBarbers } from "@/api/axios";
import { BarbersType, DataType } from "@/api/types";
import { Card } from "@/components/card";
import { SearchInput } from "@/components/searchInput";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default async function Barbers({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; type?: string }>;
}) {
  const data: DataType = await getBarbers();

  const search = (await searchParams)?.search;

  const type = (await searchParams)?.type;

  const filterdBarbers = type
    ? data.results.filter((barber) =>
        type === "isShop"
          ? barber.is_shop === true
          : type === "notShop"
          ? barber.is_shop === false
          : data.results
      )
    : data.results;

  const searchFilteredBarbers = search
    ? filterdBarbers.filter((barber) =>
        barber.fullname.toLowerCase().includes(search.toLowerCase())
      )
    : filterdBarbers;

  return (
    <div className="w-full p-5">
      <div className="w-full flex">
        <SearchInput />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-3">
        <Suspense fallback={<Loading />}>
          {searchFilteredBarbers.map((barber: BarbersType, i: number) => (
            <div key={i}>
              <Card barber={barber} index={i} />
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
}
