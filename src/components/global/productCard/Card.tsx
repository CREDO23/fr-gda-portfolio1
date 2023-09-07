/* eslint-disable @next/next/no-img-element */

import { CiShop } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export default function Example() {
  const description = `With plenty of talk and listen time, voice-activated Siri access,
  and an available wireless charging case.`;
  return (
    <div className=" w-full shrink-0 cursor-pointer border flex-col gap-3 flex hover:shadow rounded-md">
      <div className="h-44 rounded-md">
        <img
          alt="product"
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          className="w-full rounded-t-md h-full object-cover"
        />
      </div>
      <div className=" px-3 pb-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <p className="font-medium text-black">Apple AirPods</p>
          <h4 className=" font-semibold text-xl">$95.00</h4>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="font-light text-xs md:text-sm opacity-75">
            {description.length > 56
              ? description.substring(0, 56) + " ..."
              : description}
          </p>
          <div className="flex gap-1 flex-col md:flex-row w-full md:items-center justify-between">
            <div className=" cursor-pointer hover:underline flex gap-2">
              <CiShop className=" text-[#FF5722]" />
              <p className="text-sm font-ligth">Soes shop</p>
            </div>
            <div className="flex  order-first md:order-last  gap-1 items-center">
              <div className="flex cursor-pointer items-center gap-1">
                <MdOutlineFavoriteBorder className=" text-[#FF5722]" />
              </div>
              <p className=" font-light text-sm">3.4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
