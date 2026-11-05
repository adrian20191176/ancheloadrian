import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "./icons";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** Shared page gutter and max width. */
export const shell = "mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10";

type Tone = "ink" | "sun";

const pillTone: Record<Tone, { pill: string; badge: string }> = {
  ink: { pill: "bg-ink text-cream", badge: "bg-sun text-ink" },
  sun: { pill: "bg-sun text-ink", badge: "bg-ink text-sun" },
};

/**
 * The main call-to-action shape: a rounded pill with a round arrow badge
 * that tips over on hover.
 */
export function PillLink({
  href,
  children,
  tone = "ink",
  icon,
  external = false,
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: Tone;
  /** Replaces the arrow inside the badge. */
  icon?: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const colours = pillTone[tone];

  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={cx(
        "group inline-flex min-h-14 items-center justify-between gap-4 rounded-full py-2 pr-2 pl-6 text-base font-semibold",
        "transition-transform duration-300 ease-bounce hover:-translate-y-0.5 active:translate-y-0",
        colours.pill,
        className,
      )}
    >
      <span>
        {children}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </span>
      <span
        className={cx(
          "grid size-10 shrink-0 place-items-center rounded-full transition-transform duration-300 ease-bounce",
          // The arrow tips over to point right; other icons just wiggle.
          icon ? "group-hover:-rotate-12" : "group-hover:rotate-45",
          colours.badge,
        )}
      >
        {icon ?? <ArrowUpRightIcon className="size-5" />}
      </span>
    </a>
  );
}

/** Small mono label that sits above a heading. */
export function Eyebrow({
  children,
  className,
  dotClassName = "bg-sun",
  as: Tag = "p",
  id,
}: {
  children: ReactNode;
  className?: string;
  dotClassName?: string;
  as?: "p" | "h2";
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={cx(
        "inline-flex items-center gap-2.5 font-mono text-xs font-medium tracking-[0.16em] uppercase",
        className,
      )}
    >
      <span aria-hidden="true" className={cx("size-2 rounded-full", dotClassName)} />
      {children}
    </Tag>
  );
}
