import { FaFilter } from "react-icons/fa";
import { Checkbox, Slider } from "antd";

export default function ProductFilter() {
  const slideFormater = (value) => `${value}$`;

  const SliderMarks = {
    0: {
      style: {
        color: "#f50",
      },
      label: <strong>0</strong>,
    },
    5000: {
      style: {
        color: "#f50",
      },
      label: <strong>5000</strong>,
    },
  };

  return (
    <div className="w-72 border flex flex-col  gap-3 rounded-lg">
      <div className="w-full border-b p-4 pb-3 justify-between   flex items-center">
        <p className=" text-sm font-bold">Filters</p>
        <FaFilter />
      </div>
      <div className=" w-full px-3 flex flex-col items-center gap-2">
        <div className=" border-b border-gray-100 w-full flex flex-col items-center gap-2">
          <p className=" text-sm w-full text-left">Price range ($)</p>
          <div className="w-full">
            <Slider
              tooltip={{ formatter: slideFormater }}
              range={{ draggableTrack: true }}
              marks={SliderMarks}
              max={5000}
              min={0}
              defaultValue={[0, 4500]}
            />
          </div>
        </div>
        <div className="border-b pb-2 border-gray-100 w-full flex flex-col items-center gap-2">
          <p className=" text-sm w-full text-left">Categories</p>
          <div className="w-full">
            <Checkbox.Group>
              <div className="flex flex-col gap-3">
                <Checkbox value="A">A</Checkbox>
                <Checkbox value="B">B</Checkbox>
                <Checkbox value="C">C</Checkbox>
              </div>
            </Checkbox.Group>
          </div>
        </div>
        <div className="border-b pb-2 border-gray-100 w-full flex flex-col items-center gap-2">
          <p className=" text-sm w-full text-left">Shops</p>
          <div className="w-full">
            <Checkbox.Group>
              <div className="flex flex-col gap-3">
                <Checkbox value="A">A</Checkbox>
                <Checkbox value="B">B</Checkbox>
                <Checkbox value="C">C</Checkbox>
              </div>
            </Checkbox.Group>
          </div>
        </div>
        <div className="border-b pb-2 border-gray-100 w-full flex flex-col items-center gap-2">
          <p className=" text-sm w-full text-left">Categories</p>
          <div className="w-full">
            <Checkbox.Group>
              <div className="flex flex-col gap-3">
                <Checkbox value="A">A</Checkbox>
                <Checkbox value="B">B</Checkbox>
                <Checkbox value="C">C</Checkbox>
              </div>
            </Checkbox.Group>
          </div>
        </div>
      </div>
    </div>
  );
}
