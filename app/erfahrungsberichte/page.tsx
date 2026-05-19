import PageIntro from '@/components/PageIntro';
import { reports } from '@/data/siteContent';

export default function ErfahrungsberichtePage() {
  return (
    <div className="space-y-6">
      <PageIntro title="Erfahrungsberichte" description="Einblicke von Studierenden, die den Weg bereits gegangen sind." />
      <div className="space-y-3">
        {reports.map((item) => (
          <blockquote key={item} className="rounded-lg border border-slate-200 bg-white p-4 italic dark:border-slate-800 dark:bg-slate-900">
            {item}
          </blockquote>
        ))}
      </div>
    </div>
  );
}
