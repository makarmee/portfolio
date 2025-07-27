import {
  ChevronRightIcon,
  GithubIcon,
  MailIcon,
  PhoneIcon,
  SendIcon,
} from "lucide-react";
import { Heading } from "./shared/heading";

export default async function Contacts() {
  const social = [
    {
      name: "Github",
      username: "makarmee",
      icon: <GithubIcon />,
      href: "https://www.github.com/makarmee",
    },
    {
      name: "Telegram",
      username: "makarmee",
      icon: <SendIcon />,
      href: "https://www.t.me/makarmee",
    },
    {
      name: "Gmail",
      username: "makarmee@gmail.com",
      icon: <MailIcon />,
      href: "mailto:makarmee@gmail.com",
    },
    {
      name: "Phone",
      username: "+93773072993",
      icon: <PhoneIcon />,
      href: "tel:+93773072993",
    },
  ];

  return (
    <section className="my-24 mx-auto" id="contacts">
      <div>
        <Heading name="Contact Me" />
        <p className="text-sm text-center text-neutral-400">
          Please feel free to reach out to me via email or social media.
        </p>
      </div>
      <div className="mt-6">
        <ul
          role="list"
          className="grid grid-cols-1 sm:gap-4 gap-2 sm:grid-cols-2"
        >
          {social.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                target="_blank"
                className="shadow-xs group flex w-full items-center justify-between space-x-3 rounded-full border border-neutral-400/20 px-4 py-2 text-left hover:bg-neutral-600/40"
              >
                <span className="flex min-w-0 flex-1 items-center space-x-4">
                  <span className="block shrink-0">{item.icon}</span>
                  <span className="block min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-neutral-400">
                      {item.name}
                    </span>
                    <span className="block truncate text-sm font-medium text-neutral-400">
                      {item.username}
                    </span>
                  </span>
                </span>
                <span className="inline-flex size-10 shrink-0 items-center justify-center">
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="size-5 text-neutral-400"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
