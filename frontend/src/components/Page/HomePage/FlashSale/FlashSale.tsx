import ProductCard from "../ProductCard";
import flashSaleImage from "@/assest/Banner/flashsale.jpg";
import Carasoul from "@/components/Shared/Carasoul/Carasoul";
import { TProduct } from "@/types";

const FlashSale = async () => {
  const res = await fetch("http://localhost:8000/api/v1/products", {
    cache: "no-store",
  });
  const flashSaleProduct = await res.json();

  return (
    <div className="w-full mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div
          style={{
            backgroundImage: `url(${flashSaleImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-[500px] col-span-full md:col-span-4 p-5 text-white rounded"
        >
          <div className="space-y-3">
            <h1 className="text-lg font-semibold">BEST DEALS THIS WEEK</h1>
            <p className="text-5xl font-semibold">50% OFF</p>
            <p>Deal of the Week for deals on consumer electronics.</p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-[#105CAA] text-center rounded-xl">
                <h1 className="text-2xl font-semibold">11</h1>
                <p>Hours</p>
              </div>
              <div className="px-4 py-2 bg-[#105CAA] text-center rounded-xl">
                <h1 className="text-2xl font-semibold">11</h1>
                <p>Hours</p>
              </div>
              <div className="px-4 py-2 bg-[#105CAA] text-center rounded-xl">
                <h1 className="text-2xl font-semibold">11</h1>
                <p>Hours</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full col-span-full md:col-span-8">
        <div className="pb-5 -mt-2">
            <h1 className="text-3xl font-semibold">Flash Sale</h1>
          </div>
          <Carasoul>
            {flashSaleProduct.data.map((product: TProduct) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </Carasoul>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
