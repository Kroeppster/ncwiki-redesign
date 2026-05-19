import { FiBookOpen, FiCalendar, FiUsers } from 'react-icons/fi';
import DashboardCard from '@/components/DashboardCard';
import PageIntro from '@/components/PageIntro';
import { homeCards } from '@/data/siteContent';

const quickStats = [
  { label: 'Aktive Lernserien', value: '24', icon: FiBookOpen },
  { label: 'Nächste Events', value: '6', icon: FiCalendar },
  { label: 'Community-Beiträge', value: '180+', icon: FiUsers },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <PageIntro
        title="Willkommen bei NCWiki"
        description="Dein zentrales Dashboard für eine strukturierte und erfolgreiche Vorbereitung auf die medizinische Prüfung in der Schweiz."
      />

      <section className="grid gap-4 sm:grid-cols-3">
        {quickStats.map((item) => (
          <article key={item.label} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <item.icon className="text-brand-700 dark:text-brand-500" size={20} />
            <p className="mt-2 text-xl font-bold">{item.value}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{item.label}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {homeCards.map((card) => (
          <DashboardCard key={card.title} {...card} />
        ))}
      </section>
    </div>
  );
}
