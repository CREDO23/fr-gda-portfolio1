"use client"

import { useState } from "react";
import Layout from "@/components/layouts";
import Hero from "@/components/home/hero";
import Input from "@/components/design/input";
import Product from "@/components/design/productCard/Card"

export default function Index() {
  const [searchOption, setSearchoption] = useState(0);

  const options = ["Products", "Shops"];

  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center">
        <Hero />
        <div className="w-full my-3">
          <div className="w-full my-8 flex items-center flex-col">
            <ul className="flex cursor-pointer items-center justify-center gap-3">
              {options.map((option, key) => (
                <li
                  key={key}
                  onClick={() => setSearchoption(key)}
                  className={`${
                    searchOption == key
                      ? "text-deep-orange-400 font-medium"
                      : " font-light"
                  } `}
                >
                  {option}
                </li>
              ))}
            </ul>
            <div className="w-full md:w-5/12 px-3">
              <Input
                type="search"
                size="large"
                placeholder="What do you need ?"
              />
            </div>
          </div>
          <div className="w-full flex gap-2  justify-center flex-wrap ">
            {[...new Array(10)].map((_item, key) => (
              <Product key={key} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
