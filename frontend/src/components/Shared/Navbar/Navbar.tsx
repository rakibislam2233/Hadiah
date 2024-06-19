"use client";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import Link from "next/link";
import Container from "../Container/Container";
import { IoSearch } from "react-icons/io5";
import loggedUser from "@/utils/loggedUser/loggedUser";
const Navbar = () => {
  const user = loggedUser();
  return (
    <nav className="bg-[#17273B] text-white">
      <Container className="w-full h-20 flex justify-between items-center gap-20 px-3  ">
        <Link href={"/"}>
          <div className={`flex text-3xl font-bold text-white`}>
            <h4 className="-mt-1 text-rose-500">H</h4>
            <h4 className="mt-1.5 ">a</h4>
            <h4 className="-mt-1 text-rose-500">d</h4>
            <h4 className="mt-1.5">i</h4>
            <h4 className="-mt-1 text-rose-500">a</h4>
            <h4 className="mt-1.5">h</h4>
          </div>
        </Link>
        <form className="w-full flex justify-between items-center">
          <input
            className="w-full px-2 bg-white py-[9px] rounded-l-lg outline-none border-l border-y "
            type="text"
            name="search"
            id="search"
            placeholder="Search your product"
          />
          <button className="bg-[#105CAA] px-4 py-3 border-2 border-[#105CAA] rounded-r-xl">
            <IoSearch className="text-white" />
          </button>
        </form>
        <div className="flex items-center gap-4">
          <Link href={"/login"}>
            <IoMdHeartEmpty className="w-7 h-7" />
          </Link>
          <Link href={"/login"}>
            <PiShoppingCartSimple className="w-7 h-7 " />
          </Link>
          <Link href={`${user ? "/my-account" : "/login"}`}>
            <CiUser className="w-7 h-7" />
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
