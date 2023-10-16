"use client";
import Link from "next/link";
import ShopsLayout from "./shopsLayout";

import Table, { ColumnsType } from "antd/es/table";
import { BsEye } from "react-icons/bs";
import { PiTrashThin } from "react-icons/pi";

interface DataType {
  key: number;
  id: string;
  shopName: string;
  category: string;
  turnover: number;
  profit: number;
  products : number
  customers: number;
}

const dataSource = [
    {
      id: "Gladiator Milkvetch",
      key: 1,
      shopName: "Skyvu",
      category: "Astragalus xiphoides (Barneby) Barneby",
      turnover: 70373,
      profit: 1480,
      products: 1,
      customers: 1
    },
    {
      id: "Tetraphis Moss",
      key: 2,
      shopName: "Bubblebox",
      category: "Tetraphis geniculata Girg. ex Milde",
      turnover: 80481,
      profit: 7519,
      products: 2,
      customers: 2
    },
    {
      id: "Ovateleaf Cacalia",
      key: 3,
      shopName: "Vinte",
      category: "Arnoglossum ovatum (Walter) H. Rob.",
      turnover: 60316,
      profit: 2977,
      products: 3,
      customers: 3
    },
    {
      id: "Gladiator Milkvetch",
      key: 1,
      shopName: "Skyvu",
      category: "Astragalus xiphoides (Barneby) Barneby",
      turnover: 70373,
      profit: 1480,
      products: 1,
      customers: 1
    },
    {
      id: "Tetraphis Moss",
      key: 2,
      shopName: "Bubblebox",
      category: "Tetraphis geniculata Girg. ex Milde",
      turnover: 80481,
      profit: 7519,
      products: 2,
      customers: 2
    },
  ]

const columns: ColumnsType<DataType> = [
  {
    title: "Shop name",
    dataIndex: "shopName",
    key: "shopName",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Turnover",
    dataIndex: "turnover",
    key: "turnover",
    render: (text) => `${text} [devise]`,
  },
  {
    title: "Profit",
    dataIndex: "profit",
    key: "profit",
    render: (text) => `${text} [devise]`,
  },
  {
    title: "Customers",
    dataIndex: "customers",
    key: "customers",
    render: (text) => `${text} [devise]`,
  },
  {
    title: "Products",
    dataIndex: "products",
    key: "products",
    render: (text) => `${text} pc(s)`,
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <div className=" flex items-center  gap-3">
        <Link
          className="p-1 cursor-pointer border border-blue-500 rounded-lg text-blue-500"
          href={`/seller/dashboard/shops/${record.shopName}`}
        >
          <BsEye />
        </Link>
        <span className="p-1 cursor-pointer border rounded-lg text-red-500 border-red-500">
          <PiTrashThin />
        </span>
      </div>
    ),
  },
];

export default function AllProduct() {
  return (
    <ShopsLayout currentTab="all">
      <div className=" w-full h-full overflow-auto">
      <Table
        bordered
        scroll={{ y: 700 }}
      
        columns={columns}
        dataSource={dataSource}
      />
      </div>
    </ShopsLayout>
  );
}
