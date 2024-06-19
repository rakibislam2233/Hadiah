"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TCarasoul } from "@/types";
const Carasoul = ({
  children,
  slide,
  smSlide,
  mdSlide,
  lgSlide,
}: TCarasoul) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: lgSlide ? lgSlide : 3,
    slidesToScroll: lgSlide ? 3 : 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: lgSlide ? lgSlide : 3,
          slidesToScroll: lgSlide ? 3 : 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: mdSlide ? mdSlide : 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: smSlide ? smSlide : 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: slide ? slide : 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default Carasoul;
