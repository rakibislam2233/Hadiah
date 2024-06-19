import { TCategory } from "@/types";
import Image from "next/image";
import Link from "next/link";
const CategoryCard = ({ category }: { category: TCategory }) => {
  const formatCategoryName = (name: string) => {
    let formattedName = name.toLowerCase();
    formattedName = formattedName.replace(/\s+/g, "");
    return formattedName;
  };
  return (
    <div className="p-2">
      <Link href={`/shop/${formatCategoryName(category.name)}`}>
        <div className="bg-slate-200 w-full h-28 mx-auto  p-3 rounded hover:bg-gray-300 group overflow-hidden transition-all duration-500 cursor-pointer flex justify-center items-center">
          <Image
            width={60}
            height={60}
            className="mx-auto group-hover:scale-110 transition-all duration-500"
            src={category.image}
            alt="image"
          />
        </div>
      </Link>
      <h1 className="font-semibold text-center mt-1">{category.name}</h1>
    </div>
  );
};

export default CategoryCard;
