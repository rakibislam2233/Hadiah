import ProductAllInfo from "@/components/Page/ProductsPage/ProductAllInfo";
import ProductImgSlider from "@/components/Page/ProductsPage/ProductImgSlider";
import RelatedProducts from "@/components/Page/ProductsPage/RelatedProducts";
import SingleProductDetails from "@/components/Page/ProductsPage/SingleProductDetails";
import Container from "@/components/Shared/Container/Container";
import dynamic from "next/dynamic";
const Breadcrumb = dynamic(() => import("@/components/Shared/Breadcrumb"), {
  ssr: false,
});
const ProductDetails = async ({ params }: { params: any }) => {
  const productId = params.productId[0].slice(6);
  const res = await fetch(
    `https://hadiah-theta.vercel.app/api/v1/products/${productId}`,
    {
      cache: "no-store",
    }
  );
  const { data: product } = await res.json();

  const currentPath = `/products/${product?.title}`;
  return (
    <>
      <Container className="p-3 space-y-2">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="bg-white col-span-full md:col-span-9 p-3">
            <Breadcrumb path={currentPath} />
          </div>
          <div className="bg-white col-span-full md:col-span-3 p-3">
            <h1>Related Products</h1>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-3 ">
          <div className="col-span-full md:col-span-9  grid grid-cols-1 md:grid-cols-2 bg-white p-3 gap-5">
            <ProductImgSlider images={product.images} />
            <SingleProductDetails product={product} />
          </div>
          <div className="col-span-full md:col-span-3 ">
            <RelatedProducts />
          </div>
        </div>
        <ProductAllInfo product={product} />
      </Container>
    </>
  );
};

export default ProductDetails;
