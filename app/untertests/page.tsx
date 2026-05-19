import PageIntro from '@/components/PageIntro';
import { subtests } from '@/data/siteContent';

export default function UntertestsPage() {
  return (
    <div className="space-y-6">
      <PageIntro title="Untertests" description="Überblick über alle Untertests mit Lernzielen und Strategien." />
      <div className="grid gap-3 sm:grid-cols-2">
        {subtests.map((item) => (
          <article key={item} className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="font-semibold">{item}</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Empfohlene Lernzeit: 2-3 Wochen pro Block</p>
          </article>
        ))}
      </div>
    </div>
  );
}
