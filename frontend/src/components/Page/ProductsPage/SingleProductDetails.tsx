"use client";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useState } from "react";
import { TProduct } from "@/types";

const SingleProductDetails = ({ product }: { product: TProduct }) => {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <div className="space-y-3.5 pb-4">
      <h1 className="text-2xl">{product.title}</h1>
      <div className="flex gap-5">
        <Rating readOnly style={{ maxWidth: 70 }} value={product.rating} />
        <ul className="flex gap-2">
          <li>35 Rating</li>
          <li>|</li>
          <li>259 Answer</li>
        </ul>
      </div>
      <h1 className="text-2xl font-bold bg-gradient-to-t bg-[#17273B] from-[#105CAA] text-transparent bg-clip-text">
        ৳ {product.price}
      </h1>
      <h1 className="text-lg">{product.description}</h1>
      <div>
        <h1 className="text-lg">Brand : {product.brand}</h1>
        <h1 className="text-lg">Category : {product.category}</h1>
      </div>
      <div className="flex justify-between items-center flex-wrap  gap-5">
        <div className="flex items-center">
          <button
            disabled={quantity === 0}
            onClick={() => setQuantity(quantity - 1)}
            className="px-4 h-12 border-l border-t border-b rounded-l"
          >
            <FiMinus className="w-5 h-5" />
          </button>
          <h1 className="px-4 h-12 border flex justify-center items-center font-semibold">
            {quantity}
          </h1>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 h-12 border-r border-t border-b rounded-r"
          >
            <FiPlus className="w-5 h-5" />
          </button>
        </div>
        <div className="flex gap-5">
          <button className="px-6 h-12 bg-gradient-to-t bg-[#17273B] from-[#105CAA] text-white flex justify-center items-center gap-2 rounded hover:bg-gradient-to-t hover:bg-[#105CAA] hover:from-[#193558] transition-all duration-500">
            <PiShoppingCartSimple className="w-6 h-6 " />
            Add to cart
          </button>
          <button className="px-6 h-12 bg-gradient-to-t bg-[#17273B] from-[#105CAA] text-white flex justify-center items-center gap-2 rounded hover:bg-gradient-to-t hover:bg-[#105CAA] hover:from-[#193558] transition-all duration-500">
            <IoMdHeartEmpty className="w-6 h-6" />
          </button>
        </div>
      </div>
      <button className="w-full h-12 bg-gradient-to-t bg-[#17273B] from-[#105CAA] text-white flex justify-center items-center gap-2 rounded hover:bg-gradient-to-t hover:bg-[#105CAA] hover:from-[#193558] transition-all duration-500">
        Buy Now
      </button>
    </div>
  );
};

export default SingleProductDetails;
