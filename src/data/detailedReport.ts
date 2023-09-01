export const detailedReport: {
  key: string;
  customerName: string;
  orderAmount: number;
  orderDate: string;
  status:
    | "COMPLETE"
    | "PROCESSING"
    | "PENDING"
    | "SHIPED"
    | "PICKUP-READY"
    | "PICKED-ALREADY";
}[] = [
  {
    key: "1",
    customerName: "John Brown",
    orderAmount: 243,
    orderDate: "12/22/2022",
    status: "COMPLETE",
  },
  {
    key: "2",
    customerName: "Emily Smith",
    orderAmount: 98,
    orderDate: "11/01/2022",
    status: "PROCESSING",
  },
  {
    key: "3",
    customerName: "Michael Johnson",
    orderAmount: 589,
    orderDate: "10/10/2022",
    status: "PENDING",
  },
  {
    key: "4",
    customerName: "Sarah Davis",
    orderAmount: 356,
    orderDate: "09/15/2022",
    status: "COMPLETE",
  },
  {
    key: "5",
    customerName: "David Wilson",
    orderAmount: 721,
    orderDate: "08/05/2022",
    status: "PENDING",
  },
  {
    key: "6",
    customerName: "John Brown",
    orderAmount: 243,
    orderDate: "12/22/2022",
    status: "COMPLETE",
  },
  {
    key: "7",
    customerName: "Emily Smith",
    orderAmount: 98,
    orderDate: "11/01/2022",
    status: "PROCESSING",
  },
  {
    key: "8",
    customerName: "Michael Johnson",
    orderAmount: 589,
    orderDate: "10/10/2022",
    status: "PENDING",
  },
  {
    key: "9",
    customerName: "Sarah Davis",
    orderAmount: 356,
    orderDate: "09/15/2022",
    status: "COMPLETE",
  },
  {
    key: "10",
    customerName: "David Wilson",
    orderAmount: 721,
    orderDate: "08/05/2022",
    status: "PENDING",
  },
];
