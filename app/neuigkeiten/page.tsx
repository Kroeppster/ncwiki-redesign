import PageIntro from '@/components/PageIntro';
import { newsItems } from '@/data/siteContent';

export default function NeuigkeitenPage() {
  return (
    <div className="space-y-6">
      <PageIntro title="Neuigkeiten" description="Aktuelle Updates rund um NCWiki, Prüfungen und Lernressourcen." />
      <div className="space-y-3">
        {newsItems.map((item) => (
          <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs uppercase tracking-wide text-brand-700 dark:text-brand-500">{item.date}</p>
            <h2 className="mt-1 font-semibold">{item.title}</h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
