import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import { TProduct } from "@/types";
import ProductCard from "../ProductCard";
const Popular = async () => {
  const res = await fetch("https://hadiah-theta.vercel.app/api/v1/products", {
    cache: "no-cache",
  });
  const datas = await res.json();
  const popularProducts = datas?.data?.filter(
    (data: TProduct) =>
      data.category !== "Keyboard" &&
      data.category !== "Smartwatch" &&
      data.category !== "Mobile"
  );
  return (
    <div className="w-full mt-16">
      <SectionTitle title="Most popular products" path="/" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-1 gap-y-5">
        {popularProducts?.slice(0, 10)?.map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
