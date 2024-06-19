import headPhoneBanner from "@/assest/Banner/banner-17.jpg";
const HeadPhoneBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${headPhoneBanner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full mt-16 h-[500px] col-span-full md:col-span-4 p-5 text-white rounded"
    ></div>
  );
};

export default HeadPhoneBanner;
