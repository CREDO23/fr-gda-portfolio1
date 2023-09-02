"use client";

import { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import ProductsLayout from "../productsLayout";
import Button from "@/components/global/button";
import GeneralInfoForm from "@/components/product/forms/generalInfo";
import GalleryForm from "@/components/product/forms/gallery";

export default function NewProduct() {
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
    <ProductsLayout currentTab="new">
      <div className="w-full h-full flex gap-3 ">
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
        <div className="border rounded-md  grow p-3">
          <div className="w-full flex flex-col gap-3">
            <h2 className=" font-semibold">Product information :</h2>

            <div className="w-full gap-3 flex flex-col items-center">
            <GeneralInfoForm/>
          <GalleryForm/>
            </div>
          </div>
            
        </div>
        <div className="w-64  flex items-center flex-col gap-3">
          <Button htmlType="button"  block title="Publish" />
          <Button  htmlType="button"  ghost  block title="Save as draft" />
        </div>
      </div>
    </ProductsLayout>
  );
}
