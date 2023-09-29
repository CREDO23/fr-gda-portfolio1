import { Modal } from "antd";
import Input from "@/components/shared/input";
import Button from "@/components/shared/button";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "@/components/shared/select";

export default function NewPriceForm() {
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
    <div className="w-full flex flex-col gap-2">
      <span>
        <Button onClick={() => openModal(true)} ghost title="New price" />
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
                    label={<p className=" text-sm">Minimum</p>}
                    addonAfter={<span>pc(s)</span>}
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
                    label={<p className=" text-sm">Maximum</p>}
                    addonAfter={<span>pc(s)</span>}
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
