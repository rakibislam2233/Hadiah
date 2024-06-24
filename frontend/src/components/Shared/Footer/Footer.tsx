import Container from "@/components/Shared/Container/Container";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#17273B] text-white">
      <Container className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-5 px-3 py-5  pt-10">
        <div className="space-y-3">
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
          <div>
            <div className="flex items-center">
              <button>
                <IoLocationOutline className="size-6 -ml-1" />
              </button>
              <h1 className="font-semibold">HEAD OFFICE:</h1>
            </div>
            <p>
              Hadiah International Shop <br /> Thakurgaon Sadar Thakurgaon
              <br />
              Phone: 01999-577318
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <button>
                <MdOutlineMail className="size-6" />
              </button>
              <h1 className="font-semibold">EMAIL:</h1>
            </div>
            <p>rakib2020.tkg@gmail.com</p>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <button>
                <MdPhone className="size-6" />
              </button>
              <h1 className="font-semibold">PHONE:</h1>
            </div>
            <p>+8801319101179</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold">USEFULL LINK</h1>
          <ul className="flex flex-col gap-2 mt-5">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Products</Link>
            </li>
            <li>
              <Link href={"/"}>Special Offer</Link>
            </li>
            <li>
              <Link href={"/"}>View Cart</Link>
            </li>
            <li>
              <Link href={"/"}>Sign Up</Link>
            </li>
            <li>
              <Link href={"/"}>Sign In</Link>
            </li>
            <li>
              <Link href={"/"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"/"}>FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold">INFORMATION</h1>
          <ul className="flex flex-col gap-2 mt-5">
            <li>About Us</li>
            <li>Contact us </li>
            <li>Privacy Policy</li>
            <li> Terms and conditions </li>
            <li>Return and Refund Policy </li>
            <li>Shipping and Delivery Policy</li>
            <li>Secured Payment</li>
            <li> Transparency</li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold">SOCIAL LINKS</h1>
          <div className="flex  items-center gap-5 mt-5">
            <button className="w-10 h-10 border rounded-full flex justify-center items-center bg-rose-500">
              <FaFacebookF className="size-4 text-white" />
            </button>
            <button className="w-10 h-10 border rounded-full flex justify-center items-center  bg-rose-500">
              <FaInstagram className="size-4 text-white" />
            </button>
            <button className="w-10 h-10 border rounded-full flex justify-center items-center  bg-rose-500">
              <FaTwitter className="size-4 text-white" />
            </button>
            <button className="w-10 h-10 border rounded-full flex justify-center items-center  bg-rose-500">
              <FaYoutube className="size-4 text-white" />
            </button>
          </div>
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-3 py-2 border mt-5 rounded-full outline-none "
              placeholder="Enter your email"
            />
            <button className="px-8 py-2 bg-rose-500 text-white rounded-full">
              Submit
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
