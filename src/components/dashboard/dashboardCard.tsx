import { CiShoppingCart } from "react-icons/ci";
import {TfiMoney} from 'react-icons/tfi'
import {PiUsersThreeThin} from 'react-icons/pi'


export default function DashboardCard({
  cardName,
  amount,
  pourcentage: { type, value },
}: IDashboardCardProps) {
  return (
    <div
      className={`w-72 ${
        cardName == "turnover"
          ? " bg-beige-color/10"
          : cardName == "profit"
          ? " bg-green-color/10"
          : cardName == "customers"
          ? " bg-violet-color/10"
          : ""
      } p-3 rounded-md h-28 flex items-center justify-between`}
    >
      <div className="h-full flex  justify-center flex-col gap-3 w-54 ">
        <span className=" capitalize  font-light">{cardName}</span>
        <span className=" text-2xl font-medium">{`${
          cardName == "customers" ? "" : "$"
        }${amount}`}</span>
        <span
          className={` font-semibold text-sm ${
            type == "positive" ? "text-green-700" : " text-red-700"
          }  `}
        >
          {`${type == "positive" ? "+" : "-"} ${value}`}%
        </span>
      </div>
      <div className=" self-start  text-4xl flex justify-end font-extralight w-2/12">
        <span
          className={`border rounded-lg h-auto p-1 ${
            cardName == "turnover"
              ? " border-beige-color/50 text-beige-color"
              : cardName == "profit"
              ? " border-green-color/50 text-green-color"
              : cardName == "customers"
              ? " border-violet-color/50 text-violet-color"
              : ""
          } `}
        >
          {cardName == 'turnover' ? <CiShoppingCart/> : cardName == 'profit' ? <TfiMoney/> : cardName == 'customers' ? <PiUsersThreeThin/> : null }
        </span>
      </div>
    </div>
  );
}
