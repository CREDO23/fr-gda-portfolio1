import Button from "@/components/global/button";
import Table, { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import NewPriceForm from "./newPriceForm";

interface DataType {
    key : string;
    min: string;
    max: string | number;
    price : number
  }
  
  const dataSource = [
    {
      key: "1",
      min: "Mike",
      max: 32,
      price : 23
    },
    {
      key: "2",
      min: "John",
      max: 42,
      price : 23
    },
    {
      key: "3",
      min: "Mike",
      max: 32,
      price : 23
    },
    {
      key: "4",
      min: "John",
      max: 42,
      price : 23
    },
    {
      key: "5",
      min: "Mike",
      max: 32,
      price : 23
    },
    {
      key: "6",
      min: "John",
      max: 42,
      price : 23
    },
    {
      key: "7",
      min: "Mike",
      max: 32,
      price : 23
    },
    {
      key: "8",
      min: "John",
      max: 42,
      price : 23
    },
    {
      key: "9",
      min: "Mike",
      max: 32,
      price : 23
    },
    {
      key: "10",
      min: "John",
      max: 42,
      price : 23
    },
  ];
  
  const columns: ColumnsType<DataType> = [
    {
      title: "Min. Qtty",
      dataIndex: "min",
      key: "min",
    },
    {
      title: "Max. Qtty",
      dataIndex: "max",
      key: "max",
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
    },
  ];

export default function PriceVariationForm() {
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
          <span className="h-4 w-4 border border-primary-color rounded-full bg-primary-color/80"></span>{" "}
          <span>Price variation</span>
        </h3>
        <span className=" text-lg">
          {collapse ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
      </div>
      <div className="w-full flex flex-col p-2  gap-4">
        <Table bordered scroll={{y : 300}} pagination={false} columns={columns} dataSource={dataSource}/>
        <div className="w-full flex items-center justify-end ">
            <NewPriceForm/>
          <span>
            <Button title="Save" />
          </span>
        </div>
      </div>
    </div>
  );
}
