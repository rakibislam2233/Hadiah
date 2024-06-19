
import { TCategory } from "@/types";
import Container from "@/components/Shared/Container/Container";
import CategoryCard from "@/components/Page/HomePage/Categories/CategoryCard";

const Shop = async () => {
  const res = await fetch("https://hadiah-theta.vercel.app/api/v1/categories", {
    cache: "no-store",
  });
  const categories = await res.json();
  console.log(categories)
  return (
    <Container className="px-3">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="col-span-full md:col-span-3 z-0">
          <h1 className="text-2xl p-2 uppercase font-semibold">All Category</h1>
          <div className="grid grid-cols-2 gap-2">
            {categories?.data.map((category: TCategory) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        </div>
        <div className="w-full col-span-full md:col-span-9">
          <h1>Products</h1>
        </div>
      </div>
    </Container>
  );
};

export default Shop;
