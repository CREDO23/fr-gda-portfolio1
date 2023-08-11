import { Select } from "antd";
import { useState } from "react";

export default function ProductChoices({ data }: { data: IChoice[] }) {
  const [choices, setChoices] = useState<IChoice[]>([...data]);

  const handleChange = (targetLabel: string, value: string) => {
    const updated = choices.map((ch) => {
      if (ch.label == targetLabel) {
        ch.selected = value;

        return ch;
      }

      return ch;
    });

    setChoices([...updated]);
  };

  return (
    <div className=" flex flex-col gap-3">
      {choices.filter((el, key) => el.label == "Colors")[0] && (
        <div className="flex flex-col gap-2">
          <p className="font-light  opacity-70 text-sm">Colors:</p>
          <div className="flex gap-1 ">
            {choices
              .filter((el) => el.label == "Colors")[0]
              ?.items?.map((col: string, key) => {
                const selected = choices.filter(
                  (el, key) => el.label == "Colors"
                )[0].selected;

                return (
                  <div
                    key={key}
                    onClick={() => handleChange("Colors", col)}
                    className={`w-8 h-8 p-[2px] cursor-pointer  ${
                      col == selected
                        ? "border border-[#FF5722] border-opacity-50"
                        : ""
                    }`}
                  >
                    <div
                      style={{ backgroundColor: col }}
                      className="w-full h-full rounded bg-[${color}]"
                    ></div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
      {choices.filter((el, key) => el.label == "Size")[0] && (
        <div className="flex flex-col gap-2">
          <p className="font-light  opacity-70 text-sm">Size:</p>
          <div className="flex gap-1 flex-wrap ">
            {choices
              .filter((el, key) => el.label == "Size")[0]
              ?.items.map((siz, key) => {
                const selected = choices.filter(
                  (el, key) => el.label == "Size"
                )[0].selected;

                return (
                  <div
                    key={key}
                    onClick={() => handleChange("Size", siz)}
                    className={`h-8 w-10 cursor-pointer  rounded-sm ${
                      siz == selected
                        ? "border border-[#FF5722] border-opacity-50"
                        : ""
                    }  flex items-center justify-center text-sm bg-gray-100 text-gray-600`}
                  >
                    {siz}
                  </div>
                );
              })}
          </div>
        </div>
      )}

      <div className="flex w-full justify-between gap-y-2 items-center flex-wrap">
        {choices.filter((el) => el.label != "size" && el.label != "colors")
          .length &&
          choices
            .filter((el, key) => el.label != "Size" && el.label != "Colors")
            .map((ch, key) => {
              return (
                <div key={key} className="flex w-[45%] flex-col gap-2">
                  <p className="font-light  opacity-70 text-sm">{ch.label}:</p>
                  <Select
                    bordered={false}
                    onChange={(e) => {
                      handleChange(ch.label,e as unknown as string)
                    } }
                    value={{ value: ch.selected }}
                    placeholder={`Select a ${ch.label}`}
                    labelInValue={false}
                    options={ch?.items?.map((item) => ({ value: item }))}
                    className="w-full border rounded"
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
}
