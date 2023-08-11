"use client"

import ProductDetail from "@/components/product/productDetail";
import ProductInfo from "@/components/product/productInfo";
import RelatedCard from "@/components/design/productCard/RelatedCard";
import Layout from "../../components/layouts";


export default function Index() {
  return (
    <Layout>
      <div className="w-full overflow-hidden no-scrollbar  flex flex-col gap-4 items-center">
        <div className="w-full ">
          <ProductDetail />
        </div>
        <div className="w-full ">
          <ProductInfo />
        </div>
        <div className="w-full px-6 flex flex-col items-center py-6 gap-3">
          <h4 className=" font-medium text-2xl">Others items you might like</h4>
          <div className="w-full py-3  items-center justify-center flex gap-4 flex-wrap ">
            {[...new Array(10)].map((item, key) => (
              <RelatedCard key={key} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
