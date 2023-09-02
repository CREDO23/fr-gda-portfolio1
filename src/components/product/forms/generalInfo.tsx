"use client";

import Input from "@/components/global/input";
import Select from "@/components/global/select";
import { Controller, useForm } from "react-hook-form";
import UploadImage from "./imageUpload";
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import { useState } from "react";

export default function GeneralInfo() {
  const { handleSubmit, control } = useForm();

  const [collapse, setCollapse] = useState(false);

  return (
    <div className={` overflow-hidden rounded-md border transition-all w-full ${collapse ? 'h-10' : 'h-auto'} `}>
      <div onClick={() => setCollapse(!collapse)} className="w-full cursor-pointer  border-b h-10 px-2 flex items-center justify-between">
        <h3 className=" font-semibold">1. General Information</h3>  <span  className=" text-lg">{
          collapse ? <IoIosArrowDown/> : <IoIosArrowUp/>
        }</span>
      </div>
      <form className="p-2" action="">
        <div className="flex flex-wrap  gap-4">
          <div className="w-80 shrink-0">
            <Controller
              name="productTitle"
              control={control}
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
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
              name="productTitle"
              control={control}
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
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
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
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
          <div className="flex flex-col gap-1">
            <span className=" text-sm">Product image</span>
            <UploadImage/>
          </div>
        </div>
      </form>
    </div>
  );
}
