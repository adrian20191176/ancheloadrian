import { contact, fullName, navLinks } from "../_lib/content";
import { ArrowUpIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { cx, shell } from "./ui";

const footerLinks = [{ href: "#top", label: "Home" }, ...navLinks];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-sun text-ink">
      <div className={cx(shell, "@container pt-16 sm:pt-20")}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <p className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.94] uppercase">
              Got an idea?
              <br />
              Let’s talk.
            </p>
            <ul className="mt-8 grid justify-items-start gap-3 text-lg font-semibold">
              <li>
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 decoration-2 underline-offset-4 hover:underline"
                >
                  <WhatsAppIcon className="size-5" />
                  Message me on WhatsApp
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="inline-flex items-center gap-3 decoration-2 underline-offset-4 hover:underline"
                >
                  <PhoneIcon className="size-5" />
                  {contact.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer" className="lg:col-span-5 lg:justify-self-end">
            <p className="font-mono text-xs font-medium tracking-[0.16em] text-umber uppercase">
              Explore
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-display text-4xl uppercase lg:grid lg:gap-1 lg:text-right">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="decoration-[3px] underline-offset-[6px] hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p
          aria-hidden="true"
          // Measured so the name runs edge to edge of the content width.
          className="mt-16 font-display text-[16.2cqw] leading-[0.8] whitespace-nowrap uppercase select-none sm:mt-20"
        >
          {fullName}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink/20 py-5 font-mono text-[0.7rem] tracking-[0.14em] text-umber uppercase">
          <p>
            &copy; {year} {fullName}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-ink hover:underline"
          >
            Back to top
            <ArrowUpIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
