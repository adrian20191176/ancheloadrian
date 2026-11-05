"use client";

import { useRef } from "react";
import { contact, navLinks } from "../_lib/content";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";
import LocalTime from "./local-time";
import { PillLink } from "./ui";

/**
 * Full-screen menu for small screens. A native modal <dialog> handles focus
 * trapping, Escape to close and handing focus back to the Menu button.
 */
export default function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink py-2 pr-5 pl-4 text-sm font-semibold text-cream md:hidden"
      >
        <MenuIcon className="size-5" />
        Menu
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Menu"
        className="menu-dialog fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto bg-sun p-0 text-ink"
      >
        <div className="flex min-h-full flex-col px-4 pt-4 pb-8 sm:px-6">
          <div className="flex items-start justify-between gap-4">
            <p className="font-mono text-[0.7rem] leading-snug tracking-[0.14em] text-umber uppercase">
              Local time
              <LocalTime className="block text-ink tabular-nums" />
            </p>
            <button
              type="button"
              onClick={close}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink py-2 pr-5 pl-4 text-sm font-semibold text-cream"
            >
              <CloseIcon className="size-5" />
              Close
            </button>
          </div>

          <nav aria-label="Menu" className="mt-12 flex-1">
            <ul className="divide-y divide-ink/15 border-y border-ink/15">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="flex items-baseline gap-4 py-4 font-display text-[clamp(3rem,15vw,5rem)] leading-none uppercase"
                  >
                    <span className="font-mono text-sm text-umber">
                      0{index + 1}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 grid gap-4">
            <PillLink
              href={contact.whatsappUrl}
              external
              icon={<WhatsAppIcon className="size-5" />}
              className="w-full"
            >
              Start a project
            </PillLink>
            <p className="text-center text-sm text-umber">
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
      </dialog>
    </>
  );
}
