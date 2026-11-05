import { steps } from "../_lib/content";
import { Eyebrow, cx, shell } from "./ui";

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="bg-ink text-cream [--ring:var(--color-sun)]"
    >
      <div className={cx(shell, "@container py-24 sm:py-28 lg:py-36")}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-6">
          <div className="lg:col-span-8">
            <Eyebrow className="text-sun">Process</Eyebrow>
            <h2
              id="process-title"
              className="mt-5 font-display text-[min(18cqw,9.5rem)] leading-[0.92] uppercase lg:text-[min(12cqw,9.5rem)]"
            >
              From hello
              <br />
              to launch
            </h2>
          </div>
          <p className="max-w-sm text-lg leading-relaxed text-mist lg:col-span-4 lg:justify-self-end">
            A simple, no-stress process. Here’s what working together looks
            like, one step at a time.
          </p>
        </div>

        {/* The lit-up card is styled in globals.css (.step-list / .step-card). */}
        <ol className="step-list mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="step-card flex min-h-72 flex-col justify-between gap-12 rounded-4xl border border-cream/15 bg-ink-2 p-6 sm:p-7 lg:min-h-[26rem]"
            >
              <span className="font-display text-[clamp(4rem,6vw,5.5rem)] leading-none">
                {index + 1}.
              </span>
              <div>
                <h3 className="font-display text-[2rem] leading-none uppercase">
                  {step.title}
                </h3>
                <p className="step-blurb mt-3 leading-relaxed text-mist">
                  {step.blurb}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
