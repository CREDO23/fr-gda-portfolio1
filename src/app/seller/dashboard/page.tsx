"use client";

import DashboardCard from "@/components/dashboard/dashboardCard";
import ReportTable from "@/components/tableau/reportTable";
import { dashboardCards } from "@/data/dashboardCard";
import { detailedReport } from "@/data/detailedReport";

export default function Dashboard() {
  return (
    <div className=" w-full flex items-center flex-col gap-3 h-full">
      <div className="w-full flex items-center gap-6">
        {dashboardCards.map((card) => (
          <DashboardCard
            key={card.cardName}
            amount={card.amount}
            pourcentage={card.pourcentage}
            cardName={card.cardName}
          />
        ))}
      </div>
      <div className="w-full grow overflow-hidden flex flex-col  gap-2 h-[calc(100%-12.5rem)] ">
        <h3 className=" text-xl font-medium">Detailed report</h3>
        <div className=" grow overflow-auto">
          <ReportTable data={detailedReport} />
        </div>
      </div>
    </div>
  );
}
