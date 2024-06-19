"use client";
import { formatCategoryName } from "@/constant";
import { TParams, TProduct } from "@/types";
import Container from "@/components/Shared/Container/Container";
import dynamic from "next/dynamic";
import { useSearchParams, useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBarsProgress } from "react-icons/fa6";
import { PiSquaresFourBold } from "react-icons/pi";
import ProductCard from "@/components/Page/HomePage/ProductCard";
const Breadcrumb = dynamic(() => import("@/components/Shared/Breadcrumb"), {
  ssr: false,
});

const priceFilters = [
  { label: "$500 & Under", min: 0, max: 500 },
  { label: "$500 - $999", min: 500, max: 999 },
  { label: "$1,000 - $1,999", min: 1000, max: 1999 },
  { label: "$2,000 - $5,000", min: 2000, max: 5000 },
  { label: "$5,000 & Over", min: 5000, max: Infinity },
];

const DynamicPage: React.FC = () => {
  const params = useParams() as unknown as TParams;
  const searchParams = useSearchParams();
  const router = useRouter();
  const { category } = params;
  const brand = searchParams.get("brand");
  const sort = searchParams.get("sort");
  const minPrice = searchParams.get("min_price");
  const maxPrice = searchParams.get("max_price");

  const [allProducts, setAllProducts] = useState<TProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);
  const [availableBrands, setAvailableBrands] = useState<string[]>([]);


  useEffect(() => {
    let filtered = allProducts;
    if (category) {
      filtered = filtered.filter(
        (product: TProduct) =>
          product.category.toLowerCase() === category.toLowerCase()
      );
    }

    const brands = Array.from(
      new Set(filtered.map((product) => product.brand))
    );
    setAvailableBrands(brands);

    if (brand) {
      filtered = filtered.filter(
        (product) => product.brand.toLowerCase() === brand.toLowerCase()
      );
    }

    if (minPrice || maxPrice) {
      const min = minPrice ? parseFloat(minPrice) : 0;
      const max = maxPrice ? parseFloat(maxPrice) : Infinity;
      filtered = filtered.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    if (sort) {
      filtered = filtered.sort((a, b) => {
        if (sort === "price-asc") {
          return a.price - b.price;
        } else if (sort === "price-desc") {
          return b.price - a.price;
        }
        return 0;
      });
    }

    setFilteredProducts(filtered);
  }, [category, allProducts, brand, sort, minPrice, maxPrice]);

  const handleBrandClick = (selectedBrand: string) => {
    const currentQuery = new URLSearchParams(searchParams.toString());
    if (selectedBrand) {
      currentQuery.set("brand", selectedBrand);
    } else {
      currentQuery.delete("brand");
    }

    router.push(`/shop/${category}?${currentQuery.toString()}`);
  };

  const handlePriceFilterClick = (min: number, max: number) => {
    const currentQuery = new URLSearchParams(searchParams.toString());
    currentQuery.set("min_price", min.toString());
    if (max !== Infinity) {
      currentQuery.set("max_price", max.toString());
    } else {
      currentQuery.delete("max_price");
    }

    router.push(`/shop/${category}?${currentQuery.toString()}`);
  };

  const handleClearFilters = () => {
    router.push(`/shop/${category}`);
  };

  const currentPath = `/shop/${formatCategoryName(category)}`;

  return (
    <>
      <div className="bg-white py-4">
        <div className="w-full max-w-7xl mx-auto px-3">
          <Breadcrumb path={currentPath} />
        </div>
      </div>
      <Container>
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="col-span-full md:col-span-2 sticky top-0 left-0 h-full min-h-screen">
            <h1 className="text-2xl py-5 uppercase font-semibold">
              {formatCategoryName(category)}
            </h1>
            <div>
              <h1 className="text-xl font-semibold mb-2">Price</h1>
              <div className="space-y-2">
                {priceFilters.map(({ label, min, max }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => handlePriceFilterClick(min, max)}
                  >
                    <div
                      className={`size-5 rounded-full border border-gray-500 flex justify-center items-center `}
                    >
                      <h1
                        className={`size-2.5 rounded-full ${
                          minPrice == min.toString() &&
                          (maxPrice == max.toString() ||
                            (max === Infinity && !maxPrice))
                            ? "bg-[#105CAA]"
                            : "bg-transparent"
                        }`}
                      ></h1>
                    </div>
                    <span className="text-lg">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <hr className="my-3" />
            <div>
              <h1 className="text-xl font-semibold mb-2">Brands</h1>
              <div className="space-y-2">
                {availableBrands.map((brandName, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => handleBrandClick(brandName.toLowerCase())}
                  >
                    <div
                      className={`size-5 rounded-full border border-gray-500 flex justify-center items-center `}
                    >
                      <h1
                        className={`size-2.5 rounded-full ${
                          brand === brandName.toLowerCase()
                            ? "bg-[#105CAA]"
                            : "bg-transparent"
                        }`}
                      ></h1>
                    </div>
                    <span className="text-lg">{brandName}</span>
                  </div>
                ))}
              </div>
            </div>
            <hr className="my-3" />
            <div className="flex justify-end">
              <button
                className="px-6 py-1.5 bg-gradient-to-t bg-[#17273B] from-[#105CAA] text-white rounded hover:bg-gradient-to-t hover:bg-[#105CAA] hover:from-[#193558] transition-all duration-500"
                onClick={handleClearFilters}
              >
                Clear All
              </button>
            </div>
          </div>
          <div className="w-full col-span-full md:col-span-10">
            <div className="py-5 flex justify-end items-center gap-3">
              <button>
                <FaBarsProgress className="size-6 text-gray-900" />
              </button>
              <button>
                <PiSquaresFourBold className="size-7 text-gray-900" />
              </button>
              <button className="px-5 py-1.5 border">Sort By</button>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-5">
              {filteredProducts?.map((product: TProduct) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DynamicPage;
