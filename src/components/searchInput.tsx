"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

export const SearchInput = () => {
  const [search, setSearch] = useState<string>("");
  const [shopType, setShopType] = useState("all");

  const router = useRouter();

  const handleClick = () => {
    router.push(`/barbers/?search=${search}`);
  };

  const handleBack = () => {
    setSearch("");
    router.push("/barbers");
  };

  useEffect(() => {
    router.push(`/barbers/?type=${shopType}`);
  }, [shopType]);

  return (
    <div className="w-full flex justify-between">
      <div className={search ? "hidden" : "block"}></div>
      <button
        onClick={handleBack}
        className={`p-2 bg-gray-200 rounded-full text-gray-800 transition-colors hover:bg-gray-400 cursor-pointer ${
          search ? "block" : "hidden"
        }`}
      >
        <IoMdArrowRoundBack className="size-5" />
      </button>
      <div className="flex justify-center items-center gap-1">
        <input
          type="text"
          value={search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          className="bg-slate-200 rounded-3xl text-gray-800 p-1 px-2 outline-none"
        />
        <button
          onClick={handleClick}
          className="p-2 bg-gray-200 rounded-full text-gray-800 transition-colors hover:bg-gray-400 cursor-pointer"
        >
          <IoSearch className="size-5" />
        </button>
      </div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 line-clamp-1">
            Shop Type
            <MdKeyboardArrowDown
              aria-hidden="true"
              className="-mr-1 size-5 text-gray-400"
            />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <button
                onClick={() => setShopType("all")}
                className={`block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none ${
                  shopType === "all"
                    ? "border-b-2 border-solid border-sky-500"
                    : ""
                }`}
              >
                All
              </button>
            </MenuItem>
            <MenuItem>
              <a
                onClick={() => setShopType("isShop")}
                className={`block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none ${
                  shopType === "isShop"
                    ? "border-b-2 border-solid border-sky-500"
                    : ""
                }`}
              >
                Is Shop
              </a>
            </MenuItem>
            <MenuItem>
              <a
                onClick={() => setShopType("notShop")}
                className={`block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none ${
                  shopType === "notShop"
                    ? "border-b-2 border-solid border-sky-500"
                    : ""
                }`}
              >
                Not a Shop
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
};
