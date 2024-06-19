import { TProduct } from "@/types";
import ProductCard from "../HomePage/ProductCard";
import styles from "./RelatedProduct.module.css";
const RelatedProducts = async () => {
  const res = await fetch("https://hadiah-theta.vercel.app/api/v1/products", {
    cache: "no-store",
  });
  const products = await res.json();
  return (
    <div
      className={`w-full h-[calc(100vh-130px)] overflow-y-scroll ${styles.hideScrollbar}`}
    >
      <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
        {products.data.slice(0, 10).map((product: TProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
