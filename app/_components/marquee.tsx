import { marqueeWords } from "../_lib/content";
import { SparkleIcon } from "./icons";

/**
 * A tilted, endlessly scrolling band that straddles the dark About section
 * and the light Services section. Purely decorative.
 */
export default function Marquee() {
  // Two identical copies: sliding the track by half its width loops seamlessly.
  const copies = [0, 1].map((copy) => (
    <ul key={copy} className="flex shrink-0 items-center gap-8 pr-8">
      {marqueeWords.map((word) => (
        <li
          key={word}
          className="flex items-center gap-8 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-none whitespace-nowrap uppercase"
        >
          {word}
          <SparkleIcon className="size-6 sm:size-8" />
        </li>
      ))}
    </ul>
  ));

  return (
    <div
      aria-hidden="true"
      className="relative z-10 overflow-x-clip bg-linear-to-b from-ink from-50% to-cream to-50% py-8"
    >
      <div className="-mx-[5%] -rotate-2 border-y-2 border-ink bg-sun py-4 text-ink sm:py-5">
        <div className="flex w-max motion-safe:animate-marquee">{copies}</div>
      </div>
    </div>
  );
}
