import { Modal } from "antd";
import Input from "@/components/global/input";
import Button from "@/components/global/button";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export default function NewCharacteristicForm() {
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
        <Button
          onClick={() => openModal(true)}
          ghost
          title="Add more characteristic"
        />
      </span>
      <Modal
        centered
        title="New characteristic"
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
        <form className="w-full h-full flex-wrap flex items-center gap-2 ">
          <div className="w-80 shrink-0 ">
            <Controller
              name="characteristicTitle"
              control={control}
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <Input
                  label={<p className=" text-sm">Characteristic title</p>}
                  placeholder="Enter the title of the characteristic"
                  type="text"
                  refEl={ref}
                  {...field}
                  error={error?.message}
                />
              )}
            />
          </div>
          <div className="w-80 shrink-0 ">
            <Controller
              name="characteristicDescription"
              control={control}
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <Input
                  label={<p className=" text-sm">Characteristic description</p>}
                  placeholder="Enter the description of the characteristic"
                  type="textarea"
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
