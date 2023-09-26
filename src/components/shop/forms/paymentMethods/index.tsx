import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Controller, useForm } from "react-hook-form";
import { Checkbox, Row, Col } from "antd";
import Button from "@/components/shared/button";

export default function PaymentMethodsForm() {
  const [collapse, setCollapse] = useState(false);
  const { handleSubmit, control } = useForm();

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
          <span className="h-4 w-4 rounded-full border bg-primary-color border-primary-color"></span>{" "}
          <span>Payment methods</span>
        </h3>
        <span className=" text-lg">
          {collapse ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
      </div>
      <form className=" w-full" action="">
        <div className="flex p-2 w-full flex-col flex-wrap  gap-4">
      <Controller
        name="shopName"
        control={control}
        render={({ field: { ref, ...field }, fieldState: { error } }) => (
          <Checkbox.Group style={{ width: "100%" }} {...field}>
            <Row>
              <Col span={8}>
                <Checkbox value="Airtel Money">Airtel Money</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Orange Money">Orange Money</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="M-pesa">M-pesa</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="Bitcoin">Bitcoin</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        )}
      />
         </div>
         <div className="w-full border-t p-2 flex items-center justify-end">
          <Button title="Save" />
        </div>
      </form>
    </div>
  );
}
