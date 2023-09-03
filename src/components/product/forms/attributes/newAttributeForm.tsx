import { Modal } from "antd";
import Input from "@/components/global/input";
import Button from "@/components/global/button";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export default function NewAttributeForm() {
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
          title="Add more attribute"
        />
      </span>
      <Modal
        centered
        title="New attribute"
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
              name="attributeName"
              control={control}
              render={({ field: { ref, ...field }, fieldState: { error } }) => (
                <Input
                  label={<p className=" text-sm">Attribute name</p>}
                  placeholder="Enter the name of the attribute"
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
