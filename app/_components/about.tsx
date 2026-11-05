import { Fragment, type CSSProperties } from "react";
import { aboutStatement, profile } from "../_lib/content";
import { Eyebrow, cx, shell } from "./ui";

export default function About() {
  const words = aboutStatement.flatMap(({ text, pop }) =>
    text.split(" ").map((word) => ({ word, pop })),
  );
  const last = words.length - 1;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-ink text-cream [--ring:var(--color-sun)]"
    >
      <div
        className={cx(
          shell,
          "grid gap-10 py-24 sm:py-28 lg:grid-cols-12 lg:gap-6 lg:py-40",
        )}
      >
        <div className="lg:col-span-3">
          <Eyebrow as="h2" id="about-title" className="text-sun">
            About me
          </Eyebrow>
        </div>

        <div className="lg:col-span-9">
          <p className="reveal font-display text-[clamp(2.4rem,5.4vw,5rem)] leading-[1.04] text-pretty">
            {words.map(({ word, pop }, index) => (
              <Fragment key={index}>
                <span
                  className={cx("reveal-word", pop && "text-sun")}
                  // Where this word sits in the sentence, from 0 to 1. The
                  // reveal animation uses it to stagger the words.
                  style={{ "--p": index / last } as CSSProperties}
                >
                  {word}
                </span>{" "}
              </Fragment>
            ))}
          </p>

          <div className="mt-12 grid gap-8 border-t border-cream/15 pt-8 sm:grid-cols-2 lg:mt-16">
            <p className="max-w-md text-lg leading-relaxed text-mist">
              You bring the idea, I’ll take care of the code: design,
              build and launch. No jargon and no stress, just a friendly chat on
              WhatsApp to get things moving.
            </p>
            <p className="font-mono text-xs leading-relaxed tracking-[0.14em] text-mist uppercase sm:text-right">
              [ {profile.role} {"//"} {profile.yearsShipping}+ years shipping
              for the web ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
