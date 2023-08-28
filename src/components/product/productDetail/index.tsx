import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { AiOutlineShop } from "react-icons/ai";
import { useState } from "react";
import Button from "@/components/global/button";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Gallery from "./Gallery";
import Choices from "./Choices";
import { Popover, Rate } from "antd";
import { choices } from "../../../data/choices";
import PurchaseInfo from "./PurchaseInfo";
import { galleryData } from "../../../data/gallery";
import { shipCosts } from "../../../data/shippingCost";
import { paymentMethods } from "../../../data/paymentsMethods";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [rate, setRate] = useState(0);

  const handleOpenRate = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <div className=" md:px-5 py-5 flex-wrap overflow-y-hidden flex-col md:flex-row gap-6 flex justify-center">
      <Gallery
        gallery={galleryData?.gallery}
        productUrl={galleryData?.productUrl}
        rateData={galleryData?.rateData}
      />
      <div className="w-[28rem] flex flex-col gap-5 px-3">
        <div className=" flex flex-col  gap-3 ">
          <div className="flex flex-col gap-4">
            <div className="flex self-end items-center gap-8">
              <div className="flex items-center justify-between">
                <div className=" flex gap-3">
                  <div className="flex cursor-pointer items-center gap-1">
                    <FiShare2 className=" font-bold text-xl text-[#FF5722]" />
                    <p className=" font-light text-sm">Share</p>
                  </div>
                  <Popover
                    content={
                      <span>
                        <Rate onChange={setRate} value={rate} />
                      </span>
                    }
                    trigger={["click", "focus", "hover"]}
                    open={open}
                    placement="leftBottom"
                    onOpenChange={handleOpenRate}
                  >
                    <div className="flex cursor-pointer items-center gap-1">
                      <MdOutlineFavoriteBorder className=" text-xl text-[#FF5722]" />
                    </div>
                  </Popover>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-3xl">Jordan 4</h4>
              </div>
              <div className=" cursor-pointer flex items-end gap-2">
                <AiOutlineShop className=" text-[#FF5722]" />
                <p className="text-sm text-gray-600 font-ligth">by Soes shop</p>
              </div>
            </div>
            <p className=" font-light w-11/12">
              With plenty of talk and listen time, voice-activated Siri access,
              and an available wireless charging case.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex items-center gap-3 ">
            <h3 className=" text-2xl">$45,6 - 30.12$</h3>
          </div>
        </div>
        <Choices data={choices} />
        <div className="flex flex-col gap-2">
          <p className="font-light">Quantity </p>
          <div className="flex rounded items-center w-[10.5rem]">
            <span
              onClick={() => {
                if (quantity > 1) setQuantity(quantity - 1);
              }}
              className="h-8 w-14 hover:bg-opacity-30 cursor-pointer rounded-l bg-[#FF6026] bg-opacity-10 flex items-center justify-center "
            >
              -
            </span>
            <span className="h-8 w-14 flex items-center justify-center border-[#FF6026] border-opacity-10  border">
              {quantity}
            </span>
            <span
              onClick={() => setQuantity(quantity + 1)}
              className="h-8 w-14 cursor-pointer hover:bg-opacity-30 rounded-r bg-[#FF6026] bg-opacity-10 flex items-center justify-center "
            >
              +
            </span>
          </div>
        </div>

        <div className=" flex items-center gap-3">
          <div className="w-1/2">
            <Button
              type="primary"
              block
              icon={<HiOutlineShoppingCart className=" text-lg" />}
              title="ADD TO CARD"
            />
          </div>
          <div className="w-1/2">
            <Button block title="CHECK OUT" />
          </div>
        </div>
      </div>
      <PurchaseInfo
        othersInfo={{
          minOrder: 20,
          deliveryTime: "3 weeks",
          deliveryZone: "Kinshasa",
          refunds: "Not Eligible",
          availability: true,
        }}
        setQuantity={setQuantity}
        paymentMethods={paymentMethods}
        shipCosts={shipCosts}
      />
    </div>
  );
}
