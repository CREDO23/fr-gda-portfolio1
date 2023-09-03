import { Modal, Table } from "antd";
import Input from "@/components/global/input";
import Button from "@/components/global/button";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "@/components/global/select";

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
  


export default function ShippingPriceVariation() {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const { handleSubmit, control } = useForm();
  const [modal, openModal] = useState(false);

  const showModal = () => {
    openModal(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      openModal(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    openModal(false);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Min. weight",
      dataIndex: "min",
      key: "min",
      render : (text) => `${text} kg`
    },
    {
      title: "Max. weight",
      dataIndex: "max",
      key: "max",
  render : (text) => `${text} kg`
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
        render: (text) => `${text} [devise]`
    },
  ];

  return (
    <div className="w-full flex flex-col gap-5">
      <Table
        scroll={{ y: 200 }}
        pagination={false}
        bordered
        columns={columns}
        dataSource={dataSource}
      />
      <span>
        <Button
          onClick={() => openModal(true)}
          size="small"
          type="default"
          title="+ New price"
        />
      </span>
      <Modal
        centered
        title="New price"
        open={modal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={
          <div className="w-full h-full  items-center flex justify-end">
            <Button size="small" title="Ok" />
          </div>
        }
      >
        <form className="w-full h-full flex-col flex gap-2 ">
        <div className="w-full items-center gap-2 flex flex-wrap">
            <div className="w-52 shrink-0 ">
              <Controller
                name="min"
                control={control}
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
                  <Input
                    label={<p className=" text-sm">Minimum weight</p>}
                    addonAfter={<span>kg</span>}
                    placeholder="Enter the minimum quantity of product"
                    type="text"
                    refEl={ref}
                    {...field}
                    error={error?.message}
                  />
                )}
              />
            </div>
            <div className="w-52 shrink-0 ">
              <Controller
                name="max"
                control={control}
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
                  <Input
                    label={<p className=" text-sm">Maximum weight</p>}
                    addonAfter={<span>kg</span>}
                    placeholder="Enter the minimum quantity of product"
                    type="text"
                    refEl={ref}
                    {...field}
                    error={error?.message}
                  />
                )}
              />
            </div>
            </div>
            <div className="w-full items-center gap-2 flex flex-wrap">
            <div className="w-64 shrink-0 ">
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
            </div>
            
        </form>
      </Modal>
    </div>
  );
}
