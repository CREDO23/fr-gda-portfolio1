"use client";
import AttributesForm from "@/components/product/forms/attributes";
import CharacteristicsForm from "@/components/product/forms/characteristics";
import GalleryForm from "@/components/product/forms/gallery";
import GeneralInfoForm from "@/components/product/forms/generalInfo";
import PriceVariationForm from "@/components/product/forms/priceVariation";
import ShippingInfoForm from "@/components/product/forms/shippingInfo";
import { BsCheck2 } from "react-icons/bs";
import ProductsLayout from "../productsLayout";
import Button from "@/components/global/button";
import { useState } from "react";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const productInfoList = [
    "General Information",
    "Gallery",
    "Categories",
    "Purchase Information",
    "Price variation",
    "Attributes",
    "Characteristics",
    "Shipping INformation",
    "Payment methods",
  ];

  const [productInfoChekedList, setProductInfoChekedList] = useState<string[]>([
    "Categories",
  ]);

  return (
    <ProductsLayout currentTab="productDetails">
      <div className="w-full h-full flex flex-col gap-3">
        <div className="w-full h-16 border flex items-center p-4">
          <h3 className=" text-xl font-bold">{params.id}</h3>
        </div>
        <div className="w-full h-[calc(100%-4rem)] overflow-hidden flex gap-3 ">
          <div className="border h-80 w-64 p-3 shrink-0 rounded-md">
            <ul className="w-full h-full flex  justify-center flex-col gap-2">
              {productInfoList.map((el) => {
                return (
                  <li className=" flex items-center gap-3 font-light" key={el}>
                    <span className=" border text-primary-color border-primary-color/50 h-6 w-6 rounded-full flex items-center justify-center">
                      {productInfoChekedList.includes(el) && <BsCheck2 />}
                    </span>
                    <span>{el}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="border relative h-full overflow-y-scroll gap-4 flex flex-col  rounded-md  grow">
            <div className="sticky p-3 top-0 w-full bg-slate-200 z-10">
              <h2 className="  font-semibold">Product information :</h2>
            </div>
            <div className="w-full gap-6 flex  p-3  flex-col items-center">
              <GeneralInfoForm />
              <GalleryForm />
              <AttributesForm />
              <CharacteristicsForm />
              <PriceVariationForm />
              <ShippingInfoForm />
            </div>
          </div>
          <div className="w-40 shrink-0  flex items-center flex-col gap-3">
            <Button size="large" htmlType="button" block title="Update" />
          </div>
        </div>
      </div>
    </ProductsLayout>
  );
}
