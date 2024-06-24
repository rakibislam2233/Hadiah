"use client";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import "@smastrom/react-rating/style.css";
import Link from "next/link";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { TProduct } from "@/types";
import { useAppDispatch } from "@/redux/hook/hook";
import { addToCart } from "@/redux/fetures/cart/cartSlice";

const ProductCard = ({ product }: { product: TProduct }) => {
  const [hovered, setHovered] = useState(false);
  const dispatch = useAppDispatch();
  const handleDispatch = () => {
    dispatch(
      addToCart({
        id: product._id,
        title: product.title,
        image: product.images[0],
        price: product.price,
      })
    );
  };

  return (
    <div className="px-1.5">
      <div
        className="w-full h-full border transition-all duration-300 hover:shadow-xl group relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link href={`/products/hadia-${product._id}/${product.title}`}>
          <div className="w-full h-52 mx-auto relative">
            <Image
              fill
              className={`mx-auto transition-opacity duration-500 ${
                hovered ? "opacity-0" : "opacity-100"
              }`}
              src={product?.images[0]}
              alt="product Image"
            />
            <Image
              fill
              className={`mx-auto absolute top-0 left-0 transition-opacity duration-500 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
              src={product?.images[1] ? product?.images[1] : product?.images[0]}
              alt="product Image"
            />
          </div>
        </Link>
        <div className="px-2 py-3 space-y-1">
          <h1>{product.category}</h1>
          <h1 className="font-semibold">
            {product.title.length > 25
              ? `${product.title.slice(0, 25)}...`
              : product.title}
          </h1>
          <h1 className="font-semibold text-gray-800 text-xl">
            ৳ {product?.price}
          </h1>
          <Rating readOnly style={{ maxWidth: 80 }} value={product.rating} />
          <div className="flex justify-center items-center">
            <button
              onClick={handleDispatch}
              className="px-6 py-2 mt-5 border rounded-full text-sm bg-gray-200 hover:bg-[#105CAA] hover:text-white flex items-center gap-1 transition-all duration-300"
            >
              <FaBagShopping /> ADD TO CART
            </button>
          </div>
        </div>
        <div className="absolute top-4 right-4 flex flex-col text-gray-800 gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-slate-200 p-1.5 rounded-full animate-fadeIn">
            <IoMdHeartEmpty className="size-5" />
          </button>
          <button className="bg-slate-200 p-1.5 rounded-full animate-fadeInDelay1">
            <IoSearch className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
