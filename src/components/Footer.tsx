import { createClient } from "@/prismicio";
import WordMark from "./WordMark";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Footer() {
  const client = createClient();
  const setting = await client.getSingle('settings')
  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t borrder-slate-600 px-8 py-7 md:flex-row">
      <Link href='/'>
        <WordMark />
        <span className="sr-only">Glisten.ai Home page</span>
      </Link>
      <nav aria-label="Footer">
        <ul className="flex gap-6">
          {setting.data.navigation.map((item) => (
            <li key={item.label}>
              <PrismicNextLink field={item.link}
              className="inline-flex min-h-11 items-center"
              >
                {item.label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
