import UploadImage from "@/components/shared/image/imageUpload";
import Button from "@/components/shared/button";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function GalleryForm() {
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
        <h3 className=" font-medium flex items-center gap-4"><span className="h-4 w-4 border border-primary-color rounded-full bg-primary-color/80"></span> <span>Gallery</span> </h3>{" "}
        <span className=" text-lg">
          {collapse ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
      </div>
      <form className=" w-full" action="">
        <div className="flex p-2 w-full flex-wrap  gap-4">
          <div className="flex flex-col gap-1">
            <UploadImage quantity={3} />
          </div>
        </div>
        <div className="w-full border-t p-2 flex items-center justify-end">
          <Button title="Save" />
        </div>
      </form>
    </div>
  );
}
