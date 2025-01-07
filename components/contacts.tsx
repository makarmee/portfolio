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
      username: "mmahdikarimi2006@gmail.com",
      icon: <MailIcon />,
      href: "mailto:mmahdikarimi2006@gmail.com",
    },
    {
      name: "Phone",
      username: "+93773072993",
      icon: <PhoneIcon />,
      href: "callto:+93773072993",
    },
  ];

  return (
    <section
      className="my-24 mx-auto max-w-md py-2 sm:max-w-xl sm:py-4"
      id="contacts"
    >
      <div>
        <div className="text-center">
          <Heading name="Contact Me" />

          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Please feel free to reach out to me via email or social media.
          </p>
        </div>
      </div>
      <div className="mt-6">
        <ul role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {social.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-xs group flex w-full items-center justify-between space-x-3 rounded-full border border-zinc-600/20 px-4 py-2 text-left hover:bg-zinc-200/40 dark:border-zinc-700/40 dark:hover:bg-zinc-500/10"
              >
                <span className="flex min-w-0 flex-1 items-center space-x-4">
                  <span className="block shrink-0">{item.icon}</span>
                  <span className="block min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-zinc-600 dark:text-zinc-400">
                      {item.name}
                    </span>
                    <span className="block truncate text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      {item.username}
                    </span>
                  </span>
                </span>
                <span className="inline-flex size-10 shrink-0 items-center justify-center">
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="size-5 text-gray-400 dark:text-gray-400/10"
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
