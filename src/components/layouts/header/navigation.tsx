import Link from "next/link";
import { useState } from "react";

export default function Navigation({
  setHamburger,
  hamburger,
}: IhamburgerProps) {
  const menus = [
    {
      label: "Market",
      link: "#",
    },
    {
      label: "Shops",
      link: "#",
    },
    {
      label: "Pricing",
      link: "#",
    },
    {
      label: "Contact",
      link: "#",
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <ul className="flex  items-center  font-light flex-col gap-3 md:flex-row">
      {menus.map((menu, key) => (
        <li
          key={key}
          onClick={() => {
            setSelected(key);
            setHamburger(!hamburger);
          }}
          className={`cursor-pointer ${
            selected == key ? " text-deep-orange-400" : ""
          } hover:text-deep-orange-400 transition-all`}
        >
          <Link href={menu.link}>{menu.label}</Link>
        </li>
      ))}
    </ul>
  );
}
