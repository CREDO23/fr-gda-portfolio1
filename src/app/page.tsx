"use client";

import { useState } from "react";
import Layout from "@/components/layouts";
import Hero from "@/components/home/hero";
import Input from "@/components/global/input";
import Product from "@/components/global/productCard/Card";
import { Select } from "antd";
import Link from "next/link";

export default function Index() {
  const [searchOption, setSearchoption] = useState("Products");


  const { Option } = Select;

  const selectOption = (
    <Select
      onChange={(e) => setSearchoption(e)}
      size="large"
      defaultValue="Products"
      value={searchOption}
      className="h-full w-28"
    >
      <Option value="Products">Products</Option>
      <Option value="Shops">Shops</Option>
    </Select>
  );

  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center">
        <Hero />
        <div className="w-full my-3">
          <div className="w-full my-8 z-20 flex items-center sticky top-[3rem]  bg-white flex-col">
            <div className="w-full md:w-5/12 px-3">
              <Input
                addonBefore={selectOption}
                type="search"
                size="large"
                placeholder="Search here..."
              />
            </div>
          </div>
          <div className="w-full flex gap-2  justify-center flex-wrap ">
            {[...new Array(10)].map((_item, key) => (
              <Link href={"/product"} key={key}>
                <Product />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
