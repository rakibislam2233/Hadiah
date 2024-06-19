import Carasoul from "@/components/Shared/Carasoul/Carasoul";
import SectionTitle from "@/components/Shared/SectionTitle/SectionTitle";
import Image from "next/image";
import Link from "next/link";

export type TBrand = {
  brand: string;
  image: string;
};
const brands = [
  {
    brand: "Apple",
    image: "https://i.ibb.co/SnTpSY3/apple-2.png",
  },
  {
    brand: "Asus",
    image: "https://i.ibb.co/cbX0jnN/asus.png",
  },
  {
    brand: "Canon",
    image: "https://i.ibb.co/7jxZz8q/canon.png",
  },
  {
    brand: "Dell",
    image: "https://i.ibb.co/10QqfGk/dell.png",
  },
  {
    brand: "Intel",
    image: "https://i.ibb.co/PjMdT4q/intel-1.png",
  },
  {
    brand: "JBL",
    image: "https://i.ibb.co/LNDXn8r/jbl.png",
  },
  {
    brand: "Lenovo",
    image: "https://i.ibb.co/KrZYMhJ/lenovo.png",
  },
  {
    brand: "Oppo",
    image: "https://i.ibb.co/R7V4Lxr/oppo.png",
  },
  {
    brand: "Panasonic",
    image: "https://i.ibb.co/0QpR2Lc/panasonic.png",
  },
  {
    brand: "Samsung",
    image: "https://i.ibb.co/4jYqfTM/samsung.png",
  },
  {
    brand: "Sanyo",
    image: "https://i.ibb.co/86JWn1R/sanyo-1.png",
  },
  {
    brand: "Sony",
    image: "https://i.ibb.co/qWG3Y2G/sony-1.png",
  },
];

const OurBrand = () => {
  return (
    <div className="w-full mt-16">
      <SectionTitle title="Our Brand" />
      <Carasoul slide={2} smSlide={3} mdSlide={4} lgSlide={8}>
        {brands.map((brand: TBrand) => (
          <div key={brand.brand} className="mt-3">
            <Link href={'/'}>
              <Image
                className="opacity-50 hover:opacity-100 transition-all duration-300"
                width={90}
                height={90}
                src={brand.image}
                alt={brand.brand}
              />
            </Link>
          </div>
        ))}
      </Carasoul>
    </div>
  );
};

export default OurBrand;
