import PageIntro from '@/components/PageIntro';

export default function UeberUnsPage() {
  return (
    <div className="space-y-6">
      <PageIntro title="Über Uns" description="NCWiki ist ein gemeinschaftliches Projekt für transparente und effektive Prüfungsvorbereitung." />
      <section className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
          Unser Team aus Medizinstudierenden, Tutor:innen und Ärzt:innen entwickelt Lerninhalte, die auf die Anforderungen der Schweizer Prüfung
          abgestimmt sind. Der Fokus liegt auf klarer Struktur, praxisnahen Beispielen und gegenseitiger Unterstützung in der Community.
        </p>
      </section>
    </div>
  );
}
