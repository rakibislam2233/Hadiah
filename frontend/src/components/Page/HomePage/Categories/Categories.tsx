import Carasoul from "@/components/Shared/Carasoul/Carasoul";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import CategoryCard from "./CategoryCard";
import { TCategory } from "@/types";

const Categories = async () => {
  const res = await fetch("https://hadiah-theta.vercel.app/api/v1/categories", {
    cache: "no-store",
  });
  const categories = await res.json();
  return (
    <>
      <SectionTitle title="Categories" />
      <Carasoul slide={2} smSlide={3} mdSlide={4} lgSlide={7}>
        {categories?.data?.map((category: TCategory) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </Carasoul>
    </>
  );
};

export default Categories;
