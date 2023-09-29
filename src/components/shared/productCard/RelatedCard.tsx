/* eslint-disable @next/next/no-img-element */
import { CiShop } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export default function RelatedCard() {
  return (
    <div className="w-48 md:w-52 border border-gray-300 shadow-sm cursor-pointer hover:shadow-md rounded-lg">
      <div className="md:h-30 rounded-t h-28">
        <img
        alt="product"
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          className="w-full rounded-t-lg h-full object-cover"
        />
      </div>
      <div className=" p-2 text-sm">
        <div className="flex items-center  justify-between mb-2">
          <p className=" text-black">Apple AirPods</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p className=" text-black">$95.00</p>
          <div className="flex cursor-pointer items-center gap-1">
            <MdOutlineFavoriteBorder className=" text-[#FF5722]" />
            <p className=" text-xs gap-1 flex items-center">
              <span>3.5</span>
              <span>(345)</span>
            </p>
          </div>
        </div>
        <div className="flex text-xs justify-between items-center gap-2">
          <div className=" items-center cursor-pointer hover:underline flex gap-2">
            <CiShop className=" text-[#FF5722]" />
            <p className=" font-ligth">Soes shop</p>
          </div>
        </div>
      </div>
    </div>
  );
}
