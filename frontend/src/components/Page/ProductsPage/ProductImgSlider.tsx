"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

// Define the type for the images prop
interface ProductImgSliderProps {
  images: string[];
}

const ProductImgSlider: React.FC<ProductImgSliderProps> = ({ images }) => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={true}
      showStatus={false}
      showIndicators={false}
      stopOnHover={true}
      className="w-full"
      renderThumbs={() =>
        images.map((image, index) => (
          <div key={index} className="w-full h-[50px]  relative rounded">
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))
      }
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="w-full h-[120px] md:h-[350px] relative rounded"
        >
          <Image
            className="absolute top-0 left-0 outline-none cursor-pointer rounded"
            layout="fill"
            src={image}
            alt={`Image ${index + 1}`}
            objectFit="cover"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductImgSlider;
