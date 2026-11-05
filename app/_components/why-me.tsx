import { contact, highlights, profile } from "../_lib/content";
import { ArrowUpRightIcon } from "./icons";
import { Eyebrow, cx, shell } from "./ui";

/** A highlighter-pen swipe behind a few words. */
const marker =
  "bg-transparent bg-linear-to-t from-sun from-40% to-transparent to-40% box-decoration-clone px-1 text-inherit";

export default function WhyMe() {
  return (
    <section aria-labelledby="why-title" className="bg-cream text-ink">
      <div className={cx(shell, "py-24 sm:py-28 lg:py-36")}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-3">
            <Eyebrow as="h2" id="why-title">
              Why work with me
            </Eyebrow>
          </div>
          <div className="lg:col-span-9">
            <p className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.04] text-pretty">
              Good websites shouldn’t be a headache. I keep things{" "}
              <mark className={marker}>simple and friendly</mark>, and focused
              on what your project{" "}
              <mark className={marker}>actually needs.</mark>
            </p>
            <p className="mt-8 font-mono text-xs leading-relaxed tracking-[0.14em] text-muted uppercase">
              [ Based in {profile.location} {"//"} Working with people anywhere ]
            </p>
          </div>
        </div>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {highlights.map((item) => (
            <li
              key={item.label}
              className="flex min-h-64 flex-col justify-between gap-10 rounded-4xl border border-ink/10 bg-paper p-6 sm:p-7"
            >
              <p className="max-w-[16rem] text-sm leading-relaxed text-muted">
                {item.blurb}
              </p>
              <div>
                <p className="font-display text-[clamp(4rem,6vw,5.5rem)] leading-none">
                  {item.value}
                </p>
                <p className="mt-2 font-mono text-xs font-medium tracking-[0.14em] uppercase">
                  {item.label}
                </p>
              </div>
            </li>
          ))}

          <li>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full min-h-64 flex-col justify-between gap-10 rounded-4xl bg-sun p-6 transition-transform duration-300 ease-bounce hover:-translate-y-1.5 sm:p-7"
            >
              <span className="max-w-[16rem] text-sm leading-relaxed text-umber">
                Got an idea brewing? It could be the next thing I build.
              </span>
              <span className="flex items-end justify-between gap-4">
                <span>
                  <span className="block font-display text-[clamp(4rem,6vw,5.5rem)] leading-none">
                    +1
                  </span>
                  <span className="mt-2 block font-mono text-xs font-medium tracking-[0.14em] uppercase">
                    Your project, next?
                  </span>
                </span>
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink text-sun transition-transform duration-300 ease-bounce group-hover:rotate-45">
                  <ArrowUpRightIcon className="size-5" />
                </span>
              </span>
              <span className="sr-only">
                Message me on WhatsApp (opens in a new tab)
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
