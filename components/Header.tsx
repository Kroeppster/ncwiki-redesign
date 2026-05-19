'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '@/data/siteContent';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="text-lg font-bold text-brand-700 dark:text-brand-500">
          NCWiki
        </Link>

        <button
          type="button"
          aria-label="Menü öffnen"
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        <ul className="hidden items-center gap-4 text-sm md:flex">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="rounded px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="space-y-2 border-t border-slate-200 px-4 py-3 text-sm md:hidden dark:border-slate-800">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block rounded px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
