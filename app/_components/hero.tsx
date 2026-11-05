import { contact, profile, services } from "../_lib/content";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import TalkingAvatar from "./talking-avatar";
import { Eyebrow, PillLink, cx, shell } from "./ui";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      // The top padding leaves room for the site header, which overlays this.
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-sun pt-24 text-ink"
    >
      <div
        className={cx(
          shell,
          "@container relative grid flex-1 grid-cols-1 pb-8",
          "lg:grid-cols-12 lg:grid-rows-[1fr_auto_auto] lg:gap-x-6 lg:pb-10",
        )}
      >
        {/* Name. The portrait sits on top of it, like a cut-out. */}
        <div className="relative z-0 lg:col-span-9 lg:col-start-1 lg:row-start-1 lg:self-center">
          <p className="mb-3 font-hand text-[clamp(1.9rem,4vw,2.75rem)] leading-none text-umber">
            Hey there{" "}
            <span
              aria-hidden="true"
              className="inline-block origin-[70%_75%] motion-safe:animate-wave"
            >
              👋
            </span>{" "}
            I’m
          </p>
          {/* Sized in container units so the longer line always fits. */}
          <h1
            id="hero-title"
            className="font-display text-[30cqw] leading-[0.92] uppercase sm:text-[24cqw] lg:text-[15cqw]"
          >
            <span className="block">{profile.firstName}</span>
            <span className="block">{profile.lastName}</span>
          </h1>
        </div>

        <TalkingAvatar className="z-10 -mt-4 h-[min(60svh,27rem)] sm:h-[32rem] lg:col-span-5 lg:col-start-6 lg:row-span-3 lg:row-start-1 lg:mt-0 lg:h-auto lg:min-h-0 xl:col-span-6 xl:col-start-5" />

        {/* What I build: desktop only, the services section covers it on phones. */}
        <div className="relative z-20 hidden text-right lg:col-span-2 lg:col-start-11 lg:row-start-1 lg:block lg:self-center">
          <Eyebrow dotClassName="bg-ink">What I build</Eyebrow>
          <ul className="mt-4 space-y-2 text-base font-medium whitespace-nowrap">
            {services.map((service) => (
              <li key={service.title}>
                <a
                  href="#services"
                  className="decoration-2 underline-offset-4 hover:underline"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Intro */}
        <div className="relative z-20 grid justify-items-start gap-5 lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-end lg:pt-6">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-paper/50 py-1.5 pr-4 pl-3 text-sm font-semibold">
            <span aria-hidden="true" className="relative flex size-2.5">
              <span className="absolute inline-flex size-full rounded-full bg-leaf motion-safe:animate-ping-soft" />
              <span className="relative inline-flex size-2.5 rounded-full bg-leaf" />
            </span>
            Available for new projects
          </p>
          <p className="max-w-[28rem] text-lg leading-relaxed text-pretty">
            Software engineer with four years of shipping software, mostly on
            the web. Got an idea for a cool website? Let’s build one that looks
            sharp and actually works.
          </p>
        </div>

        {/* Actions */}
        <div className="relative z-20 mt-8 grid gap-3 lg:col-span-12 lg:col-start-1 lg:row-start-3 lg:mt-10 lg:flex lg:items-center lg:justify-between">
          <div className="hidden items-center gap-3 lg:flex">
            <span className="font-mono text-xs font-medium tracking-[0.16em] uppercase">
              Say hi
            </span>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message me on WhatsApp (opens in a new tab)"
              className="grid size-11 place-items-center rounded-full border-2 border-ink transition-colors duration-200 hover:bg-ink hover:text-sun"
            >
              <WhatsAppIcon className="size-5" />
            </a>
            <a
              href={`tel:${contact.phoneTel}`}
              aria-label={`Call me on ${contact.phoneDisplay}`}
              className="grid size-11 place-items-center rounded-full border-2 border-ink transition-colors duration-200 hover:bg-ink hover:text-sun"
            >
              <PhoneIcon className="size-5" />
            </a>
          </div>

          <PillLink
            href={contact.whatsappUrl}
            external
            className="w-full sm:w-auto sm:justify-self-start"
          >
            Start a project
          </PillLink>

          <p className="text-sm text-umber lg:hidden">
            Or call me on{" "}
            <a
              href={`tel:${contact.phoneTel}`}
              className="font-semibold text-ink underline decoration-2 underline-offset-4"
            >
              {contact.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
