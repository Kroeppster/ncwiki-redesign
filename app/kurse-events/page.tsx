import PageIntro from '@/components/PageIntro';
import { courseItems } from '@/data/siteContent';

export default function KurseEventsPage() {
  return (
    <div className="space-y-6">
      <PageIntro title="Kurse & Events" description="Finde die nächsten Live-Angebote zur Prüfungs- und Lernvorbereitung." />
      <ul className="space-y-3">
        {courseItems.map((item) => (
          <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
