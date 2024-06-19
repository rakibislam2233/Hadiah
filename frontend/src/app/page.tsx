import Categories from "@/components/Page/HomePage/Categories/Categories";
import HeroSection from "@/components/Page/HomePage/HeroSection/HeroSection";
import OurBrand from "@/components/Page/HomePage/OurBrand/OurBrand";
import SmartWatch from "@/components/Page/HomePage/SmartWatch/SmartWatch";
import HeadPhoneBanner from "@/components/Page/HomePage/HeadPhoneBanner/HeadPhoneBanner";
import ElectricTrimmer from "@/components/Page/HomePage/ElectricTrimmer/ElectricTrimmer";
import Popular from "@/components/Page/HomePage/Popular/Popular";
import Keyboard from "@/components/Page/HomePage/Keyboard/Keyboard";
import FlashSale from "@/components/Page/HomePage/FlashSale/FlashSale";

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <div className="w-full max-w-7xl mx-auto px-3">
        <Categories />
        <FlashSale />
        <OurBrand />
        <SmartWatch />
        <Keyboard />
        <HeadPhoneBanner />
        <ElectricTrimmer />
        <Popular />
      </div>
    </>
  );
};

export default MainPage;
