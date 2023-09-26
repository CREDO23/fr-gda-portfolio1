"use client";

import Input from "@/components/shared/input";
import Select from "@/components/shared/select";
import { Controller, useForm } from "react-hook-form";
import UploadImage from "../../../shared/image/imageUpload";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import Button from "@/components/shared/button";

export default function GeneralInfoForm() {
  const { handleSubmit, control } = useForm();

  const [collapse, setCollapse] = useState(false);

  return (
    <div
      className={` overflow-hidden rounded-md border border-slate-400/80 transition-all w-full ${
        collapse ? "h-10" : "h-auto"
      } `}
    >
      <div
        onClick={() => setCollapse(!collapse)}
        className="w-full cursor-pointer  border-b h-10 px-2 flex items-center justify-between"
      >
        <h3 className=" font-medium flex items-center gap-4">
          <span className="h-4 w-4 rounded-full border bg-primary-color border-primary-color"></span>{" "}
          <span>General Information</span>
        </h3>
        <span className=" text-lg">
          {collapse ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
      </div>
      <form className=" w-full" action="">
        <div className="flex p-2 w-full flex-col flex-wrap  gap-4">
          <div className="w-full  gap-4 flex flex-wrap">
            <div className="w-80 shrink-0">
              <Controller
                name="productTitle"
                control={control}
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
                  <Input
                    label={<p className=" text-sm">Product title</p>}
                    placeholder="Enter the product title"
                    type="text"
                    refEl={ref}
                    {...field}
                    error={error?.message}
                  />
                )}
              />
            </div>
            <div className="w-80 shrink-0">
              <Controller
                name="productCategory"
                control={control}
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
                  <Select
                    label={<p className=" text-sm">Category</p>}
                    placeholder="Select a category"
                    options={[{ label: "credo", value: 34 }]}
                  />
                )}
              />
            </div>
            <div className="w-80 shrink-0">
              <Controller
                name="productShop"
                control={control}
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
                  <Select
                    label={<p className=" text-sm">Shop</p>}
                    placeholder="Select a shop"
                    options={[{ label: "credo", value: 34 }]}
                  />
                )}
              />
            </div>
            <div className="w-80 shrink-0">
              <Controller
                name="productDescription"
                control={control}
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
                  <Input
                    label={<p className=" text-sm">Product description</p>}
                    placeholder="Describe the product"
                    type="textarea"
                    refEl={ref}
                    {...field}
                    error={error?.message}
                  />
                )}
              />
            </div>
          </div>
          <div className="w-full items-center gap-4 flex flex-wrap">
          <div className="w-40 shrink-0 ">
              <Controller
                name="stock"
                control={control}
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
                  <Input
                    label={<p className=" text-sm">Stock</p>}
                    placeholder="Enter the number of product in stock"
                    addonAfter={<span>pc(s)</span>}
                    type="text"
                    refEl={ref}
                    {...field}
                    error={error?.message}
                  />
                )}
              />
            </div>
          <div className="w-40 shrink-0 ">
              <Controller
                name="minOrder"
                control={control}
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
                  <Input
                    label={<p className=" text-sm">Minimum order</p>}
                    placeholder="Enter the minimum order"
                    addonAfter={<span>pc(s)</span>}
                    type="text"
                    refEl={ref}
                    {...field}
                    error={error?.message}
                  />
                )}
              />
            </div>
            <div className="w-40 shrink-0 ">
              <Controller
                name="price"
                control={control}
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
                  <Input
                    label={<p className=" text-sm">Price</p>}
                    placeholder="Enter the price"
                    type="text"
                    refEl={ref}
                    {...field}
                    error={error?.message}
                  />
                )}
              />
            </div>

            <div className="w-40 shrink-0 ">
              <Controller
                name="devise"
                control={control}
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
                  <Select
                    label={<p className=" text-sm">Devise</p>}
                    placeholder="Select the devise"
                    defaultValue={"USD"}
                    options={[
                      { label: "USD", value: "USD" },
                      { label: "EUR", value: "EUR" },
                    ]}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="flex flex-col gap-1">
              <span className=" text-sm">Product image</span>
              <UploadImage quantity={1} />
            </div>
          </div>
        </div>
        <div className="w-full border-t p-2 flex items-center justify-end">
          <Button title="Save" />
        </div>
      </form>
    </div>
  );
}
