import {
  MailOpenIcon,
  RocketIcon,
  SparkleIcon,
  SquareUserIcon,
} from "lucide-react";
import Link from "next/link";

export function Menu() {
  const menu = [
    { id: 1, name: "about", icon: <SquareUserIcon className="w-5 h-5" /> },
    { id: 4, name: "projects", icon: <RocketIcon className="w-5 h-5" /> },
    { id: 3, name: "skills", icon: <SparkleIcon className="w-5 h-5" /> },
    { id: 2, name: "contacts", icon: <MailOpenIcon className="w-5 h-5" /> },
  ];

  return (
    <ul className="flex gap-6">
      {menu.map((item) => (
        <li key={item.id}>
          <Link href={"#" + item.name}>{item.icon}</Link>
        </li>
      ))}
    </ul>
  );
}
