"use client";
import loggedUser from "@/utils/loggedUser/loggedUser";
import Image from "next/image";
import profileImage from "@/assest/image/profile-picture.png";
import { IoHeart, IoHome } from "react-icons/io5";
import { FaAddressCard, FaGift } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";
const Sidebar = () => {
  return (
    <div className="w-[25%] bg-white h-screen rounded">
      <ul className="w-full flex justify-center items-center flex-col gap-4 px-5">
        <li className="w-full h-10 px-3 bg-gradient-to-t bg-[#17273B] from-[#105CAA] hover:bg-gradient-to-t hover:bg-[#105CAA] hover:from-[#193558] transition-all duration-500 flex items-center gap-2 text-white rounded">
          <IoHome size={20} />
          Dashboard
        </li>
        <li className="w-full h-10 px-3 bg-gradient-to-t bg-[#17273B] from-[#105CAA] hover:bg-gradient-to-t hover:bg-[#105CAA] hover:from-[#193558] transition-all duration-500 flex items-center gap-2 text-white rounded">
          <FaGift size={20} />
          Orders
        </li>
        <li className="w-full h-10 px-3 bg-gradient-to-t bg-[#17273B] from-[#105CAA] hover:bg-gradient-to-t hover:bg-[#105CAA] hover:from-[#193558] transition-all duration-500 flex items-center gap-2 text-white rounded">
          <FaAddressCard size={20} />
          Address
        </li>
        <li className="w-full h-10 px-3 bg-gradient-to-t bg-[#17273B] from-[#105CAA] hover:bg-gradient-to-t hover:bg-[#105CAA] hover:from-[#193558] transition-all duration-500 flex items-center gap-2 text-white rounded">
          <CgProfile size={20} />
          Profile
        </li>
        <li className="w-full h-10 px-3 bg-gradient-to-t bg-[#17273B] from-[#105CAA] hover:bg-gradient-to-t hover:bg-[#105CAA] hover:from-[#193558] transition-all duration-500 flex items-center gap-2 text-white rounded">
          <IoHeart size={20} />
          My Wishlist
        </li>
        <li className="w-full h-10 px-3 bg-gradient-to-t bg-[#17273B] from-[#105CAA] hover:bg-gradient-to-t hover:bg-[#105CAA] hover:from-[#193558] transition-all duration-500 flex items-center gap-2 text-white rounded">
          <RiLogoutCircleLine size={20} />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
