import Button from "@/components/global/button";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ColorAttribute from "./colorAttribute";
import Attribute from "./attribute";

export default function AttributesForm() {
  const [collapse, setCollapse] = useState(false);
  const [modal, openModal] = useState(false);

  return (
    <div
      className={` overflow-hidden rounded-md border transition-all w-full ${
        collapse ? "h-10" : "h-auto"
      } `}
    >
      <div
        onClick={() => setCollapse(!collapse)}
        className="w-full cursor-pointer  border-b h-10 px-2 flex items-center justify-between"
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
        <div className="w-full flex flex-col p-2 rounded gap-2 border">
          <h4>Color :</h4>
          <div className="flex flex-col  gap-2">
            <ColorAttribute/>
          </div>
        </div>
        <div className="w-full flex flex-col p-2 rounded gap-2 border">
          <h4>Attribute x :</h4>
          <div className="flex flex-col  gap-2">
            <Attribute/>
          </div>
        </div>
        <div className="w-full flex items-center justify-between ">
        <span>
          <Button title="Add more attribute" />
        </span>
        <span>
          <Button title="Save" />
        </span>
        </div>
       
      </div>
    </div>
  );
}
