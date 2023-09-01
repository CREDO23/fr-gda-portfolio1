import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Space, Tag, Table as Tb } from "antd";
import { ColumnsType } from "antd/es/table";

type TOrderStatus =
  | "COMPLETE"
  | "PROCESSING"
  | "PENDING"
  | "SHIPED"
  | "PICKUP-READY"
  | "PICKED-ALREADY";

const statusColor = (status: TOrderStatus) => {
  switch (status) {
    case "COMPLETE":
      return "green";
      break;
    case "PROCESSING":
      return "processing";
      break;
    case "PENDING":
      return "warning";
      break;
    case "SHIPED":
      return "default";
      break;
    case "PICKUP-READY":
      return "blue";
      break;
    case "PICKED-ALREADY":
      return "success";
  }
};

interface DataType {
  key: string;
  customerName: string;
  orderAmount: number;
  orderDate: string;
  status: TOrderStatus;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Customer Name",
    dataIndex: "customerName",
    key: "customerName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Order Amount",
    dataIndex: "orderAmount",
    key: "orderAmount",
    render: (text) => <span>${text}</span>,
  },
  {
    title: "Order Date",
    dataIndex: "orderDate",
    key: "orderDate",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, record) => (
      <Space size="middle">
        <Tag color={statusColor(record.status)}>{record.status}</Tag>
      </Space>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <span className=" cursor-pointer">
        <HiOutlinePencilSquare />
      </span>
    ),
  },
];

export default function ReportTable({ data }: { data: DataType[] }) {
  return (
    <Tb scroll={{ y: 500 }} bordered columns={columns} dataSource={data} />
  );
}
