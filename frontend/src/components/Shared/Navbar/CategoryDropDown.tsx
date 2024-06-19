"use client";
import { formatCategoryNameForward } from "@/constant";
import { TCategory } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";

const CategoryDropDown = ({ categories }: { categories: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full max-w-[220px] relative">
      <div onClick={() => setIsOpen(!isOpen)} className="w-full  relative">
        <button className="text-white text-lg flex items-center gap-2">
          <HiBars3BottomLeft className="size-6" /> Top Categories
        </button>
      </div>
      <div
        className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[calc(100vh-128px)]" : "max-h-0"
        } w-full max-w-[220px] absolute top-[38px] bg-white text-black z-40 rounded-b `}
      >
        {categories
          .filter((category: TCategory) => category.status === "top")
          ?.slice(0, 9)
          .map((category: TCategory) => (
            <Link
              key={category._id}
              href={`/shop/${formatCategoryNameForward(category.name)}`}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex gap-4 justify-start items-center border-b p-3">
                <Image
                  width={20}
                  height={20}
                  src={category.image}
                  alt={category.name}
                />
                <li className="block">{category.name}</li>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CategoryDropDown;
