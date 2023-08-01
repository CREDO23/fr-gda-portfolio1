/* eslint-disable @next/next/no-img-element */
import { CiStar } from "react-icons/ci";
import { Rate } from "antd";

export default function ProductGalery({
  productUrl,
  gallery,
  rateData,
}: IGalleryProps) {
  return (
    <div className="w-[28rem] gap-1 flex flex-col items-center">
      <div className="w-full rounded-2xl overflow-hidden gap-1 flex flex-col items-center">
        <div className="w-full overflow-hidden bg-gray-100 h-96">
          <img height={96} className="h-full" src={productUrl} alt="" />
        </div>
        {gallery && (
          <div className="flex no-scrollbar gap-1 overflow-x-auto">
            {gallery.map((url, key) => (
              <img
                key={key}
                className="border h-24 w-24 bg-gray-100 rounded gap-0.5 "
                src={url}
                alt=""
                height={96}
                width={96}
              />
            ))}
          </div>
        )}
      </div>
      <div className="w-full h-52  gap-5 flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-1">
          <span className=" text-2xl text-gray-500">
            {rateData.average.toPrecision(3)}
          </span>
          <Rate disabled allowHalf value={rateData.average} />
          <div className="flex items-center opacity-75 font-light text-sm gap-1">
            <span>Total:</span>
            <span>{rateData.total}</span>
          </div>
        </div>
        {rateData && (
          <div className=" gap-[6px] flex flex-col items-center justify-center">
            {Object.keys(rateData.data)
              .reverse()
              .map((item, key) => {
                return (
                  <div key={key} className="h-4 flex gap-2 items-center">
                    <div className="flex items-center gap-1">
                      <span className=" text-sm">{item}</span>{" "}
                      <CiStar className=" text-lg" />
                    </div>
                    <div className="h-4 bg-white border rounded-sm w-52">
                      <div
                        style={{
                          width: `${
                            (rateData.data[item].value / rateData.total) * 100
                          }%`,
                          backgroundColor: rateData.data[item].color,
                        }}
                        className="h-4 rounded-sm"
                      ></div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}
