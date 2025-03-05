import Image from "next/image";
import barberchair from "../../public/barberchair.png";

export default function Loading() {
  return (
    <div className="flex justify-center items-center minScreen sm:maxScreen">
      <Image
        src={barberchair}
        alt="loading"
        className="size-56 md:size-72 animate-bounce p-4"
      />
    </div>
  );
}
