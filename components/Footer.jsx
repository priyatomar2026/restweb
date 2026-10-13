import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1.2fr_.8fr] md:items-end">
        <div>
          <Link href="/" className="font-display text-3xl tracking-[-.05em]">
            Dynamics
          </Link>
          <p className="mt-1 text-[9px] tracking-[.2em] text-paper/60">
            DESIGN &amp; DECORATION
          </p>
          <p className="mt-6 max-w-md text-sm leading-6 text-paper/65">
            Turnkey fit-out, MEP, civil works, acoustic treatment, interiors and
            maintenance across the UAE.
          </p>
        </div>
        
      </div>
      <div className="border-t border-white/15">
        <div className="site-container flex flex-col gap-2 py-4 text-[10px] text-paper/45 sm:flex-row sm:justify-between">
          <span>© Dynamics Design &amp; Decoration</span>
          <span>Dubai · Abu Dhabi · Northern Emirates</span>
        </div>
      </div>
    </footer>
  );
}
