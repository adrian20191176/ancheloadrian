import { contact, profile } from "../_lib/content";
import { DoodleArrowIcon, WhatsAppIcon } from "./icons";
import LocalTime from "./local-time";
import { Eyebrow, PillLink } from "./ui";

/** A little stack of cards, the top one tilted until you hover it. */
export default function ContactCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="overflow-x-clip bg-ink py-28 text-ink [--ring:var(--color-sun)] sm:py-36 lg:py-44"
    >
      <div className="group relative mx-auto w-[min(100%-2.5rem,54rem)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-y-3 rotate-[5deg] rounded-[2.25rem] bg-sun transition-transform duration-500 ease-out-soft group-hover:rotate-[7deg]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -rotate-[5deg] rounded-[2.25rem] border border-cream/10 bg-ink-2 transition-transform duration-500 ease-out-soft group-hover:-rotate-[7deg]"
        />

        <div className="relative -rotate-2 rounded-[2.25rem] bg-paper px-6 py-10 [--ring:var(--color-ink)] shadow-[0_40px_80px_-24px_rgb(0_0_0/0.65)] transition-transform duration-500 ease-out-soft group-hover:rotate-0 sm:px-12 sm:py-14">
          <p
            aria-hidden="true"
            className="pointer-events-none absolute -top-14 right-2 flex rotate-[4deg] items-end gap-1 font-hand text-[1.75rem] leading-none text-sun sm:-top-16 sm:right-10 sm:text-4xl"
          >
            psst&hellip; it’s free to ask!
            <DoodleArrowIcon className="mb-[-1.6rem] w-12 rotate-[35deg] sm:w-14" />
          </p>

          <Eyebrow>Let’s work together</Eyebrow>
          <h2
            id="contact-title"
            className="mt-6 font-display text-[clamp(3.25rem,10vw,7rem)] leading-[0.92] uppercase"
          >
            Let’s build
            <br />
            your idea.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Tell me what you have in mind on WhatsApp, even if it’s just a
            rough idea. There’s no such thing as a silly question.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <PillLink
              href={contact.whatsappUrl}
              external
              icon={<WhatsAppIcon className="size-5" />}
            >
              Message me on WhatsApp
            </PillLink>
            <p className="text-sm text-muted">
              or call{" "}
              <a
                href={`tel:${contact.phoneTel}`}
                className="font-semibold text-ink underline decoration-sun decoration-[3px] underline-offset-4 hover:decoration-ink"
              >
                {contact.phoneDisplay}
              </a>
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-ink/10 pt-5 font-mono text-[0.7rem] tracking-[0.14em] text-muted uppercase">
            <p>
              Local time{" "}
              <LocalTime className="text-ink tabular-nums" />
            </p>
            <p>
              Based in <span className="text-ink">{profile.location}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
