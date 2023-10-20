"use client";

import { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import ShopsLayout from "../shopsLayout";
import Button from "@/components/shared/button";
import GeneralInfoForm from "@/components/shop/forms/generalInfo";
import GalleryForm from "@/components/shop/forms/gallery";
import PaymentMethodsForm from "@/components/shop/forms/paymentMethods";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { Switch } from "antd";

export default function NewShop() {
  const productInfoList = ["General Information", "Gallery", "Payment methods"];

  const [shopInfoChekedList, setShopInfoChekedList] = useState<string[]>([
    "Gallery",
  ]);

  const [published,setPublished] = useState(false)

  return (
    <ShopsLayout currentTab="new">
      <div className="w-full h-full overflow-hidden flex gap-3 ">
        <div className="border h-32 w-64 p-3 shrink-0 rounded-md">
          <ul className="w-full h-full flex  justify-center flex-col gap-2">
            {productInfoList.map((el) => {
              return (
                <li className=" flex items-center gap-3 font-light" key={`${el}-shop`}>
                  <span className=" border text-primary-color border-primary-color/50 h-6 w-6 rounded-full flex items-center justify-center">
                    {shopInfoChekedList.includes(el) && <BsCheck2 />}
                  </span>
                  <span>{el}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="border relative h-full overflow-y-scroll gap-4 flex flex-col  rounded-md  grow">
          <div className="sticky p-3 top-0 w-full bg-slate-200 z-10">
            <h2 className="  font-semibold">Shop information :</h2>
          </div>

          <div className="w-full gap-6 flex  p-3  flex-col items-center">
            <GeneralInfoForm />
            <GalleryForm/>
            <PaymentMethodsForm/>
          </div>
        </div>
        <div className="w-40 shrink-0  flex items-center flex-col gap-3">
          <Button  htmlType="button" block title="Create" />
          <div className="w-full flex items-center justify-between gap-6">
            <span>Published</span> <Switch
              style={{ backgroundColor: published ?  "#E2E8F0" : "#FF5722" }}
              checkedChildren={<CloseOutlined />}
              unCheckedChildren={<CheckOutlined />}
              defaultChecked
              checked={published}
              onChange={(e) => setPublished(e)}
            />
        </div>
      </div>
      </div>
    </ShopsLayout>
  );
}
