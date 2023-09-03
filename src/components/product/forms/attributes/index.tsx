import Button from "@/components/global/button";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import ColorAttribute from "./colorAttribute";
import Attribute from "./attribute";
import NewAttributeForm from "./newAttributeForm";

export default function AttributesForm() {
  const [collapse, setCollapse] = useState(false);
  const [colorChecked, setColorChecked] = useState(false);

  return (
    <div
      className={` overflow-hidden rounded-md border border-slate-400/80 transition-all w-full ${
        collapse ? "h-10" : "h-auto"
      } `}
    >
      <div
        onClick={() => setCollapse(!collapse)}
        className="w-full cursor-pointer   border-b h-10 px-2 flex items-center justify-between"
      >
        <h3 className=" font-medium flex items-center gap-4">
          <span className="h-4 w-4 border border-primary-color rounded-full bg-primary-color/80"></span>{" "}
          <span>Attributes</span>{" "}
        </h3>{" "}
        <span className=" text-lg">
          {collapse ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
      </div>
      <div className="w-full flex flex-col p-2  gap-4">
        <div className="w-full flex items-center justify-end gap-6">
            <span>Color</span> <Switch
              style={{ backgroundColor: "#FF5722" }}
              checkedChildren={<CloseOutlined />}
              unCheckedChildren={<CheckOutlined />}
              defaultChecked
              checked={colorChecked}
              onChange={(e) => setColorChecked(e)}
            />
        </div>
        <div className={`w-full ${colorChecked ? ' hidden' : 'flex'}  flex-col p-2 rounded gap-2 border`}>
          <div className="w-full flex items-center h-6 justify-between">
            <h4>Color :</h4>
          </div>

          <div className="flex flex-col  gap-2">
            <ColorAttribute />
          </div>
        </div>
        <div className="w-full flex flex-col p-2 rounded gap-2 border">
          <div className="w-full flex items-center h-6 justify-between">
            <h4>Attribute x :</h4>
          </div>

          <div className="flex flex-col  gap-2">
            <Attribute />
          </div>
        </div>
        <div className="w-full flex items-center justify-between ">
          <NewAttributeForm />
          <span>
            <Button title="Save" />
          </span>
        </div>
      </div>
    </div>
  );
}
