import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 text-sm md:grid-cols-2 md:px-6">
        <div>
          <h2 className="font-semibold">NCWiki</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Plattform zur Vorbereitung auf die Schweizer medizinische Abschlussprüfung.
          </p>
        </div>
        <div className="space-y-1 md:text-right">
          <Link href="/ueber-uns" className="block hover:underline">
            Über Uns
          </Link>
          <Link href="/kontakt" className="block hover:underline">
            Kontakt
          </Link>
          <p className="text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} NCWiki</p>
        </div>
      </div>
    </footer>
  );
}
