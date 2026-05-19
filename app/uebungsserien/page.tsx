import PageIntro from '@/components/PageIntro';

const series = [
  'Basisserie: Klinische Grundlagen',
  'Aufbauserie: Komplexe Fallanalysen',
  'Prüfungssimulation mit Zeitlimit',
];

export default function UebungsserienPage() {
  return (
    <div className="space-y-6">
      <PageIntro title="Übungsserien" description="Trainiere mit strukturierten Übungsserien und sofortigem Feedback." />
      <ul className="space-y-3">
        {series.map((item) => (
          <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
