# Dynamics Design & Decoration — Next.js clone

A responsive multi-page recreation of the six supplied PDF page designs using **Next.js App Router + Tailwind CSS only**.

## Run locally
1. Install Node.js 18.17+.
2. Open this folder in a terminal.
3. Run `npm install`
4. Run `npm run dev` and visit `http://localhost:3000`
5. Run `npm run build` before deployment.

## Routes
- `/` — Home
- `/services` — Services
- `/sectors` — Sectors
- `/projects` — Portfolio
- `/about` — About
- `/contact` — Contact

## Fidelity notes
- The PDFs show patterned dark image placeholders with captions rather than actual project photography. The clone recreates those placeholder panels to preserve the supplied visual reference. Replace them with approved photography when available.
- Text shown as bracketed placeholders in the PDFs (company year, client names, licence details, contact details, outcomes, etc.) is intentionally preserved as placeholder content instead of being invented.
- The contact form is client-side UI only; it does not submit to a server or email until a backend endpoint is supplied.
- Brand colors sampled/approximated from the PDFs: near-black `#151616`, warm paper `#F4EFE5`, sand `#E9E0D1`, and ochre `#C18D43`.
