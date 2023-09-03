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
      id: "Maui Nehe",
      key: 4,
      shopName: "Twimm",
      category: "Lipochaeta kamolensis O. Deg. & Sherff",
      turnover: 1642,
      profit: 2425,
      products: 4,
      customers: 4
    },
    {
      id: "Chinese Rhubarb",
      key: 5,
      shopName: "Devcast",
      category: "Rheum palmatum L.",
      turnover: 37689,
      profit: 1877,
      products: 5,
      customers: 5
    },
    {
      id: "Schreber's Aster",
      key: 6,
      shopName: "Tagpad",
      category: "Eurybia schreberi (Nees) Nees",
      turnover: 13228,
      profit: 1516,
      products: 6,
      customers: 6
    },
    {
      id: "Vente Conmigo",
      key: 7,
      shopName: "Gabtune",
      category: "Croton glandulosus L.",
      turnover: 10420,
      profit: 7529,
      products: 7,
      customers: 7
    },
    {
      id: "Mendocino Spineflower",
      key: 8,
      shopName: "Skajo",
      category: "Chorizanthe howellii Goodman",
      turnover: 47698,
      profit: 6517,
      products: 8,
      customers: 8
    },
    {
      id: "Rhubarb",
      key: 9,
      shopName: "Vipe",
      category: "Rheum L.",
      turnover: 24290,
      profit: 9704,
      products: 9,
      customers: 9
    },
    {
      id: "Giantdaisy",
      key: 10,
      shopName: "Voomm",
      category: "Leucanthemella serotina (L.) Tzvelev",
      turnover: 68032,
      profit: 5778,
      products: 10,
      customers: 10
    }
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
          href={`/seller/dashboard/products/${record.shopName}`}
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
      <Table
        bordered
        scroll={{ y: 700 }}
        pagination={false}
        columns={columns}
        dataSource={dataSource}
      />
    </ShopsLayout>
  );
}
