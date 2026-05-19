import Link from 'next/link';
import { FaBook, FaClipboardList, FaBullhorn, FaUsers } from 'react-icons/fa';

const links = [
  {
    icon: FaBook,
    label: 'Übungsserien',
    href: '/uebungen',
    description: 'Kostenlose Übungsaufgaben',
  },
  {
    icon: FaClipboardList,
    label: 'Untertests',
    href: '/untertests',
    description: 'Informationen zu EMS Untertests',
  },
  {
    icon: FaBullhorn,
    label: 'Neuigkeiten',
    href: '/neuigkeiten',
    description: 'Aktuelle Updates und Events',
  },
  {
    icon: FaUsers,
    label: 'Community',
    href: '/ueber-uns',
    description: 'Trete unserer Community bei',
  },
];

export default function QuickLinks() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {links.map((link) => {
          const IconComponent = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600"
            >
              <IconComponent className="text-3xl text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="text-lg font-bold mb-1">{link.label}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{link.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
