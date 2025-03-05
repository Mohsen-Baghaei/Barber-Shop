import Link from "next/link";
import { Yellowtail } from "next/font/google";
import Image from "next/image";
import barber from "../../public/barber.png";

const monsieurFont = Yellowtail({
  weight: "400",
  subsets: ["latin"],
});

export const Header = () => {
  return (
    <header className="w-full flex p-5 bg-gray-900 items-center">
      <Link href="/barbers" className="flex justify-center items-center">
        <Image src={barber} alt="logo" className="size-12" />
        <h1
          className={`font-bold text-4xl sm:text-5xl flex justify-center items-center gap-2 ${monsieurFont.className}`}
        >
          Barber Shop
        </h1>
      </Link>
      <div></div>
    </header>
  );
};
