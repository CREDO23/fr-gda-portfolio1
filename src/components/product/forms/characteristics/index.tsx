import Button from "@/components/global/button";
import Table, { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import NewCharacteristicForm from "./newCharacteristicForm";

interface DataType {
    key : string;
    title: string;
    description: string | number;
  }
  
  const dataSource = [
    {
      key: "1",
      title: "Mike",
      description: 32,
    },
    {
      key: "2",
      title: "John",
      description: 42,
    },
    {
      key: "3",
      title: "Mike",
      description: 32,
    },
    {
      key: "4",
      title: "John",
      description: 42,
    },
    {
      key: "5",
      title: "Mike",
      description: 32,
    },
    {
      key: "6",
      title: "John",
      description: 42,
    },
    {
      key: "7",
      title: "Mike",
      description: 32,
    },
    {
      key: "8",
      title: "John",
      description: 42,
    },
    {
      key: "9",
      title: "Mike",
      description: 32,
    },
    {
      key: "10",
      title: "John",
      description: 42,
    },
  ];
  
  const columns: ColumnsType<DataType> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Descrition",
      dataIndex: "description",
      key: "description",
    },
  ];

export default function CharacteristicsForm() {
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
          <span>Characteristics</span>
        </h3>
        <span className=" text-lg">
          {collapse ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
      </div>
      <div className="w-full flex flex-col p-2  gap-4">
        <Table bordered scroll={{y : 300}} pagination={false} columns={columns} dataSource={dataSource}/>
        <div className="w-full flex items-center justify-end ">
            <NewCharacteristicForm/>
          <span>
            <Button title="Save" />
          </span>
        </div>
      </div>
    </div>
  );
}
