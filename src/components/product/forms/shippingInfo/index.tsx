import Button from "@/components/global/button";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Zones from "./zones";
import ShippingPriceVariation from "./shippingPriceVariation";

export default function ShippingInfoForm() {
  const [collapse, setCollapse] = useState(false);
  const [colorChecked, setColorChecked] = useState(false);

  return (
    <div
      className={` overflow-hidden rounded-md border border-slate-400/80 transition-all w-full ${
        collapse ? "h-10" : "h-auto"
      } `}
    >
      <div
        onClick={() => setCollapse(!collapse)}
        className="w-full cursor-pointer   border-b h-10 px-2 flex items-center justify-between"
      >
        <h3 className=" font-medium flex items-center gap-4">
          <span className="h-4 w-4 border border-primary-color rounded-full bg-primary-color/80"></span>
          <span>Shipping information</span>
        </h3>
        <span className=" text-lg">
          {collapse ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
      </div>
      <div className="w-full flex flex-col p-2  gap-4">

        <div className={`w-full ${colorChecked ? ' hidden' : 'flex'}  flex-col p-2 rounded gap-2 border`}>
          <div className="w-full flex items-center h-6 justify-between">
            <h4>Zones :</h4>
          </div>

          <div className="flex flex-col  gap-2">
            <Zones />
          </div>
        </div>
        <div className={`w-full ${colorChecked ? ' hidden' : 'flex'}  flex-col p-2 rounded gap-2 border`}>
          <div className="w-full flex items-center h-6 justify-between">
            <h4>Shipping price variation :</h4>
          </div>

          <div className="flex flex-col  gap-2">
            <ShippingPriceVariation/>
          </div>
        </div>
        <div className="w-full flex items-center justify-end ">
          <span>
            <Button title="Save" />
          </span>
        </div>
      </div>
    </div>
  );
}
