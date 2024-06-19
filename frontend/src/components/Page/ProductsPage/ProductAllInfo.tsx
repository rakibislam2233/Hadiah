"use client";
import { useState } from "react";
import { GiPolarStar } from "react-icons/gi";
import AddReview from "./AddReview";
import ShowReview from "./ShowReview";
import { TProduct } from "@/types";

const ProductAllInfo = ({ product }: { product: TProduct }) => {
  const [category, SetCategory] = useState("shipping");
  return (
    <div className="w-full bg-white p-3">
      <div className="flex justify-center items-center gap-5 transition-all duration-300">
        <button
          onClick={() => SetCategory("shipping")}
          className={`px-5 py-2 border rounded hover:bg-gradient-to-t hover:bg-[#105CAA] hover:from-[#193558] hover:text-white ${
            category === "shipping" &&
            "bg-gradient-to-t bg-[#105CAA] from-[#193558] text-white"
          }`}
        >
          Shipping Info
        </button>
        <button
          onClick={() => SetCategory("specification")}
          className={`px-5 py-2 border rounded hover:bg-gradient-to-t hover:bg-[#105CAA] hover:from-[#193558] hover:text-white ${
            category === "specification" &&
            "bg-gradient-to-t bg-[#105CAA] from-[#193558] text-white"
          }`}
        >
          Specification
        </button>
        <button
          onClick={() => SetCategory("product")}
          className={`px-5 py-2 border rounded hover:bg-gradient-to-t hover:bg-[#105CAA] hover:from-[#193558] hover:text-white ${
            category === "product" &&
            "bg-gradient-to-t bg-[#105CAA] from-[#193558] text-white"
          }`}
        >
          Product Details
        </button>
        <button
          onClick={() => SetCategory("review")}
          className={`px-5 py-2 border rounded hover:bg-gradient-to-t hover:bg-[#105CAA] hover:from-[#193558] hover:text-white ${
            category === "review" &&
            "bg-gradient-to-t bg-[#105CAA] from-[#193558] text-white"
          }`}
        >
          Review
        </button>
      </div>
      <div className="mt-5 border p-3 rounded">
        {category === "shipping" ? (
          <div>
            <h1>
              অর্ডার করার পূর্বে নিম্নের বিষয়গুলি ভালোভাবে বুঝে অর্ডার করুন।
            </h1>
            <ul className="flex flex-col gap-3 mt-3">
              <li className="flex items-center gap-1">
                <GiPolarStar className="w-4 h-4 text-orange-500" /> আমরা কোন
                পণ্য স্টক রাখিনা।
              </li>
              <li className="flex items-center gap-1">
                <GiPolarStar className="w-4 h-4 text-orange-500" />
                অর্ডার পেলেই শুধুমাত্র উক্ত পণ্য সাপ্লাইয়ার থেকে কেনা হয়।
              </li>
              <li className="flex items-center gap-1">
                <GiPolarStar className="w-4 h-4 text-orange-500" /> পণ্য আসতে ১৫
                থেকে ২৫ কার্যদিবস সময় লাগবে।
              </li>
              <li className="flex items-center gap-1">
                <GiPolarStar className="w-5 h-5 text-orange-500" />
                তবে দীর্ঘমেয়াদী লক ডাউন, হরতাল, অবরোধ, CNF ধর্মঘট অথবা জাতীয় কোন
                ইস্যুর কারনে কাস্টমস অফিস বন্ধ থাকলে এই সময় কার্যকর হবেনা।
              </li>
              <li className="flex items-center gap-1">
                <GiPolarStar className="w-4 h-4 text-orange-500" />
                ৪৫ কার্যদিবসের মধ্যে পণ্য বুঝে না পেলে আপনার দেওয়া টাকা ১০০%
                রিফান্ড করা হবে।
              </li>
            </ul>
          </div>
        ) : category === "specification" ? (
          <>
            <ul className="flex flex-col gap-2">
              {Object.entries(product?.specification).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}: </strong>
                  {value ? (value as string) : "NA"}
                </li>
              ))}
            </ul>
          </>
        ) : category === "product" ? (
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere praesentium quae eaque aspernatur possimus ratione, quo eos magni consequatur numquam dolorem autem amet inventore fuga aliquam repellat at. Accusamus aperiam ullam consequuntur beatae, a aliquam quos officia nemo quisquam voluptatum odit soluta corporis placeat debitis molestias excepturi nisi repellendus. Expedita, debitis excepturi sit ea voluptatibus doloremque optio voluptate veniam? Incidunt, ullam esse! Quas sed iure voluptatum saepe, excepturi accusantium fuga accusamus nesciunt ab quibusdam veritatis quidem eligendi iusto tempore suscipit possimus ea aut, voluptate, nam eaque laborum similique atque. Deleniti, quasi repudiandae adipisci saepe placeat rerum provident reiciendis et quisquam?
            </p>
          </>
        ) : (
          <>
            <AddReview />
            <ShowReview />
          </>
        )}
      </div>
  </div>
  );
};

export default ProductAllInfo;
