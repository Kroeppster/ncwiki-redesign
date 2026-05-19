import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

type DashboardCardProps = {
  title: string;
  text: string;
  href: string;
};

export default function DashboardCard({ title, text, href }: DashboardCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-500 dark:border-slate-800 dark:bg-slate-900"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{text}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700 group-hover:gap-2 dark:text-brand-500">
        Mehr erfahren <FiArrowRight />
      </span>
    </Link>
  );
}
