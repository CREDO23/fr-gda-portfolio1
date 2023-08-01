import Image from "next/image";
import hero from "../../../public/hero-img.png"

export default function Hero() {
  return (
    <div className="w-full pt-10 md:pt-4  md:justify-between flex-col md:flex-row flex items-center bg-opacity-40 bg-gradient-to-b from-white via-deep-orange-50 to-white  h-[calc(100%-27rem)] md:h-[27rem]">
      <div className=" w-full md:w-7/12 h-full flex items-center justify-center md:order-last  ">
        <div className=" ">
          <Image alt="hero-img" src={hero} />
        </div>
      </div>
      <div className="flex   text-center   h-full md:p-10 gap-3 items-center md:justify-center flex-col  w-full md:w-5/12">
        <p className=" md:text-left  w-80 text-xs font-extralight">
          Asolutely hot collections 💯
        </p>
        <h3 className=" text-3xl font-semibold w-96  md:w-80 md:text-left  ">
          The best Place To Find And Buy Amazing{" "}
          <span className=" font-bold text-green-600">Product</span>
        </h3>
      </div>
    </div>
  );
}
