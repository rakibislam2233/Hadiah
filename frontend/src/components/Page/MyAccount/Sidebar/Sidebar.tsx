"use client";
import loggedUser from "@/utils/loggedUser/loggedUser";
import Image from "next/image";
import profileImage from "@/assest/image/profile-picture.png";
import { IoHeart, IoHome } from "react-icons/io5";
import { FaAddressCard, FaGift } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TUser = {
  userId: string;
  fullName: string;
  email: string;
  profileImage: string;
  role: string;
};
const Sidebar = () => {
  const isActive = usePathname();
  const user = loggedUser() as TUser;
  console.log(user)
  return (
    <div className="w-[25%] bg-white h-screen py-5 rounded">
      <div className="flex flex-col justify-center items-center gap-2">
        <Image
          width={60}
          height={60}
          src={user.profileImage ? user.profileImage : profileImage}
          alt="defaultImage"
        />
        <h1 className="text-xl font-semibold">{user?.fullName}</h1>
      </div>
      <ul className="w-full flex justify-center items-center flex-col gap-1 px-5 mt-5 ">
        <Link
          className={`w-full px-5 py-3  transition-all duration-500 flex items-center gap-2   text-white border-b rounded  ${
            isActive === "/my-account" ? "bg-[#17273B]" : "bg-gray-700"
          }`}
          href={"/my-account"}
        >
          <IoHome size={20} />
          Dashboard
        </Link>
        <Link
          className={`w-full px-5 py-3  transition-all duration-500 flex items-center gap-2   text-white border-b rounded ${
            isActive === "/my-account/orders" ? "bg-[#17273B]" : "bg-gray-700"
          }`}
          href={"/my-account/orders"}
        >
          <FaGift size={20} />
          Orders
        </Link>
        <Link
          className={`w-full px-5 py-3  transition-all duration-500 flex items-center gap-2   text-white border-b rounded ${
            isActive === "/my-account/address" ? "bg-[#17273B]" : "bg-gray-700"
          }`}
          href={"/my-account/address"}
        >
          <FaAddressCard size={20} />
          Address
        </Link>
        <Link
          className={`w-full px-5 py-3  transition-all duration-500 flex items-center gap-2   text-white border-b rounded ${
            isActive === "/my-account/profile" ? "bg-[#17273B]" : "bg-gray-700"
          }`}
          href={"/my-account/profile"}
        >
          <CgProfile size={20} />
          Profile
        </Link>
        <Link
          className={`w-full px-5 py-3  transition-all duration-500 flex items-center gap-2   text-white border-b rounded ${
            isActive === "/my-account/wishlist" ? "bg-[#17273B]" : "bg-gray-700"
          }`}
          href={"/my-account/wishlist"}
        >
          <IoHeart size={20} />
          My Wishlist
        </Link>
        <li className="w-full px-5 py-3  transition-all duration-500 flex items-center gap-2 bg-gray-700  text-white border-b rounded">
          <RiLogoutCircleLine size={20} />
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
