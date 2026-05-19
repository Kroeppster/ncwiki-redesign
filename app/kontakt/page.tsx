import PageIntro from '@/components/PageIntro';

export default function KontaktPage() {
  return (
    <div className="space-y-6">
      <PageIntro title="Kontakt" description="Schreib uns bei Fragen zu Inhalten, Kursen oder Kooperationen." />
      <form className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <label className="grid gap-1 text-sm">
          Name
          <input type="text" className="rounded-md border border-slate-300 bg-transparent px-3 py-2 dark:border-slate-700" />
        </label>
        <label className="grid gap-1 text-sm">
          E-Mail
          <input type="email" className="rounded-md border border-slate-300 bg-transparent px-3 py-2 dark:border-slate-700" />
        </label>
        <label className="grid gap-1 text-sm">
          Nachricht
          <textarea rows={5} className="rounded-md border border-slate-300 bg-transparent px-3 py-2 dark:border-slate-700" />
        </label>
        <button type="submit" className="rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-500">
          Nachricht senden
        </button>
      </form>
    </div>
  );
}
