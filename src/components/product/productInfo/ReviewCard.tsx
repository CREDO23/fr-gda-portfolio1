import { Rate } from "antd";
import Image from "next/image";

export default function ReviewCard({
  name = "",
  job = "",
  rate,
  avatarUrl = "",
  review = "",
}: IReviewCardProps) {
  return (
    <div className="border cursor-pointer shadow-sm hover:shadow flex flex-col gap-4 p-3 items-center justify-center border-gray-200  h-52 w-[22rem] rounded-md">
      <div className="w-full flex justify-between items-start">
        <div className="flex items-center gap-3">
          <Image
            className=" rounded-full"
            width={40}
            height={40}
            alt="user"
            src={avatarUrl}
          />
          <div className="flex text-sm font-light flex-col  gap-[2px]">
            <span className=" font-semibold">{name}</span>
            <span className=" text-gray-600">
              {job.length > 14 ? job?.substring(0, 14) + "..." : job}
            </span>
          </div>
        </div>
        <Rate  className=" text-sm" disabled value={rate} defaultValue={2}/>
      </div>
      <div className="">
        <p className=" font-light text-sm">
          {'"" '}{review}{' ""'}
        </p>
      </div>
    </div>
  );
}
