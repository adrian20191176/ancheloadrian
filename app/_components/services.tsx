import { services, whatsappLink } from "../_lib/content";
import { ArrowUpRightIcon } from "./icons";
import { Eyebrow, cx, shell } from "./ui";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-cream text-ink"
    >
      <div className={cx(shell, "@container py-24 sm:py-28 lg:py-36")}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-6">
          <div className="lg:col-span-8">
            <Eyebrow>Services</Eyebrow>
            <h2
              id="services-title"
              className="mt-5 font-display text-[min(18cqw,9.5rem)] leading-[0.92] uppercase lg:text-[min(12cqw,9.5rem)]"
            >
              What I can
              <br />
              build for you
            </h2>
          </div>
          <p className="max-w-sm text-lg leading-relaxed text-muted lg:col-span-4 lg:justify-self-end">
            Whatever the idea, the goal stays the same: something that looks
            sharp, works properly and is easy for people to use.
          </p>
        </div>

        <ol className="mt-14 border-t-2 border-ink lg:mt-20">
          {services.map((service, index) => (
            <li
              key={service.title}
              className={cx(
                "group relative isolate border-b border-ink/15",
                // A sunny fill rises from the bottom on hover or focus.
                "before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-sun before:transition-transform before:duration-500 before:ease-out-soft",
                "hover:before:scale-y-100 focus-within:before:scale-y-100",
              )}
            >
              <div className="relative grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-5 gap-y-3 py-7 transition-[padding] duration-500 ease-out-soft group-hover:px-3 sm:gap-x-8 sm:group-hover:px-5 lg:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1fr)_auto] lg:py-10">
                <span className="font-mono text-sm text-muted transition-colors group-hover:text-umber">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[clamp(2.1rem,5.5vw,4.5rem)] leading-[0.95] uppercase">
                  {service.title}
                </h3>
                <p className="col-span-3 max-w-md leading-relaxed text-muted transition-colors group-hover:text-umber sm:col-span-2 sm:col-start-2 lg:col-span-1 lg:col-start-3 lg:row-start-1">
                  {service.blurb}
                </p>
                <a
                  href={whatsappLink(service.ask)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ask about ${service.title.toLowerCase()} on WhatsApp (opens in a new tab)`}
                  className={cx(
                    "col-start-3 row-start-1 grid size-12 place-items-center rounded-full border-2 border-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-sun lg:col-start-4",
                    // Stretch the click target over the whole row.
                    "after:absolute after:inset-0 after:content-['']",
                  )}
                >
                  <ArrowUpRightIcon className="size-5 transition-transform duration-300 ease-bounce group-hover:rotate-45" />
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
