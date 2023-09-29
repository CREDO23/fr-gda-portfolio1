import { Modal, Table } from "antd";
import Input from "@/components/shared/input";
import Button from "@/components/shared/button";
import { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

interface DataType {
    key : string;
  zoneName: string;
  deliveryTime: number;
}

const dataSource = [
  {
    key: "1",
    zoneName: "Mike",
    deliveryTime: 32,
  },
  {
    key: "2",
    zoneName: "John",
    deliveryTime: 42,
  },
  {
    key: "3",
    zoneName: "Mike",
    deliveryTime: 32,
  },
  {
    key: "4",
    zoneName: "John",
    deliveryTime: 42,
  },
  {
    key: "5",
    zoneName: "Mike",
    deliveryTime: 32,
  },
  {
    key: "6",
    zoneName: "John",
    deliveryTime: 42,
  },
  {
    key: "7",
    zoneName: "Mike",
    deliveryTime: 32,
  },
  {
    key: "8",
    zoneName: "John",
    deliveryTime: 42,
  },
  {
    key: "9",
    zoneName: "Mike",
    deliveryTime: 32,
  },
  {
    key: "10",
    zoneName: "John",
    deliveryTime: 42,
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: "Zone name",
    dataIndex: "zoneName",
    key: "name",
  },
  {
    title: "Time delivery",
    dataIndex: "deliveryTime",
    key: "time",
    render : (text) => `${text} day(s)`
  },
];

export default function Zones() {
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
          title="+ New zone"
        />
      </span>
      <Modal
        centered
        title="New zone"
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
        <form className="w-full h-full flex items-center gap-2 ">
          <div className="w-80 ">
            <Controller
              name="zoneName"
              control={control}
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <Input
                  label={<p className=" text-sm">Zone name</p>}
                  placeholder="Enter the name of the zone"
                  type="text"
                  refEl={ref}
                  {...field}
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className="w-80 ">
            <Controller
              name="deliveryTime"
              control={control}
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <Input
                  label={<p className=" text-sm">Delivery time</p>}
                  placeholder="Enter the delivery time"
                  addonAfter={<span>day(s)</span>}
                  type="text"
                  refEl={ref}
                  {...field}
                  error={error?.message}
                />
              )}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
}
