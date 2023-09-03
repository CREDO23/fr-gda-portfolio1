"use client";
import Link from "next/link";
import ProductsLayout from "./productsLayout";

import Table, { ColumnsType } from "antd/es/table";
import { BsEye } from "react-icons/bs";
import { PiTrashThin } from "react-icons/pi";

interface DataType {
  key: number;
  id: string;
  productName: string;
  category: string;
  price: number;
  stock: number;
  shop: string;
}

const dataSource = [
  {
    key: 1,
    id: "Taurotagus oryx",
    productName: "Oil-Free Foaming Acne Wash Facial Cleanser",
    category: "Architect",
    price: 476,
    stock: 1,
    shop: "Livefish",
  },
  {
    key: 2,
    id: "Ovis ammon",
    productName: "ALAVERT ALLERGY",
    category: "Construction Worker",
    price: 3296,
    stock: 2,
    shop: "Minyx",
  },
  {
    key: 3,
    id: "Marmota caligata",
    productName: "St. Ives",
    category: "Estimator",
    price: 244,
    stock: 3,
    shop: "Flashpoint",
  },
  {
    key: 4,
    id: "Semnopithecus entellus",
    productName: "Didanosine",
    category: "Engineer",
    price: 3261,
    stock: 4,
    shop: "Realcube",
  },
  {
    key: 5,
    id: "Vulpes chama",
    productName: "Salsalate",
    category: "Construction Worker",
    price: 514,
    stock: 5,
    shop: "Reallinks",
  },
  {
    key: 6,
    id: "Galictis vittata",
    productName: "LES BEIGES",
    category: "Electrician",
    price: 271,
    stock: 6,
    shop: "Thoughtbridge",
  },
  {
    key: 7,
    id: "Echimys chrysurus",
    productName: "Penicillin V Potassium",
    category: "Architect",
    price: 2117,
    stock: 7,
    shop: "Gabspot",
  },
  {
    key: 8,
    id: "Papilio canadensis",
    productName: "Glimepiride",
    category: "Estimator",
    price: 141,
    stock: 8,
    shop: "Aimbo",
  },
  {
    key: 9,
    id: "Varanus sp.",
    productName: "levalbuterol inhalation",
    category: "Surveyor",
    price: 1756,
    stock: 9,
    shop: "Ozu",
  },
  {
    key: 10,
    id: "Didelphis virginiana",
    productName: "Lyrica",
    category: "Construction Foreman",
    price: 501,
    stock: 10,
    shop: "Rhybox",
  },
  {
    key: 11,
    id: "Pelecanus conspicillatus",
    productName: "Kit for the Preparation of Technetium Tc99m Pyrophosphate",
    category: "Project Manager",
    price: 473,
    stock: 11,
    shop: "Skajo",
  },
  {
    key: 12,
    id: "Dasypus novemcinctus",
    productName: "Lemon",
    category: "Construction Worker",
    price: 1193,
    stock: 12,
    shop: "Skyble",
  },
  {
    key: 13,
    id: "Merops bullockoides",
    productName: "Paroxetine",
    category: "Construction Worker",
    price: 277,
    stock: 13,
    shop: "Yakitri",
  },
  {
    key: 14,
    id: "Dasypus novemcinctus",
    productName: "equaline zinc cold remedy",
    category: "Engineer",
    price: 1649,
    stock: 14,
    shop: "Kamba",
  },
  {
    key: 15,
    id: "Coluber constrictor",
    productName: "Hydrocodone Bitartrate and Acetaminophen",
    category: "Subcontractor",
    price: 982,
    stock: 15,
    shop: "Zoomlounge",
  },
  {
    key: 16,
    id: "Vulpes chama",
    productName: "SODIUM IODIDE I 123",
    category: "Architect",
    price: 1649,
    stock: 16,
    shop: "Twinte",
  },
  {
    key: 17,
    id: "Castor canadensis",
    productName: "Minocycline Hydrochloride",
    category: "Construction Manager",
    price: 2746,
    stock: 17,
    shop: "Mydo",
  },
  {
    key: 18,
    id: "Anas punctata",
    productName: "Rite Aid",
    category: "Surveyor",
    price: 506,
    stock: 18,
    shop: "Dabtype",
  },
  {
    key: 19,
    id: "Melanerpes erythrocephalus",
    productName: "SMART SENSE",
    category: "Construction Foreman",
    price: 2749,
    stock: 19,
    shop: "Voonte",
  },
  {
    key: 20,
    id: "Kobus defassa",
    productName: "Etodolac",
    category: "Supervisor",
    price: 1565,
    stock: 20,
    shop: "Linkbuzz",
  },
  {
    key: 21,
    id: "unavailable",
    productName: "Lidocaine Hydrochloride",
    category: "Construction Worker",
    price: 1887,
    stock: 21,
    shop: "Tekfly",
  },
  {
    key: 22,
    id: "Tayassu pecari",
    productName: "Cialis",
    category: "Construction Foreman",
    price: 1863,
    stock: 22,
    shop: "Mynte",
  },
  {
    key: 23,
    id: "Lorythaixoides concolor",
    productName: "OMEPRAZOLE DR",
    category: "Construction Expeditor",
    price: 457,
    stock: 23,
    shop: "Dabfeed",
  },
  {
    key: 24,
    id: "Laniaurius atrococcineus",
    productName: "Isosorbide Dinitrate",
    category: "Surveyor",
    price: 443,
    stock: 24,
    shop: "Riffpedia",
  },
  {
    key: 25,
    id: "Colobus guerza",
    productName: "ORCHID SECRET FOUNDATION",
    category: "Construction Expeditor",
    price: 44,
    stock: 25,
    shop: "Meetz",
  },
  {
    key: 26,
    id: "Manouria emys",
    productName: "Allopurinol",
    category: "Estimator",
    price: 15,
    stock: 26,
    shop: "Photofeed",
  },
  {
    key: 27,
    id: "Gorilla gorilla",
    productName: "Avedana Hemorrhoidal",
    category: "Engineer",
    price: 673,
    stock: 27,
    shop: "Avamm",
  },
  {
    key: 28,
    id: "Picoides pubescens",
    productName: "Bupropion Hydrochloride",
    category: "Project Manager",
    price: 2445,
    stock: 28,
    shop: "Twitternation",
  },
  {
    key: 29,
    id: "Pelecans onocratalus",
    productName: "Leflunomide",
    category: "Architect",
    price: 2116,
    stock: 29,
    shop: "Oyoloo",
  },
  {
    key: 30,
    id: "Macropus agilis",
    productName: "Arnica Montana Nartex",
    category: "Estimator",
    price: 447,
    stock: 30,
    shop: "Rhynoodle",
  },
  {
    key: 31,
    id: "Junonia genoveua",
    productName: "Lorac Foundation Deep",
    category: "Engineer",
    price: 150,
    stock: 31,
    shop: "Babbleblab",
  },
  {
    key: 32,
    id: "Ratufa indica",
    productName: "Lisinopril",
    category: "Surveyor",
    price: 251,
    stock: 32,
    shop: "Edgeify",
  },
  {
    key: 33,
    id: "Ciconia ciconia",
    productName: "VALACYCLOVIR HYDROCHLORIDE",
    category: "Construction Foreman",
    price: 2851,
    stock: 33,
    shop: "Kaymbo",
  },
  {
    key: 34,
    id: "Sus scrofa",
    productName: "St. Ives Blemish and Blackhead control",
    category: "Estimator",
    price: 2091,
    stock: 34,
    shop: "Brainverse",
  },
  {
    key: 35,
    id: "Plegadis ridgwayi",
    productName: "Ethambutol Hydrochloride",
    category: "Subcontractor",
    price: 1052,
    stock: 35,
    shop: "Innojam",
  },
  {
    key: 36,
    id: "Heloderma horridum",
    productName: "FINASTERIDE",
    category: "Project Manager",
    price: 1253,
    stock: 36,
    shop: "Avavee",
  },
  {
    key: 37,
    id: "Zenaida asiatica",
    productName: "Enamelon Preventive Treatment",
    category: "Supervisor",
    price: 1269,
    stock: 37,
    shop: "Photospace",
  },
  {
    key: 38,
    id: "Ephippiorhynchus mycteria",
    productName: "Premier Value Chest Congestion Relief",
    category: "Construction Worker",
    price: 917,
    stock: 38,
    shop: "Meetz",
  },
  {
    key: 39,
    id: "Eolophus roseicapillus",
    productName: "Edarbi",
    category: "Architect",
    price: 2125,
    stock: 39,
    shop: "Brightbean",
  },
  {
    key: 40,
    id: "Bubulcus ibis",
    productName: "HUMCO Potassium Chloride Oral Solution 10%",
    category: "Construction Expeditor",
    price: 2309,
    stock: 40,
    shop: "Jetwire",
  },
];

const columns: ColumnsType<DataType> = [
  {
    title: "Product name",
    dataIndex: "productName",
    key: "productName",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text) => `${text} [devise]`,
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
    render: (text) => `${text} pc(s)`,
  },
  {
    title: "Shop",
    dataIndex: "shop",
    key: "shop",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <div className=" flex items-center  gap-3">
        <Link
          className="p-1 cursor-pointer border border-blue-500 rounded-lg text-blue-500"
          href={`/seller/dashboard/products/${record.productName}`}
        >
          <BsEye />
        </Link>
        <span className="p-1 cursor-pointer border rounded-lg text-red-500 border-red-500">
          <PiTrashThin />
        </span>
      </div>
    ),
  },
];

export default function AllProduct() {
  return (
    <ProductsLayout currentTab="all">
      <Table
        bordered
        scroll={{ y: 700 }}
        pagination={false}
        columns={columns}
        dataSource={dataSource}
      />
    </ProductsLayout>
  );
}
