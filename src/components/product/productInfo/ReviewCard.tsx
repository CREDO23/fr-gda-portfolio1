import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { Rate } from "antd";

export default function ReviewCard({
  name,
  job,
  rate,
  avatarUrl,
  review,
}: IReviewCardProps) {
  return (
    <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        <Avatar size="lg" variant="circular" src={avatarUrl} alt="candice wu" />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              {name}
            </Typography>
            <div className="5 flex items-center gap-0">
              <Rate value={rate} />
            </div>
          </div>
          <Typography color="blue-gray">{job}</Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography>
          {"❝ "}
          {review}
          {" ❞"}
        </Typography>
      </CardBody>
    </Card>
  );
}
