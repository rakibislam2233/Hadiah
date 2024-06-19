import Container from "../Container/Container";
import CategoryDropDown from "./CategoryDropDown";

const SubNavbar = async () => {
  const res = await fetch("https://hadiah-theta.vercel.app/api/v1/categories", {
    cache: "no-store",
  });
  const categories = await res.json();
  return (
    <div className="w-full h-12 bg-[#193558] shadow-sm sticky top-0 left-0 z-40 ">
      <Container className="flex items-center  px-3">
        <CategoryDropDown categories={categories?.data} />
        <ul className="flex">
          <li className="px-5 py-3 border-l border-[#304A69] text-white">
            Home
          </li>
          <li className="px-5 py-3 border-l border-[#304A69] text-white">
            Shop
          </li>
          <li className="px-5 py-3 border-l border-[#304A69] text-white">
            About Us
          </li>
          <li className="px-5 py-3 border-l border-[#304A69] text-white">
            Contact Us
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default SubNavbar;
