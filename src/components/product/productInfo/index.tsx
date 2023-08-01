import Reviews from "./Reviews";
import Description from "./Description";
import { descriptionData } from "../../../data/description";
import { reviewsData } from "../../../data/reviews";

export default function ProductInfo() {
  return (
    <div className="w-full flex flex-col px-3 md:px-8  gap-10  py-5">
      <div className="">
        <Description descriptions={descriptionData} />
      </div>
      <div className="">
        <Reviews reviews={reviewsData} />
      </div>
    </div>
  );
}
