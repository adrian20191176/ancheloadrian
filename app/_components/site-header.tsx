import { navLinks, profile } from "../_lib/content";
import LocalTime from "./local-time";
import MobileMenu from "./mobile-menu";
import { cx, shell } from "./ui";

/** Sits on top of the hero rather than inside it, so it stays the page banner. */
export default function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 text-ink">
      <div
        className={cx(shell, "flex items-start justify-between gap-4 pt-4 lg:pt-6")}
      >
        <div className="flex gap-6 font-mono text-[0.7rem] leading-snug tracking-[0.14em] text-umber uppercase sm:gap-10">
          <p>
            Based in
            <span className="block text-ink">{profile.location}</span>
          </p>
          <p>
            Local time
            <LocalTime className="block text-ink tabular-nums" />
          </p>
        </div>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full bg-ink/[0.06] p-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-ink hover:text-sun"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
