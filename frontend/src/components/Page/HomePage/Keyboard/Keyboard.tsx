import ProductCard from "../ProductCard";
import Carasoul from "@/components/Shared/Carasoul/Carasoul";
import keyboardBanner from '@/assest/Banner/keyboardBanner.jpg'
import { TProduct } from "@/types";
const Keyboard = async () => {
  const res = await fetch("http://localhost:8000/api/v1/products", {
    cache: "no-store",
  });
  const products = await res.json();
  const Keyboards = products?.data?.filter(
    (data: TProduct) => data.category === "Keyboard"
  );
  return (
    <div className="w-full mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div
          style={{
            backgroundImage: `url(${keyboardBanner.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-[500px] col-span-full md:col-span-4 p-5 text-white rounded"
        ></div>
        <div className="w-full col-span-full md:col-span-8">
          <div className="pb-5 -mt-2">
            <h1 className="text-3xl font-semibold">Key Board</h1>
          </div>
          <Carasoul>
            {Keyboards.map((product: TProduct) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </Carasoul>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
