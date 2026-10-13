"use client";
import Link from "next/link";
import { useState } from "react";
const links = [["Home","/"],["Services","/services"],["Sectors","/sectors"],["Projects","/projects"],["About","/about"],["Contact","/contact"]];
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="relative z-50 bg-ink text-paper">
    <div className="site-container flex min-h-[76px] items-center justify-between gap-6">
      <Link href="/" className="group shrink-0 leading-tight" onClick={() => setOpen(false)} aria-label="Dynamics home">
        <span className="block font-display text-[25px] tracking-[-.06em]">Dynamics</span>
        <span className="mt-1 block text-[8px] font-semibold tracking-[.19em] text-[#d5c7ad]">DESIGN &amp; DECORATION</span>
      </Link>
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={href} href={href} className="text-[11px] text-paper/80 transition-colors hover:text-gold">{label}</Link>)}
      </nav>
      <Link href="/contact" className="hidden border border-gold bg-gold px-4 py-3 text-[10px] font-bold text-ink transition-colors hover:bg-paper lg:inline-flex">Request a Site Survey <span className="ml-3">↗</span></Link>
      <button type="button" className="flex h-10 w-10 items-center justify-center border border-white/25 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(v => !v)}><span className="text-xl">{open ? "×" : "☰"}</span></button>
    </div>
    {open && <nav className="absolute left-0 right-0 top-full border-t border-white/15 bg-ink px-[18px] pb-5 pt-3 shadow-xl lg:hidden" aria-label="Mobile navigation">
      {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-sm">{label}</Link>)}
      <Link href="/contact" onClick={() => setOpen(false)} className="mt-4 inline-flex bg-gold px-4 py-3 text-xs font-bold text-ink">Request a Site Survey ↗</Link>
    </nav>}
  </header>;
}
