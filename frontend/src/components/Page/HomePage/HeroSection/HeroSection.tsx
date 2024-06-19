"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const HeroSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="relative w-full h-[calc(100vh-128px)]">
        <Image
          src="https://i.ibb.co/yQrGLpp/banner3.jpg"
          alt="Banner 1"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="relative w-full h-[calc(100vh-128px)]">
        <Image
          src="https://i.ibb.co/C51yyz8/banner1.webp"
          alt="Banner 1"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="relative w-full h-[calc(100vh-128px)]">
        <Image
          src="https://i.ibb.co/nz5KTT7/banner2.webp"
          alt="Banner 1"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </Slider>
  );
};

export default HeroSection;
