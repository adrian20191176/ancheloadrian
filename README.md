# Adrian Anchelo Portfolio

A one-page portfolio built with Next.js and Tailwind CSS: a sunny, bold
design with a 3D portrait, a live local-time clock and WhatsApp as the main
way to get in touch.

## Development

```bash
npm run dev
```

## Editing the site

- **Words, services, process steps and contact details** all live in
  `app/_lib/content.ts`. Change them there and every section updates.
- **Sections** are in `app/_components/`, one file each (`hero.tsx`,
  `about.tsx`, `services.tsx`, `process.tsx`, `why-me.tsx`,
  `contact-cta.tsx`, `site-footer.tsx`), assembled in `app/page.tsx`.
- **Colours** are design tokens at the top of `app/globals.css`
  (`sun`, `ink`, `cream`, and friends), available as Tailwind classes such as
  `bg-sun` or `text-ink`.
- **Fonts** are loaded in `app/layout.tsx`: Anton for headlines, DM Sans for
  body text, DM Mono for small labels and Caveat for the hand-written notes.
